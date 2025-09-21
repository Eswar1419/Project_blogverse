import NavBar from './NavBar.jsx'
import SignUp from './SignUp.jsx'
import Home from './Home.jsx'
import SignIn from './SignIn.jsx'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path="/SignUp" element={<SignUp />} />
       <Route path="/SignIn" element={<SignIn />}/> 
      <Route path="/" element={<Home />} /> 
    </Routes>
  )

}

export default App