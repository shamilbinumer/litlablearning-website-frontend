import { Link } from 'react-router-dom'
import './PlanSection.scss'
const PlanSection = () => {
  return (
    <div className="PlanSectionMainWrapper" id='early-bird'>
      <div className="main">
        <div className="contents">
          <div style={{textAlign:"center"}}>
          <h3  data-aos='fade-up'>Special launching offer!!</h3>
            <h1  data-aos='fade-up'>Early Bird Offer Is</h1>
            <h1  data-aos='fade-up'>Live Now!!!</h1>
            <h4  data-aos='fade-up'>UP TO 50% OFF</h4>
            <Link to='/early-bird-details'><button>BUY NOW</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlanSection
