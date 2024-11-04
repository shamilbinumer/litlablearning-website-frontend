import { HashRouter,Routes,Route } from "react-router-dom"
import Home from "./components/HomePage/Home"
function App() {

  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" Component={Home}/>
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
