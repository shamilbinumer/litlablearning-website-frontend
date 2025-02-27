import './Hero.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Hero = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className='HeroMainWrapper'>
      <div className="hero">
        <div className="hero-heading">
          <img src="/big-circle.png" alt="" className="big-cericle" />
          <img src="/small-circle.png" alt="" className="small-cericle" />
          <img src="/a+filled.png" alt="" className="top-note-image" />
          <h1>0% <span>Failures</span> in Your <br /> Degree <span>Exams!</span></h1>
          <img src="/a+ not-filled.png" alt="" className="bottom-note-image" />
        </div>
        <div className="hero-para">
          <p data-aos='fade-up'> Our platform is designed to simplify learning, providing all the resources and <br /> support you need to pass your exams with confidence.</p>
          <a href="https://litlab.live/#/login"><button>Get Started</button></a>
        </div>
        <div className="banner-img">
          <div className='card-images1'><img src="/card 1.jpg" alt="" className='card-one' /><p><span>Engaging</span> and <br /> <span>Interactive</span> <br /> Learning <br /> Environment</p>
          <img src="/5021e7940b5f861581862445cdcbdd3b.gif" alt="" className="banner-gif1" />
          </div>
          <div className='card-images2'><img src="/card 2.jpg" alt="" className='card-two' /><p><span>Enhanced</span> <br /> Learning <br /> Outcomes</p><img src="/80261828e87031e931aa0d9fe7e6bba6.gif" alt="" className="gif-img-2" /></div>
          <div className='card-images3'><img src="/card 3.jpg" alt="" className='card-three' />
          <p><span>Comprehensive</span> <br /> and Well- <br /><span>Structured</span> <br /> Study Materials</p>
       <div className="gif-img-wrapp">   <img src="/3d3001ab1af72813b9f74314f2b9d6e6.gif" alt="" className="gif-img3" /></div></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
