import { useState, useEffect } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./components/HomePage/Home";
// import PlanDetails from "./components/PlanDetails/PlanDetail";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions";
import PraivasyPolicy from "./components/PraivasyPolicy/PraivasyPolicy";
import RefundPolicy from "./components/RefundPolicy/RefundPolicy";
import ReturnPolicy from "./components/ReturnPolicy/ReturnPolicy";
import ShippingPolicy from "./components/ShippingPolicy/ShippingPolicy";
import PreLoader from "./components/Preloader/PreLoader";
import UserRegister from "./components/UserRegister/UserRegister";
import UserLogin from "./components/UserLogin/UserLogin";
import SelectPaperPage from "./components/SelectPaperPage/SelectPaperPage";
import OrderSuccess from "./components/OrderSuccess/OrderSuccess";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  if (isLoading) {
    return <PreLoader />; // Show the Preloader while loading
  }

  return (
    <HashRouter>
      <Routes>
        <Route path="/" Component={Home} />
        {/* <Route path="/early-bird-details" Component={PlanDetails} /> */}
        <Route path="/terms-and-conditions" Component={TermsAndConditions} />
        <Route path="/privacy-policy" Component={PraivasyPolicy} />
        <Route path="/refund-policy" Component={RefundPolicy} />
        <Route path="/return-policy" Component={ReturnPolicy} />
        <Route path="/shipping-policy" Component={ShippingPolicy} />
        <Route path="/signup" Component={UserRegister} />
        <Route path="/otp-send" Component={UserLogin} />
        <Route path="/select-papers" Component={SelectPaperPage} />
        <Route path="/order-success" Component={OrderSuccess} />
      </Routes>
    </HashRouter>
  );
}

export default App;
