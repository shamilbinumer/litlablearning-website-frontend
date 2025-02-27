import { Link } from 'react-router-dom'
import './Contact.scss'

const Contact = () => {
    return (
        <div className='ContactMainWrapper'>
            <section>
                <div className="contact">
                    <div className="top-section">
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/company/litlablearning/" target='_blank'><img src="/Vector (1).png" alt="" /></a>
                            <a href="https://www.instagram.com/litlab_learning" target='_blank'><img src="/instagram-1_svgrepo.com.png" alt="" /></a>
                            <a href=""><img src="/Icons.png" alt="" /></a>
                        </div>
                        <div className="heading">
                            <h1 data-aos='fade-up'>CONTACT US AT</h1>
                        </div>
                    </div>
                    <div className="contact-cardWrapper" id='contact'>
                        <div className="contact-card">
                            <img src="/Group 139.png" className='rount-icon' alt="" />
                            <img src="/Logo.png" alt="" className="logo" />
                            <div className="item-card">
                                <a href="tel:8137851545">Call Us:  +91  8137851545 </a>
                                <img src="/telephone 1.png" alt="" />
                            </div>
                            <div className="item-card">
                                <a href="mailto:Info@litlablearning.com">Email : Info@litlablearning.com</a>
                                <img src="/gmail (1) 2.png" alt="" />
                            </div>
                            <div className="item-card">
                                <a href="mailto:litlablearning@gmail.com">265/A11, KOVOOR MLA Rd, <br />
                                    Palazhi, Iringallur P.O, Kozhikode, Kerala</a>
                                <img src="/Group 481816.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Moved the policy section outside the contact div for better positioning */}
            <div className="policy-section-wrapper">
                <div className="policy-section">
                    <Link to='/terms-and-conditions'>Terms and Conditions</Link>
                    <Link to='/refund-policy'>Refund Policy</Link>
                    <Link to='/privacy-policy'>Privacy Policy</Link>
                    <Link to='/return-policy'>Return Policy</Link>
                    <Link to='/shipping-policy'>Shipping Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default Contact