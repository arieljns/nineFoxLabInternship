import {Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import SignUp from "./components/SignUp"


const App=()=>{
  return(
    <Routes >
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}


export default App;