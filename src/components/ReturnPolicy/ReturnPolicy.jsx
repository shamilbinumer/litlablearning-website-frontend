import { Link } from 'react-router-dom'
import './ReturnPolicy.scss'
import ScrollTopMount from '../ScrollTopMount'

const ReturnPolicy = () => {
  return (
    <div className="ReturnPolicyMainWrapper">
        <ScrollTopMount/>
        <div className="terms-heading">
            <h1>Return Policy</h1>
        </div>
        <div className="content-section">
            <h3>Welcom to Litlablearning</h3>
            <div className="listOfItems">
                <p className='term-heading'>1. Not Applicable</p>
                <p className='term-disc'>As LITLAB LEARNING provides educational services and does not involve the sale or delivery of physical products, this Return Policy is <strong>not applicable</strong>. 
                </p>
             


                <p className='term-heading'>2. Service-Based Nature</p>
                <p className='term-disc'>Our services are primarily digital and accessed remotely through the LITLAB LEARNING app or website. Therefore, traditional return procedures for physical goods are not relevant.
                </p>
                <p className='term-heading'>3. Refund Policy</p>
                <p className='term-disc'>
                Please refer to our separate Refund Policy for information on specific circumstances under which refunds may be considered.
                </p>
            </div>
            <Link to='/early-bird-details'><button>Back</button></Link>
        </div>
    </div>
  )
}

export default ReturnPolicy
