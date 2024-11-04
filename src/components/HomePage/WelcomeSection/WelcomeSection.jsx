import './WelcomeSection.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const WelcomeSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className='welcomSectionMainWrapper'>
      <div className="welcom-section">
        <div className="blue-section">
            <img src="/bulb.png" alt="" className="bulb-img" />
            <h1 data-aos='fade-up'>WELCOME TO LIT LAB</h1>
        </div>
        <div className="image-section">
            <img src="/character-2-copy.png" className='' alt="" />
        </div>
      </div>
    </div>
  )
}

export default WelcomeSection
