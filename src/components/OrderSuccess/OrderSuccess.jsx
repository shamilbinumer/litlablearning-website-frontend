import './OrderSuccess.scss';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set timeout to navigate after 2 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 3500);

    // Cleanup timeout on component unmount
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className='OrderSuccessMainWrapper'>
      <div className="order-success">
        <div className="card">
          <DotLottieReact
            src="https://lottie.host/c450ba74-465b-4670-aa21-75d76a000806/RrYzJWdyG0.lottie"
            loop={false}
            autoplay
            className='icon'
          />
          <h2>Order Placed</h2>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;