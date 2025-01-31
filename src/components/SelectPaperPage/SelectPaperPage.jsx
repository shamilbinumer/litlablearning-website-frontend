
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import './SelectPaperPage.scss';
import baseUrl from '../../../baseUrl';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


const SelectPaperPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(location.search);
    const price = params.get('price');
    const couponApplied = params.get('couponApplied');
    const ogPrice = params.get('ogPrice');
    const forSem = params.get('forSem');

    const [isLoading, setIsLoading] = useState(true);
    const [majorPaper, setMajorPaper] = useState([]);
    const [commonPaper, setCommonPaper] = useState(null);
    const [minorPaper, setMinorPaper] = useState([]);
    const [coursesIsSelected, setCoursesIsSelected] = useState(false);
    const [isPlacingOrder, setIsPlacingOrder] = useState(false);
    const token = localStorage.getItem('authToken');

    // Calculate required number of minor papers (total must be 4)
    const requiredMinorPapers = 4 - (majorPaper?.length || 0) - (commonPaper ? 1 : 0);
    
    // State for selected minor papers
    const [selectedMinorPapers, setSelectedMinorPapers] = useState([]);

    // Initialize selectedMinorPapers when requiredMinorPapers changes
    useEffect(() => {
        setSelectedMinorPapers(new Array(requiredMinorPapers).fill(''));
    }, [requiredMinorPapers]);

    // Check if all required papers are selected
    const isSelectionComplete = () => {
        return selectedMinorPapers.length === requiredMinorPapers && 
               selectedMinorPapers.every(paper => paper !== '');
    };

    // Handle minor paper selection
    const handleMinorPaperSelection = (index, value) => {
        const newSelections = [...selectedMinorPapers];
        newSelections[index] = value;
        setSelectedMinorPapers(newSelections);
    };

    // Get available minor papers (excluding selected ones)
    const getAvailableMinorPapers = (currentIndex) => {
        if (!minorPaper) return [];
        return minorPaper.filter(paper => 
            !selectedMinorPapers.includes(paper.id) || 
            selectedMinorPapers[currentIndex] === paper.id
        );
    };

    // Calculate total price
    const calculateTotalPrice = () => {
        const originalPrice = parseFloat(ogPrice) || 0;
        const earlyBirdDiscount = forSem === "1" ? 1899 : 8995;
        let couponDiscount = 0;
        if (couponApplied === "true") {
            couponDiscount = forSem === "1" ? 800 : 1100;
        }
        return Math.max(originalPrice - earlyBirdDiscount - couponDiscount, 0);
    };

    useEffect(() => {
        const checkAuth = async () => {
            if (!token) {
                navigate(`/otp-send?forSem=${forSem}&ogPrice=${ogPrice}&price=${price}&couponApplied=${couponApplied}`);
                return;
            }

            try {
                const response = await axios.get(`${baseUrl}/user-details`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (response.data.success) {
                    setIsLoading(false);
                }
            } catch (error) {
                console.error('Auth error:', error);
                localStorage.removeItem('authToken');
                navigate(`/otp-send?forSem=${forSem}&ogPrice=${ogPrice}&price=${price}&couponApplied=${couponApplied}`);
            }
        };

        const fetchMajorPaperDetails = async () => {
            try {
                const response = await axios.get(`${baseUrl}/fetch-mejor-paper`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setMajorPaper(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchCommonPaperDetails = async () => {
            try {
                const response = await axios.get(`${baseUrl}/fetch-common-papers`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setCommonPaper(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchMinorPaperDetails = async () => {
            try {
                const response = await axios.get(`${baseUrl}/fetch-minor-papers`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setMinorPaper(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        checkAuth();
        fetchMajorPaperDetails();
        fetchCommonPaperDetails();
        fetchMinorPaperDetails();
    }, []);

    const handlePlaceOrder = async () => {
        if (!isSelectionComplete()) {
            alert('Please select all required papers before proceeding');
            return;
        }

        try {
            const courseIds = [
                ...majorPaper.map(paper => paper.id),
                commonPaper.id,
                ...selectedMinorPapers
            ].filter(id => id);

            const response = await axios.post(
                `${baseUrl}/place-order`,
                { courseIds },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );

            if (response.data.success) {
                navigate('/order-success');
            } else {
                alert('Failed to place order. Please try again.');
            }
        } catch (error) {
            console.error('Error placing order:', error);
            alert('Error placing order. Please try again later.');
        }
    };

    const handlePayment = async () => {
        if (!isSelectionComplete()) {
            alert('Please select all required papers before proceeding');
            return;
        }

        setIsPlacingOrder(true);
        try {
            const amount = calculateTotalPrice();
            const { data } = await axios.post(`${baseUrl}/create-order`, {
                amount: amount
            });

            const options = {
                key: "rzp_live_ZtcR56CZecXtng",
                amount: data.amount,
                currency: 'INR',
                name: 'Litlab Learning',
                description: 'Paper Purchase',
                order_id: data.id,
                handler: async (response) => {
                    try {
                        const verifyResponse = await axios.post(`${baseUrl}/verify-payment`, {
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature
                        });

                        if (verifyResponse.data.status === 'success') {
                            await handlePlaceOrder();
                        }
                    } catch (error) {
                        alert('Payment Verification Failed');
                        setIsPlacingOrder(false);
                    }
                },
                prefill: {
                    name: 'Customer Name',
                    email: 'customer@example.com',
                    contact: '9999999999'
                },
                theme: {
                    color: '#6BCCE5'
                }
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (error) {
            console.error('Payment Error:', error);
            alert('Failed to initiate payment');
            setIsPlacingOrder(false);
        }
    };

    if (isLoading) {
        return (
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        );
    }

    return (
        <div className='SelectPaperPageMainWrapper'>
            <div className="container-fluid main">
                <div className="row">
                    <div className="col-lg-6 left">
                        <div className="card">
                            <ul>
                                <li>High-Quality Study Notes</li>
                                <li>Video Lectures</li>
                                <li>Question Papers</li>
                                <li>Expert Support</li>
                                <li>Mentorship Support</li>
                                <li>Access to 4 papers <span>(Major, Minor, Common Paper)</span></li>
                                <li>Access available for 2 semesters</li>
                            </ul>
                            <div className="price-card">₹{price}</div>
                        </div>
                    </div>
                    <div className="col-lg-6 right">
                        <div>
                            {coursesIsSelected ? (
                                <>
                                    <div className="summery">
                                        <div className="CouponCodeStatus">
                                            {couponApplied === "true" 
                                                ? <Alert severity="success">Referral Code Applied!</Alert> 
                                                : <Alert severity="error">Referral Code Not Applied!</Alert>
                                            }
                                        </div>
                                        <div className="table-item">
                                            <p>Amount</p>
                                            <p>₹{ogPrice}</p>
                                        </div>
                                        <div className="table-item">
                                            <p>Early Bird Discount</p>
                                            <p>- ₹{forSem === "1" ? 1899 : 8995}</p>
                                        </div>
                                        {couponApplied === "true" && (
                                            <div className="table-item">
                                                <p>Referral Code Discount</p>
                                                <p>- ₹{forSem === "1" ? 800 : 1100}</p>
                                            </div>
                                        )}
                                        <div className="table-item total-item">
                                            <p>Total</p>
                                            <p>₹{calculateTotalPrice()}</p>
                                        </div>
                                        <button 
                                            onClick={handlePayment} 
                                            disabled={isPlacingOrder} 
                                            className='desktopPlaceOrderBtn'
                                        >
                                            {isPlacingOrder ? 'Processing...' : 'Place Order'}
                                        </button>
                                    </div>
                                    <button 
                                        className='back_btn_phone' 
                                        onClick={() => setCoursesIsSelected(false)}
                                    >
                                        Back
                                    </button>
                                    <button 
                                        className='PhonePlaceOrderBtn' 
                                        onClick={handlePayment} 
                                        disabled={isPlacingOrder}
                                    >
                                        {isPlacingOrder ? 'Processing...' : 'Place Order'}
                                    </button>
                                </>
                            ) : (
                                <>
                                    <h2>Select Your Papers!</h2>
                                    {/* Display locked major papers */}
                                    {majorPaper?.map((paper, index) => (
                                        <div className='select-box' key={index}>
                                            <select
                                                className='commonPaper'
                                                value={paper.id}
                                                disabled
                                                style={{ cursor: 'not-allowed' }}
                                                title={`Major Paper : ${paper.title}`}
                                            >
                                                <option value={paper.id}>{paper.title}</option>
                                            </select>
                                        </div>
                                    ))}

                                    {/* Display locked common paper */}
                                    {commonPaper && (
                                        <div className='select-box'>
                                           <select
                                                className='commonPaper'
                                                value={commonPaper.id}
                                                disabled
                                                style={{ cursor: 'not-allowed' }}
                                                title={`Commnon Paper : ${commonPaper.paperTitle}`}

                                            >
                                                <option value={commonPaper.id}>
                                                    {commonPaper.paperTitle}
                                                </option>
                                            </select>
                                        </div>
                                    )}

                                    {/* Display required number of minor paper selections */}
                                    {Array(requiredMinorPapers).fill(null).map((_, index) => (
                                        <div className='select-box' key={`minor-${index}`}>
                                            <select
                                                value={selectedMinorPapers[index]}
                                                onChange={(e) => handleMinorPaperSelection(index, e.target.value)}
                                            >
                                                <option value="">Select Minor Paper {index + 1}</option>
                                                {getAvailableMinorPapers(index).map((paper, pIndex) => (
                                                    <option value={paper.id} key={pIndex}>
                                                        {paper.title}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    ))}

                                    <div>
                                        <button 
                                            onClick={() => setCoursesIsSelected(true)}
                                            className={`next-btn ${!isSelectionComplete() ? 'disabled' : ''}`}
                                            disabled={!isSelectionComplete()}
                                        >
                                            NEXT
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectPaperPage;