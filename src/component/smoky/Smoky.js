import { useEffect, useRef } from "react";

export default function SmokyBanner() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const fragmentShaderSource = `#version 300 es
    precision highp float;

    uniform float time;
    uniform vec2 vp;

    in vec2 uv;
    out vec4 fragColor;

    float rand(vec2 p) {
        return fract(sin(dot(p.xy, vec2(1., 300.))) * 43758.5453123);
    }

    float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);

        float a = rand(i);
        float b = rand(i + vec2(1.0, 0.0));
        float c = rand(i + vec2(0.0, 1.0));
        float d = rand(i + vec2(1.0, 1.0));

        vec2 u = f * f * (3.0 - 2.0 * f);

        return mix(a, b, u.x) +
                (c - a)* u.y * (1.0 - u.x) +
                (d - b) * u.x * u.y;
    }

    #define OCTAVES 5
    float fbm(vec2 p) {
        float value = 0.;
        float amplitude = .4;
        for (int i = 0; i < OCTAVES; i++) {
            value += amplitude * noise(p);
            p *= 2.;
            amplitude *= .4;
        }
        return value;
    }

    void main() {
        vec2 p = uv.xy;
        p.x *= vp.x / vp.y; 

        float gradient = mix(p.y*.2 + .1, p.y*1.2 + .9, fbm(p));
        float speed = 0.2;
        float details = 7.;
        float force = .9;
        float shift = .5;
    
        vec2 fast = vec2(p.x, p.y - time*speed) * details;
        float ns_a = fbm(fast);
        float ns_b = force * fbm(fast + ns_a + time) - shift;    
        float ins = fbm(vec2(ns_b, ns_a));

        vec3 c1 = mix(vec3(.2, .5, .3), vec3(.0, .0, .5), ins + shift);

        float alpha = 0.35; // semi-transparent smoke
        fragColor = vec4(c1 + vec3(ins - gradient), alpha);
    }`;

        class WebGLHandler {
            vertexShaderSource = `#version 300 es
        precision mediump float;
        const vec2 positions[6] = vec2[6](
          vec2(-1.0, -1.0), vec2(1.0, -1.0),
          vec2(-1.0, 1.0), vec2(-1.0, 1.0),
          vec2(1.0, -1.0), vec2(1.0, 1.0)
        );
        out vec2 uv;
        void main() {
          uv = positions[gl_VertexID];
          gl_Position = vec4(positions[gl_VertexID], 0.0, 1.0);
        }`;

            constructor(canvas, fragmentShaderSource) {
                this.cn = canvas;
                this.gl = canvas.getContext("webgl2", { alpha: true });
                this.startTime = Date.now();

                this.resize();
                window.addEventListener("resize", () => this.resize());

                this.program = this.gl.createProgram();
                this.compileShader(this.vertexShaderSource, this.gl.VERTEX_SHADER);
                this.compileShader(fragmentShaderSource, this.gl.FRAGMENT_SHADER);
                this.gl.linkProgram(this.program);
                this.gl.useProgram(this.program);

                // Enable alpha blending
                this.gl.enable(this.gl.BLEND);
                this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

                this.timeLocation = this.gl.getUniformLocation(this.program, "time");
                this.resolutionLocation = this.gl.getUniformLocation(this.program, "vp");

                this.render();
            }

            resize() {
                this.cn.width = window.innerWidth;
                this.cn.height = window.innerHeight;
                this.gl.viewport(0, 0, this.cn.width, this.cn.height);
            }

            compileShader(source, type) {
                const shader = this.gl.createShader(type);
                this.gl.shaderSource(shader, source);
                this.gl.compileShader(shader);
                if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
                    console.error(this.gl.getShaderInfoLog(shader));
                    this.gl.deleteShader(shader);
                    return null;
                }
                return this.gl.attachShader(this.program, shader);
            }

            render = () => {
                this.gl.uniform1f(this.timeLocation, (Date.now() - this.startTime) / 1000);
                this.gl.uniform2fv(this.resolutionLocation, [
                    this.cn.width,
                    this.cn.height
                ]);
                this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
                window.requestAnimationFrame(this.render);
            };
        }

        new WebGLHandler(canvasRef.current, fragmentShaderSource);
    }, []);

    return (
        <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
            <img
                src="../../../Assets/Banner/banner.png"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 0,
                    display: 'none'
                }}
            />
            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 2,
                    pointerEvents: "none"
                }}
            />
        </div>
    );
}
