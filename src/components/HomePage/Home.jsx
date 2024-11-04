import Navbar from "../Navbar/Navbar"
import Contact from "./Contact/Contact"
import Hero from "./Hero/Hero"
import JourneySection from "./JourneySection/JourneySection"
import PersonaOne from "./PersonaOne/PersonaOne"
import PersonaThree from "./PersonaThree/PersonaThree"
import PersonaTwo from "./PersonaTwo/PersonaTwo"
import ThirdSection from "./ThirdSection/ThirdSection"
import WelcomeSection from "./WelcomeSection/WelcomeSection"

const Home = () => {
  return (
    <div>
      <Navbar/>

      <Hero/>
      <WelcomeSection/>
      <ThirdSection/>
      <PersonaOne/>
      <PersonaTwo/>
      <PersonaThree/>
      <JourneySection/>
      <div id="contact"><Contact/></div>
    </div>
  )
}

export default Home
