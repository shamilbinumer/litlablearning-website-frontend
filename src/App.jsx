import { Routes,Route, BrowserRouter, HashRouter } from "react-router-dom"
import Home from "./components/HomePage/Home"
import PlanDetails from "./components/PlanDetails/PlanDetail"
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions"
import PraivasyPolicy from "./components/PraivasyPolicy/PraivasyPolicy"
import RefundPolicy from "./components/RefundPolicy/RefundPolicy"
import ReturnPolicy from "./components/ReturnPolicy/ReturnPolicy"
import ShippingPolicy from "./components/ShippingPolicy/ShippingPolicy"
function App() {

  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/early-bird-details" Component={PlanDetails}/>
        <Route path="/terms-and-conditions" Component={TermsAndConditions}/>
        <Route path="/privacy-policy" Component={PraivasyPolicy}/>
        <Route path="/refund-policy" Component={RefundPolicy}/>
        <Route path="/return-policy" Component={ReturnPolicy}/>
        <Route path="/shipping-policy" Component={ShippingPolicy}/>

      </Routes>
    </HashRouter>
    </>
  )
}

export default App
