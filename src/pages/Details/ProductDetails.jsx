import React, { Fragment } from 'react'
import '../Home/styles/style.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AlmondsImg from '../../Assets/almond.png'
import CashewImg from '../../Assets/image3.png';
import PistaImg from '../../Assets/image2.png';
import WalnutImg from '../../Assets/image1.png';
import HazelnutImg from '../../Assets/almond.png';
import PeanutImg from '../../Assets/image1.png';
import KAJU from '../../Assets/KAJU.png'
import bundle from '../../Assets/Untitled.png'
import './styles/style.css'
import Footer from '../Home/Footer';

const ProductDetails = () => {

    const items = ['KAJU', 'Cashew', 'Pista', 'Walnut', 'Hazelnut', 'Peanut'];
    const para = [
        'Every almond is a bite of natural goodness — crisp, nutritious, and perfect for mindful snacking.',
        'Handpicked for purity and taste, our cashews are packed with protein, healthy fats, and a smooth crunch you’ll love.',
        'Barkaat Pistachios — little green gems packed with taste, nutrition, and the crunch of pure goodness.',
        'Barkaat Walnuts — nature’s brain food, packed with omega-3s, antioxidants, and pure, earthy flavour.',
        'Hazelnuts offer a sweet and crunchy bite, perfect for snacking or baking with wholesome richness.',
        'Peanuts, a classic favorite, are packed with protein and full of roasted flavor in every bite.'
    ];

    const images = [AlmondsImg, CashewImg, PistaImg, WalnutImg, HazelnutImg, PeanutImg];

    const imagesw = [KAJU];

    const iteme = ['Peri Peri almonds'];

    const amtcross = ['MRP - ₹120']
    const amt = ['MRP - ₹99']
    const badge = [4.5]
    const top_para = [
        'Every almond is a bite of natural goodness — crisp, nutritious, and perfect for mindful snacking.”'
    ];


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4.5,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1299.99,
                settings: {
                    slidesToShow: 3,
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    };


    var setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3.5,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1299.99,
                settings: {
                    slidesToShow: 3,
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    };

    return (
        <Fragment>
            <div className='all_items'>
                <div class="divider">
                    <span>Almonds</span>
                </div>
                <div className="carousel-container">
                    <Slider {...settings}>
                        {items.map((name, index) => (
                            <div className="item" key={index}>
                                <h2>{name}</h2>
                                <p>{para[index]}</p>
                                <div className="see_more">
                                    <button>SEE MORE</button>
                                </div>
                                <div className='product_images'>
                                    <img src={images[index]} alt={name} />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>


                {/* Products */}
                <div className='mt-5'></div>
                <div className="carousel-containers">
                    <Slider {...setting}>
                        {items.map((name, index) => (
                            <div className="itemw" key={index}>

                                <div className='product_image'>
                                    <img src={imagesw} alt={name} />
                                </div>

                                <div className='staps_an'>
                                    <h3>{iteme}</h3>
                                    <div>
                                        <span><i class="fa-solid fa-star"></i> {badge}</span>
                                    </div>
                                </div>
                                <p className='top_pras'>{top_para}</p>
                                <div className='cat_name'>
                                    <p><span className='light_tet'>{amtcross}</span> <span className='bold_text'>{amt}</span></p>
                                </div>
                                <div className="add_cart">
                                    <button>ADD TO CART</button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                {/* Products */}
            </div>

            <div className='all_items'>
                <div class="divider">
                    <span>Cashew</span>
                </div>
                <div className="carousel-container">
                    <Slider {...settings}>
                        {items.map((name, index) => (
                            <div className="item" key={index}>
                                <h2>{name}</h2>
                                <p>{para[index]}</p>
                                <div className="see_more">
                                    <button>SEE MORE</button>
                                </div>
                                <div className='product_images'>
                                    <img src={images[index]} alt={name} />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>


                {/* Products */}
                <div className='mt-5'></div>
                <div className="carousel-containers">
                    <Slider {...setting}>
                        {items.map((name, index) => (
                            <div className="itemw" key={index}>

                                <div className='product_image'>
                                    <img src={imagesw} alt={name} />
                                </div>

                                <div className='staps_an'>
                                    <h3>{iteme}</h3>
                                    <div>
                                        <span><i class="fa-solid fa-star"></i> {badge}</span>
                                    </div>
                                </div>
                                <p className='top_pras'>{top_para}</p>
                                <div className='cat_name'>
                                    <p><span className='light_tet'>{amtcross}</span> <span className='bold_text'>{amt}</span></p>
                                </div>
                                <div className="add_cart">
                                    <button>ADD TO CART</button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                {/* Products */}
            </div>

            <Footer />
        </Fragment>
    )
}

export default ProductDetails
