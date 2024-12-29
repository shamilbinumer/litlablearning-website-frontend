import { Routes,Route, BrowserRouter } from "react-router-dom"
import Home from "./components/HomePage/Home"
import PlanDetails from "./components/PlanDetails/PlanDetail"
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/early-bird-details" Component={PlanDetails}/>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
