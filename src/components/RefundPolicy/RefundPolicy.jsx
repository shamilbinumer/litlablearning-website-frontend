import { Link } from 'react-router-dom'
import ScrollTopMount from '../ScrollTopMount'
import './RefundPolicy.scss'

const RefundPolicy = () => {
  return (
    <div className='RefundPolicyMainWrapper'>
       <ScrollTopMount/>
        <div className="terms-heading">
            <h1>Refund Policy</h1>
        </div>
        <div className="content-section">
            <h3>Welcom to Litlablearning</h3>
            <div className="listOfItems">
                <p className='term-heading'>1. General Refund Policy</p>
                <p className='term-disc'>Due to the nature of our educational services, which are primarily digital and accessed remotely, Litlab Learning Pvt Ltd generally does not offer refunds for any purchases made on the Platform. 
                </p>
             


                <p className='term-heading'>2. Exceptions</p>
                <p className='term-disc'>We may consider issuing a partial or full refund in the following limited circumstances:
                <ul style={{marginLeft:"10px"}}>
                    <li><span className='term-heading'>Technical Issues : </span><span className='term-disc'>If you encounter significant and persistent technical issues with the Platform that prevent you from accessing or utilizing the learning materials or services, we will investigate the issue and may offer a partial or full refund based on the severity and duration of the disruption.
                    </span>
                    </li>
                    <li><span className='term-heading'>Material Misrepresentation : </span><span className='term-disc'>If the Platform or its services are materially misrepresented in the marketing or promotional materials, we may consider issuing a partial or full refund.

                    </span></li>

                    <li><span className='term-heading'>Cancellation of Courses : </span><span className='term-disc'> If Litlab Learning Pvt Ltd cancels a course or program that you have enrolled in, we will offer you a full refund or an opportunity to transfer your enrollment to an alternative course or program.
                    </span></li>
                </ul>

                </p>
                <p className='term-heading'>3. Refund Request Procedure</p>
                <p className='term-disc'>To request a refund, please contact us at <a href="mailto:Info@litlablearning.com
">Info@litlablearning.com
                </a> or <a href="tel:8137851545">+91 8137851545</a> within 7 days of encountering the issue. You will need to provide a detailed explanation of the issue and any supporting documentation.

                </p>
                <p className='term-heading'>4. Refund Processing</p>
                <p className='term-disc'>
                If a refund is approved, the amount will be credited within 7 business days. The refund will be issued to the original payment method used for the purchase

                </p>
                <p className='term-heading'>5. Disclaimer</p>
                <p className='term-disc'>
                This Refund Policy is subject to change at any time. We will notify you of any changes to this policy by posting the updated policy on the Platform.

                </p>
               
              
            </div>
            <Link to='/'><button>Back</button></Link>
        </div>
    </div>
  )
}

export default RefundPolicy
