import { Link } from 'react-router-dom'
import './PraivasyPolicy.scss'
import ScrollTopMount from '../ScrollTopMount'
const PraivasyPolicy = () => {
  return (
    <div className='privasyPolicyMainWrapper'>
       <ScrollTopMount/>
        <div className="terms-heading">
            <h1> Privacy Policy</h1>
        </div>
        <div className="content-section">
            <h3>Welcom to Litlablearning</h3>
            <div className="listOfItems">
                <p className='term-heading'>1. Information We Collect</p>
                <p className='term-disc'>We may collect the following types of information from you :</p>
                <ul>
                        <li>
                            <p className='term-disc' style={{fontWeight:"600"}}>Personal Information :</p>
                            <ul style={{paddingLeft:"20px"}}>
                                <li>   <p className='term-disc'>Name</p></li>
                                <li>   <p className='term-disc'>Email address</p></li>
                                <li>   <p className='term-disc'>Phone number                                </p></li>
                                <li>   <p className='term-disc'>Date of birth
                                </p></li>
                                <li>   <p className='term-disc'>Gender </p></li>
                                <li>   <p className='term-disc'>Location (city, state/province)</p></li>
                                <li>   <p className='term-disc'>Payment information (credit/debit card details, etc.)</p></li>
                                <li>   <p className='term-disc'>Educational background</p></li>
                                <li>   <p className='term-disc'>Learning preferences
                                </p></li>


                            </ul>
                        </li>
                        <li>
                            <p className='term-disc' style={{fontWeight:"600"}}>Usage Data :</p>
                            <ul style={{paddingLeft:"20px"}}>
                                <li>   <p className='term-disc'>Information about your interactions with the Platform, such as the pages you visit, the features you use, and the time and duration of your visits.</p></li>
                                <li>   <p className='term-disc'>Device information, such as your IP address, device type, operating system, and browser type.</p></li>
                            </ul>
                        </li>
                        <li>
                            <p className='term-disc' style={{fontWeight:"600"}}>Cookies and Similar Technologies :</p>
                            <ul style={{paddingLeft:"20px"}}>
                                <li>   <p className='term-disc'>We may use cookies, web beacons, and other similar technologies to track your use of the Platform and collect information about your browsing behavior.
                                </p></li>
                            </ul>
                        </li>
                    </ul>
                <p className='term-heading'>2. How We Use Your Information</p>
                <ul>
                    <li>  <p className='term-disc'>To provide and maintain the Platform
                    </p></li>
                    <li>  <p className='term-disc'>To personalize your experience on the Platform


                    </p></li>
                    <li><p className='term-disc'>To communicate with you about your account, our services, and other relevant information
                    </p></li>
                    <li><p className='term-disc'>o process your payments

                    </p></li>
                     <li><p className='term-disc'>To improve our services and develop new features

                    </p></li>
                    <li><p className='term-disc'>To analyze usage trends and gather demographic information

                    </p></li>  <li><p className='term-disc'> To comply with legal and regulatory requirements

                    </p></li>
                   
                </ul>
                <p className='term-heading'>3. Disclosure of Your Information</p>
                <p className='term-disc'>We may disclose your information to:</p>
                <ul style={{marginLeft:"10px"}}>
                        <li>
                        <p className='term-disc'>Our affiliates and subsidiaries</p></li>
              <li>  <p className='term-disc'>Our service providers, such as payment processors, data analytics providers, and customer support providers
              </p></li>
               <li> <p className='term-disc'>Business partners who offer complementary services</p></li>
               <li> <p className='term-disc'>Law enforcement agencies or other government authorities, as required by law
               </p></li>


                    </ul>
                <p className='term-heading'>4. Data Security</p>
                <p className='term-disc'>We take reasonable steps to protect your information from unauthorized access, use, and disclosure. However, no method of transmission over the internet or method of electronic storage is completely secure.

                </p>
                <p className='term-heading'>5. Children's Privacy</p>
                <p className='term-disc'>The Platform is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe that a child under 13 has provided us with personal information, please contact us at <a href="mailto:Info@litlablearning.com">Info@litlablearning.com</a>.
                uential, special, exemplary, or punitive damages, arising out of or in any way connected with the use of the Platform.
                </p>
                <p className='term-heading'>6. Your Rights</p>
                <p className='term-disc'>
                You may have certain rights regarding your personal information, including the right to:
                </p>
                <ul style={{marginLeft:"!0px"}}>
                    <li>
                <p className='term-disc'>Access and view your personal information
                </p>

                    </li>
                    <li>
                <p className='term-disc'> Update and correct your personal information

                </p>

                    </li>  <li>
                <p className='term-disc'>Delete your personal information

                </p>

                    </li>  <li>
                <p className='term-disc'>Restrict the processing of your personal information

                </p>

                    </li> 
                     <li>
                <p className='term-disc'> Object to the processing of your personal information
                </p>

                    </li>
                    <li>
                <p className='term-disc'> Withdraw your consent to the processing of your personal information

                </p>

                    </li>
                </ul>
                <p className='term-heading'>7. Changes to this Privacy Policy</p>
                <p className='term-disc'>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on the Platform.

                </p>
                <p className='term-heading'>8. Contact Us</p>
                <p className='term-disc'>
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:Info@litlablearning.com">Info@litlablearning.com</a>.

                </p>
              
            </div>
            <Link to='/early-bird-details'><button>Back</button></Link>
        </div>
    </div>
  )
}

export default PraivasyPolicy
