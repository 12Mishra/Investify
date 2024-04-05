import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../Assets/namkaran.png'
import Cookies from 'js-cookie'

const Navbar = () => {
    const navigate = useNavigate(); 
    const handleLogout = () => {
        Cookies.remove('token'); 
        navigate("/"); // Redirect to home page
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a href="/">
                        <img className="logo-img mx-2" src={logo} alt=".." />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active mx-2" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active mx-2" to="/user">Profile</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <li><button className="btn btn-outline-success me-2" type="button"><Link className="btn btn mx-2" to="/auth/login" role="button">Login</Link></button></li>
                            <li><button className="btn btn-outline-success me-2" type="button"><Link className="btn btn mx-2" to="/auth/register" role="button">Register</Link></button></li>
                            <li><button className="btn btn-outline-success me-2 btn btn mx-2" type="button" role="button" onClick={handleLogout}>Logout</button></li>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
