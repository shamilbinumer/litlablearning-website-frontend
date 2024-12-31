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
              <div className="nav-item"><Link to="#early-bird">Early Bird</Link></div>
              <div className="nav-item"><Link to='#contact'>Contact</Link></div>
            <div>
            <a href="https://litlab.live/#login_page" className='login'>Log in</a>
            <a href="https://litlab.live/#registration" className='login sign-up'>Sign Up</a>

            </div>
           
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-nav-wrapper">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Link to="/">
              <img src="/Logo.png" alt="Logo" />
            </Link>
          </a>
          <a href="https://litlab.live/#login_page" className="login-btn">
            Log in 
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNavAltMarkup"
            ref={collapseRef}
          >
            <div className="navbar-nav">
              <a className="nav-link active" href="#" onClick={handleLinkClick}>
                Home
              </a>
              <Link
                className="nav-link active"
                to="#early-bird"
                onClick={handleLinkClick}
              >
                Early Bird
              </Link>
              <Link
                className="nav-link active"
                to="#contact"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </div>
  );
};

export default Navbar;
