import { Link } from 'react-router-dom'
import './PraivasyPolicy.scss'
import ScrollTopMount from '../ScrollTopMount'

const PraivasyPolicy = () => {
  return (
    <div className='privasyPolicyMainWrapper'>
      <ScrollTopMount />
      <div className="terms-heading">
        <h1>Privacy Policy</h1>
      </div>
      <div className="content-section">
        <h3>Welcom to Litlablearning</h3>
        <div className="listOfItems">
          <p className='term-heading'>1. Information We Collect</p>
          <p className='term-disc'>
            We collect several types of information from and about users of our App, including:
          </p>
          <ul>
            <li>
              <p className='term-disc' style={{ fontWeight: "600" }}>Personal Information:</p>
              <ul style={{ paddingLeft: "20px" }}>
                <li>
                  <p className='term-disc'>
                    Name, email address, username, password, and other registration details.
                  </p>
                </li>
                <li>
                  <p className='term-disc'>
                    <strong>Contact Information :</strong> Email address, phone number (optional), and mailing address (optional).
                  </p>
                </li>
                <li>
                  <p className='term-disc'>
                    <strong>Profile Information :</strong> Information you choose to add to your profile, such as your educational background, interests, and profile picture.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p className='term-disc' style={{ fontWeight: "600" }}>Usage Information:</p>
              <p className='term-disc'>
                We collect several types of information from and about users of our App, including:
              </p>
              <ul style={{ paddingLeft: "20px" }}>
                <li>
                  <p className='term-disc'>
                    <strong>Activity Data :</strong> Courses you enroll in, lessons you complete, quizzes you take, progress you make, and other interactions with the App's features.
                  </p>
                </li>
                <li>
                  <p className='term-disc'>
                    <strong>Device Information :</strong> Information about the device you use to access the App, including the hardware model, operating system and version, unique device identifiers, IP address, and mobile network information.
                  </p>
                </li>
                <li>
                  <p className='term-disc'>
                   <strong> Log Information :</strong> Information about your use of the App, including access times, pages viewed, and referring URLs.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p className='term-disc' style={{ fontWeight: "600" }}>Payment Information:</p>
              <p className='term-disc'>
                If you purchase any paid features or subscriptions, we may collect payment information, such as your credit card details or other payment information. We use secure third-party payment processors, and we do not store your full payment card details on our servers.
              </p>
              <ul style={{ paddingLeft: "20px" }}>
                <li>
                  <p className='term-disc'>
                    <strong>Communications :</strong> We may collect information when you contact us with questions or feedback.
                  </p>
                </li>
              </ul>
            </li>
          </ul>

          <p className='term-heading'>2. How We Use Your Information</p>
          <p className='term-disc'>We use your information for the following purposes:</p>
          <ul>
            <li>
              <p className='term-disc'>
                <strong>Provide and Improve the App:</strong> To deliver the App's functionality, personalize your learning experience, track your progress, and improve the App's features and performance.
              </p>
            </li>
            <li>
              <p className='term-disc'>
                <strong>Account Management:</strong> To create and manage your account, verify your identity, and provide customer support.
              </p>
            </li>
            <li>
              <p className='term-disc'>
                <strong>Communication:</strong> To send you notifications related to your account, courses, and updates about the App. You can manage your notification preferences in your account settings.
              </p>
            </li>
            <li>
              <p className='term-disc'>
                <strong>Personalization:</strong> To personalize your learning experience by recommending courses, content, and features that may be of interest to you.
              </p>
            </li>
            <li>
              <p className='term-disc'>
                <strong>Analytics:</strong> To analyze how users interact with the App and to identify trends and areas for improvement.
              </p>
            </li>
            <li>
              <p className='term-disc'>
                <strong>Marketing (with your consent):</strong> We may send you promotional materials about new courses, features, or other offerings. You can opt out of marketing communications at any time.
              </p>
            </li>
            <li>
              <p className='term-disc'>
                <strong>Legal Compliance:</strong> To comply with applicable laws and regulations.
              </p>
            </li>
          </ul>

          <p className='term-heading'>3. How We Share Your Information:</p>
          <p className='term-disc'>We may share your information with the following third parties:</p>
          <ul style={{ marginLeft: "10px" }}>
            <li>
              <p className='term-disc'>
                <strong>Service Providers:</strong> We may share your information with third-party service providers who assist us with various functions, such as hosting, data analytics, payment processing, and customer support. These service providers are contractually obligated to protect your information.
              </p>
            </li>
            <li>
              <p className='term-disc'>
                <strong>Instructors (if applicable):</strong> If you enroll in a course, your instructor may have access to your progress and activity data within that course.
              </p>
            </li>
            <li>
              <p className='term-disc'>
                <strong>Other Users (with your consent):</strong> We may allow you to share certain information with other users of the App, such as your profile information or your progress in a course. You can control these sharing settings within the App.
              </p>
            </li>
            <li>
              <p className='term-disc'>
                <strong>Legal Authorities:</strong> We may disclose your information to legal authorities if required by law or legal process, or if we believe that such disclosure is necessary to protect our rights or the safety of others.
              </p>
            </li>
            <li>
              <p className='term-disc'>
                <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.
              </p>
            </li>
          </ul>

          <p className='term-heading'>4. Data Security</p>
          <p className='term-disc'>
            We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure
          </p>

          <p className='term-heading'>5. Children's Privacy</p>
          <p className='term-disc'>
            Our App is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child under 13 has provided us with personal information, please contact us.
          </p>

          <p className='term-heading'>6. Your Choices:</p>
          <ul style={{ marginLeft: "10px" }}>
            <li>
              <p className='term-disc'>
                <strong>Account Information:</strong> You can access and update your account information at any time through your account settings.
              </p>
            </li>
            <li>
              <p className='term-disc'>
                <strong>Notification Preferences:</strong> You can manage your notification preferences in your account settings.
              </p>
            </li>
            <li>
              <p className='term-disc'>
                <strong>Marketing Communications:</strong> You can opt out of marketing communications by following the unsubscribe instructions in our emails or by contacting us.
              </p>
            </li>
          </ul>

          <p className='term-heading'>7. Changes to this Privacy Policy</p>
          <p className='term-disc'>
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on the App or by other means.
          </p>

          <p className='term-heading'>8. Contact Us</p>
          <p className='term-disc'>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:Info@litlablearning.com">Info@litlablearning.com</a>.
          </p>
        </div>
        {/* <Link to='/'><button>Back</button></Link> */}
      </div>
    </div>
  )
}

export default PraivasyPolicy