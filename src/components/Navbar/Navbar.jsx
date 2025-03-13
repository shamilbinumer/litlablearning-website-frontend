import { useState, useEffect, useRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
// import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const collapseRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolled more than 50px (you can adjust this value)
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='NavbarMainWrapper'>
      <div className="desktop-nav-wrapper">
        <div className={`desktop-navigation-bar  ${isScrolled ? 'scrolled' : ''}`}>
          <div className="nav-left">
            <div className="nav-logo">
             <Link to='/'> <img src="/Logo.png" alt="" /></Link>
            </div>
          </div>
          <div className="nav-right">
            <div className="nav-links">
              <div className="nav-item"><a href='/#'>Home</a></div>
              {/* <div className="nav-item"><Link to="#early-bird">Early Bird</Link></div> */}
              <div className="nav-item"><Link to='#contact'>Contact</Link></div>
            <div>
            <a href="https://litlab.live/#/login" className='login'>Log in</a>
            <a href="https://litlab.live/#/signup" className='login sign-up'>Sign Up</a>
            </div>
           
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-nav-wrapper">
        <div className="mobile-navbar">
          <div className="mobile-navbar-container">
            <div className="mobile-logo">
              <Link to="/">
                <img src="/Logo.png" alt="Logo" />
              </Link>
            </div>
            
            <div className="mobile-nav-actions">
              <a href='https://litlab.live/#/login' className="mobile-login-btn">
                Log in
              </a>
              
              <a href='https://litlab.live/#/signup' className="mobile-signup-btn">
                Sign up
              </a>
              
              <button
                className="mobile-menu-toggle"
                onClick={handleToggle}
                aria-expanded={isOpen ? "true" : "false"}
              >
                <span className="mobile-menu-icon"></span>
              </button>
            </div>
          </div>
          
          <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
            <div className="mobile-menu-links">
              <Link to="/" className="mobile-nav-link" onClick={handleLinkClick}>
                Home
              </Link>
              <Link to="#contact" className="mobile-nav-link" onClick={handleLinkClick}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;