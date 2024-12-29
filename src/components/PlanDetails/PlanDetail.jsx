import { Link } from 'react-router-dom';
import './PlanDetail.scss'
import { FaArrowLeft } from "react-icons/fa6";
import ScrollTopMount from '../ScrollTopMount';
const PlanDetails = () => {
  return (
    <div className="PlanDetailPageMainWrapper">
        <ScrollTopMount/>
      <div className="plan-details">
     <Link to='/'> <FaArrowLeft className='back-btn' /></Link>
     <div className="heading">
        <h3 >Special launching offer!!</h3>
        <h1  data-aos-duration="1500">Early Bird Offer Is </h1>
        <h2>Live Now!!!</h2>
        <h4>UP TO 50% OFF</h4>
     </div>
     <div className="plan-card-main">
    <div className="row">
        <div className="col-lg-5 col-md-12 plan-card-left">
            <ul>
                <li>High-Quality Study Notes</li>
                <li>Video Lectures </li>
                <li>Question Papers</li>
                <li>Expert Support</li>
                <li>Mentorship Support</li>
                <li>Access to 4 papers <span>(Major, Minor,Common Paper)</span></li>
                <li>Access available for 2 semesters</li>
            </ul>
        </div>
        <div className="col-lg-7 col-md-12 plan-card-right">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="plan-card">
                        <div className="price-container">
                            <div className="price">
                                <h4>₹5198</h4>
                                <div className="cross"></div>
                            </div>
                        </div>
                        <div className="offer-price-section">
                            <h1>₹3299</h1>
                            <h3>For 1 Semester</h3>
                            <button>BUY NOW</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="plan-card">
                        <div className="price-container">
                            <div className="price">
                                <h4>₹15594</h4>
                                <div className="cross"></div>
                            </div>
                        </div>
                        <div className="offer-price-section">
                            <h1>₹6599</h1>
                            <h3>For 3 Semester</h3>
                            <button>BUY NOW</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="coupon-apply-wraper">
                <input type="text"  placeholder='Apply your referral code'/>
                <button>Apply</button>
            </div>
            <p className='apply-ref-text'>*Apply your referral code to grab extra off up to 50%</p>
        </div>
    </div>
     </div>
      </div>
    </div>
  )
}

export default PlanDetails
