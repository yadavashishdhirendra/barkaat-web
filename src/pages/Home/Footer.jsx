import React from 'react'
import brk_logo from '../../Assets/brklogo.png'

const Footer = () => {
    return (
        <div>
            <div className='brown_footer'>
                <img className='brk_logo' src={brk_logo} alt="" />
                <div className="footer_category">
                    <div className="categor_sec">
                        <h4>Category</h4>
                        <ul>
                            <li>Almond</li>
                            <li>Cashew</li>
                            <li>Pista</li>
                            <li>Walnut</li>
                            <li>Raisins</li>
                        </ul>
                    </div>

                    <div className="categor_sec">
                        <h4>Get In Touch</h4>
                        <ul>
                            <li>Instagram</li>
                            <li>Email</li>
                            <li>Twitter</li>
                            <li>Whatsapp</li>
                        </ul>
                    </div>
                    <div className="categor_sec">
                        <h4>Page Info</h4>
                        <ul>
                            <li>Home</li>
                            <li>Product </li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="categor_sec address_cat">
                        <p>Inspire BKC, Bandra Mumbai 400051</p>
                        <p>+91 7699086723</p>
                    </div>
                </div>
            </div>
            <div className="bootom_footer">

            </div>
        </div>
    )
}

export default Footer