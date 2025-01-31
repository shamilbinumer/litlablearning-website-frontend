import Navbar from "../Navbar/Navbar"
import Contact from "./Contact/Contact"
import Hero from "./Hero/Hero"
import JourneySection from "./JourneySection/JourneySection"
import PersonaOne from "./PersonaOne/PersonaOne"
import PersonaThree from "./PersonaThree/PersonaThree"
import PersonaTwo from "./PersonaTwo/PersonaTwo"
import ThirdSection from "./ThirdSection/ThirdSection"
import WelcomeSection from "./WelcomeSection/WelcomeSection"
import PlanSection from "./PlanSection/PlanSection"
import ScrollTopMount from "../ScrollTopMount"
import { motion } from 'framer-motion';



const Home = () => {
  return (
    <div>
       <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      <Navbar/>
      <ScrollTopMount/>
      <Hero/>
      <PlanSection/>
      <WelcomeSection/>
      <ThirdSection/>
      <PersonaOne/>
      <PersonaTwo/>
      <PersonaThree/>
      <JourneySection/>
      <div id="contact"><Contact/></div>
      </motion.div>
    </div>
  )
}

export default Home
