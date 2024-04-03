import Navbar from "./Components/Navbar"
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import About from "./Components/About";
import Carousal from "./Components/Carousal";
import Data from "./Components/Data";
import {
  BrowserRouter as Main,
  Route,
  Routes,
} from "react-router-dom";
import Footer from "./Components/Footer";
function App() {

  return (
    <>
      {<Main>
        <div><Navbar /></div>
        <Carousal />



        <Routes>
          <Route exact path='/' element={<><Home /></>} />
          {<Route exact path='/about' element={<About />} />}
          {<Route exact path='/login' element={<Login />} />}
          {<Route exact path='/signup' element={<Signup />} />}
        </Routes>

        <div><Footer /></div>
      </Main>
      }
    </>
  )
}

export default App
