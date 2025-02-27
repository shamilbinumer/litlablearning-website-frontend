
import { Link } from 'react-router-dom'
import './TermsAndConditions.scss'
import ScrollTopMount from '../ScrollTopMount'
const TermsAndConditions = () => {
  return (
    <div className="TermsAndConditionsMainWrapper">
        <ScrollTopMount/>
        <div className="terms-heading">
            <h1>Terms & Conditions</h1>
        </div>
        <div className="content-section">
            <h3>Welcom to Litlablearing</h3>
            <div className="listOfItems">
                <p className='term-heading'>1. Acceptance</p>
                <p className='term-disc'>By accessing or using the LITLAB LEARNING app or website (collectively, the "Platform"), you agree to be bound by these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use the Platform.
                </p>
                <p className='term-heading'>2. Use of the Platform</p>
                <ul>
                    <li>  <p className='term-disc'>You agree to use the Platform only for lawful purposes and in accordance with these Terms and Conditions.
                    </p></li>
                    <li>  <p className='term-disc'>You are responsible for maintaining the confidentiality of your account and password, if applicable.

                    </p></li>
                    <li><p className='term-disc'>You agree not to use the Platform in any way that could damage, disable, overburden, or impair the Platform or interfere with any other party's use and enjoyment of the Platform.</p></li>
                    <li><p className='term-disc'>You agree not to use any automated means, including scripts, robots, crawlers, or scrapers, to access, use, or copy any portion of the Platform, except as expressly authorized by us in writing.
                    </p></li> <li><p className='term-disc'>You agree not to:
                    </p></li>
                    <ul className='nested-list' style={{paddingLeft:"20px"}}>
                    <li><p className='term-disc'>Use the Platform for any illegal or unauthorized purpose.</p></li>
                    <li><p className='term-disc'>Transmit any viruses or other harmful code.
                    </p></li>
                    <li><p className='term-disc'>Interfere with or disrupt the integrity or performance of the Platform.
                    </p></li>
                    <li><p className='term-disc'>Impersonate any person or entity, or falsely claim an affiliation with any person or entity.

                    </p></li>
                    <li><p className='term-disc'>Collect personal information about other users without their consent.</p></li>
                    <li><p className='term-disc'>Use the Platform in any way that violates any applicable laws or regulations.

</p></li>

                    </ul>
                </ul>
                <p className='term-heading'>3. Intellectual Property</p>
                <p className='term-disc'>All content on the Platform, including but not limited to text, images, logos, and software, is protected by copyright, trademark, and other intellectual property laws and is owned by Litlab Learning Pvt Ltd or its licensors. You may not use any content from the Platform without our prior written consent.

                </p>
                <p className='term-heading'>4. Disclaimer of Warranties</p>
                <p className='term-disc'>The Platform is provided "as is" and "as available" without warranty of any kind, express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Platform will be uninterrupted or error-free.
                </p>
                <p className='term-heading'>5. Limitation of Liability</p>
                <p className='term-disc'>In no event shall Litlab Learning Pvt Ltd be liable for any damages whatsoever, including, but not limited to, direct, indirect, incidental, consequential, special, exemplary, or punitive damages, arising out of or in any way connected with the use of the Platform.
                </p>
                <p className='term-heading'>6. Indemnification</p>
                <p className='term-disc'>
You agree to indemnify and hold harmless Litlab Learning Pvt Ltd and its affiliates, officers, directors, employees, agents, and licensors from any and all claims, losses, damages, liabilities, costs, and expenses (including attorneys' fees) arising out of or in any way connected with your use of the Platform.
                </p>
                <p className='term-heading'>7. Governing Law</p>
                <p className='term-disc'>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of Kerala, India.
                </p>
                <p className='term-heading'>8. Dispute Resolution</p>
                <p className='term-disc'>
Any dispute arising out of or relating to these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts in Kozhikode, Kerala, India.
                </p>
                <p className='term-heading'>9. Changes to Terms and Conditions</p>
                <p className='term-disc'>
                We may update these Terms and Conditions from time to time. We will notify you of any material changes by posting the updated Terms and Conditions on the Platform and, if necessary, by sending you an email notification.
                </p>
                <p className='term-heading'>10. Severability</p>
                <p className='term-disc'>
                If any provision of these Terms and Conditions is found to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall remain in full force and effect.
                </p>
                <p className='term-heading'>11. Entire Agreement</p>
                <p className='term-disc'>
                These Terms and Conditions constitute the entire agreement between you and Litlab Learning Pvt Ltd with respect to the use of the Platform and supersede all prior or contemporaneous communications, representations, and understandings, whether oral or written.
                </p>
              
            </div>
            <Link to='/'><button>Back</button></Link>
        </div>
    </div>
  )
}

export default TermsAndConditions
