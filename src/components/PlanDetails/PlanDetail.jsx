import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PlanDetail.scss';
import { FaArrowLeft, FaCheck } from "react-icons/fa6";
import ScrollTopMount from '../ScrollTopMount';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import baseUrl from '../../../baseUrl';
import SuccessAlert from '../SuccessAlert';
import Alert from '@mui/material/Alert';

const PlanDetails = () => {
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState('');
  const [studentHasPurchased, setStudentHasPurchased] = useState(false);
  const [purchasedModalIsOpen,setPurchasedModalIsOpen]=useState(false)
  const [userDetails,setUserDetails]=useState({})
  const [prices, setPrices] = useState({
    oneSemester: 3299,
    threeSemesters: 6599
  });

  const originalPrices = {
    oneSemester: 3299,
    threeSemesters: 6599
  };

  const discountedPrices = {
    oneSemester: 2499,
    threeSemesters: 5499
  };

  const VALID_COUPON = 'EBONB007';

  const applyCoupon = () => {
    if (couponCode.trim() === '') {
      setCouponError('Please enter a coupon code');
      return;
    }

    if (couponCode === VALID_COUPON && !isCouponApplied) {
      setIsCouponApplied(true);
      setPrices(discountedPrices);
      setCouponError('');
    } else if (isCouponApplied) {
      setCouponError('Coupon already applied');
    } else {
      setCouponError('Invalid coupon code');
    }
  };

  const fetchLoggedInUser = async () => {
    try {
      const authToken = localStorage.getItem('authToken');

      if (!authToken) {
        return null;
      }

      const response = await axios.get(`${baseUrl}/fetch-logined-user`, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });

      if (response.data) {
        setUserDetails(response.data);
        const hasPurchases = response.data.purchases && response.data.purchases.length > 0;
        setStudentHasPurchased(hasPurchases);
      } else {
        console.error('Error fetching user details:', response.data.error);
        return null;
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
      return null;
    }
  };

  useEffect(() => {
    fetchLoggedInUser();
  }, []);

  const handleBuyNow = (forSem, ogPrice, price, couponApplied) => {
    if (studentHasPurchased) {
      setPurchasedModalIsOpen(true);
    } else {
      navigate(`/select-papers?forSem=${forSem}&ogPrice=${ogPrice}&price=${price}&couponApplied=${couponApplied}`);
    }
  };
  return (
    <div className={`PlanDetailPageMainWrapper ${purchasedModalIsOpen?'overflowHidden':''}`}>

      {
        purchasedModalIsOpen && (
          <>
          <div className="modalOverLay">
            <div className="purchasedModal">
                <h2>You Have Already Purachased a Plan</h2>
                <button onClick={()=>setPurchasedModalIsOpen(false)}>Ok</button>
            </div>
          </div>
          </>
        )
      }

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {showSuccessAlert && (
          <SuccessAlert
            message="Payment Successful! Plan Activated."
            onClose={() => setShowSuccessAlert(false)}
          />
        )}
        <ScrollTopMount />
        <div className="plan-details">
          <Link to='/'><FaArrowLeft className='back-btn' /></Link>

          <div className="heading">
            <h3>Special launching offer!!</h3>
            <h1 data-aos-duration="1500">Early Bird Offer Is</h1>
            <h2>Live Now!!!</h2>
            <h4>UP TO 50% OFF</h4>
          </div>

          <div className="plan-card-main">
            <div className="row">
              <div className="col-lg-5 col-md-12 plan-card-left">
                <ul>
                  <li>High-Quality Study Notes</li>
                  <li>Video Lectures</li>
                  <li>Question Papers</li>
                  <li>Expert Support</li>
                  <li>Mentorship Support</li>
                  <li>Access to 4 papers <span>(Major, Minor, Common Paper)</span></li>
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
                        <h1>₹
                          <CountUp
                            start={isCouponApplied ? originalPrices.oneSemester : prices.oneSemester}
                            end={prices.oneSemester}
                            duration={1}
                            separator=","
                          />
                        </h1>
                        <h3>For 1 Semester</h3>
                        <button onClick={() => handleBuyNow(1, 5198, isCouponApplied ? discountedPrices.oneSemester : originalPrices.oneSemester, isCouponApplied)}>
                    BUY NOW
                  </button>
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
                        <h1>₹
                          <CountUp
                            start={isCouponApplied ? originalPrices.threeSemesters : prices.threeSemesters}
                            end={prices.threeSemesters}
                            duration={1}
                            separator=","
                          />
                        </h1>
                        <h3>For 3 Semesters</h3>
                        <button onClick={() => handleBuyNow(2, 15594, isCouponApplied ? discountedPrices.threeSemesters : originalPrices.threeSemesters, isCouponApplied)}>
                    BUY NOW
                  </button>
                      
                      </div>
                    </div>
                  </div>
                </div>

                <div className="coupon-apply-wraper">
                  <input
                    type="text"
                    placeholder='Apply your referral code'
                    value={couponCode}
                    onChange={(e) => {
                      setCouponCode(e.target.value.toUpperCase());
                      setCouponError('');
                    }}
                    disabled={isCouponApplied}
                  />
                  <button
                    style={{ display: "flex", alignItems: "center", gap: "10px" }}
                    onClick={applyCoupon}
                    disabled={!couponCode || isCouponApplied}
                    className={isCouponApplied ? 'applied' : ''}
                  >
                    {isCouponApplied ? (<>Applied <div style={{ backgroundColor: "green", width: "40px", height: "40px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}><FaCheck /></div></>) : 'Apply'}
                  </button>
                </div>

                {couponError && (
                  <Alert severity="error" style={{ marginTop: "1rem" }}>
                    {couponError}
                  </Alert>
                )}

                {isCouponApplied && (
                  // <p className='coupon-success'>Coupon applied successfully! Extra discount applied.</p>
                  <Alert severity="success" style={{ marginTop: "1rem" }}>
                    Coupon applied successfully! Extra discount applied.
                  </Alert>
                )}

                <p className='apply-ref-text'>
                  *Apply your referral code to grab extra off up to 50%
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="policy-section">
          <Link to='/terms-and-conditions'><div>Terms and Conditions</div></Link>
          <Link to='/refund-policy'><div>Refund Policy</div></Link>
          <Link to='/privacy-policy'><div>Privacy Policy</div></Link>
          <Link to='/return-policy'><div>Return Policy</div></Link>
          <Link to='/shipping-policy'><div>Shipping Policy</div></Link>
        </div>
      </motion.div>
    </div>
  );
};

export default PlanDetails;