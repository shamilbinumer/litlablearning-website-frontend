import { Link } from 'react-router-dom'
import ScrollTopMount from '../ScrollTopMount'
import './ShippingPolicy.scss'
const ShippingPolicy = () => {
  return (
    <div className='ShippingPolicyMainWrapper'>
       <ScrollTopMount/>
        <div className="terms-heading">
            <h1>Shipping Policy</h1>
        </div>
        <div className="content-section">
            <h3>Welcom to Litlablearning</h3>
            <div className="listOfItems">
                <p className='term-heading'>1. Not Applicable</p>
                <p className='term-disc'>As LITLAB LEARNING provides educational services and does not involve the sale or delivery of physical products, this Return Policy is <strong>not applicable</strong>. 
                </p>
             


                <p className='term-heading'>2. Service-Based Nature</p>
                <p className='term-disc'>Our services are primarily digital and accessed remotely through the LITLAB LEARNING app or website. Therefore, shipping procedures for physical goods are not relevant.

                </p>
                <p className='term-heading'>3. Service Delivery</p>
                <p className='term-disc'>
               
Access to our educational services is typically granted electronically upon successful enrollment and payment. 

                </p>
            </div>
            <Link to='/early-bird-details'><button>Back</button></Link>
        </div>
    </div>
  )
}

export default ShippingPolicy
