import Navbar from "./Components/Navbar"
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import About from "./Components/About";
import Carousal from "./Components/Carousal";
import Profile from "./Components/Profile";
import BuyStock from "./Components/BuyStock";
import Payment from "./Components/Payment";
import './App.css'
import {
  BrowserRouter as Main,
  Route,
  Routes,
} from "react-router-dom";
import BuyStockss from "./Components/BuyStockss";
import AdminLogin from "./Components/AdminLogin"
import AdminDashboard from "./Components/AdminDashboard";
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
          {<Route exact path='/auth/login' element={<Login />} />}
          {<Route exact path='/auth/register' element={<Signup />} />}
          {<Route exact path='/admin/login' element={<AdminLogin />} />}
          {<Route exact path='/user' element={<Profile />} />}
          {<Route exact path='/buynow' element={<BuyStock />} />}
          {<Route exact path='/buystockss' element={<BuyStockss />} />}
          {<Route exact path='/admin/dashboard' element={<AdminDashboard />} />}
          {<Route exact path='/payment' element={<Payment />} />}
        </Routes>

        <div><Footer /></div>
      </Main>
      }
    </>
  )
}

export default App
