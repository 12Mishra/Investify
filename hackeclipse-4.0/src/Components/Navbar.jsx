import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import logo21 from '../Assets/logo24.jpg';
import './Navbar.css';
import Cookies from 'js-cookie';
import './Navbar.css'

const Navbar = () => {
    const navigate = useNavigate();
    const auth = Cookies.get('token');

    const handleLogout = () => {
        Cookies.remove('token');
        navigate("/");
    }
    
    
    const [userData, setUserData] = useState("");
    
    useEffect(() => {

        const fetchData = async () => {
            try {
                const token = Cookies.get('token');

                // Get the token from cookies
                const request = await Axios.get('http://localhost:3001/user/', {
                    headers: {
                        Authorization: `Bearer ${token}` // Include the token in the Authorization header
                    },
                    // withCredentials: true
                });

                

                setUserData(request.data);
            } catch (error) {
                console.error('Error fetching user details:', error.message);
            }

            // if (request.status === 500) {
            //     Navigate("/auth/login/");
            // }
            // console.log(request.status);
        };


        // console.log({ userData });

        fetchData();
    }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a href="/">
                        <img className="logo-img mx-2" src={logo21} alt=".." style={{ height: '55px' }} />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active mx-2" to="/about">ABOUT</Link>
                            </li>
                            {auth && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link active mx-2" to="/buynow">INVEST </Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="true">
                                                Hello, {userData.name}
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link className="nav-link active mx-2" to="/user">PROFILE</Link>
                                                </li>
                                                <li>
                                                    <form className="d-flex">
                                                        <button className="btn btn-outline-success me-2 btn btn mx-2" type="button" role="button" onClick={handleLogout}>Logout</button>
                                                    </form>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </>
                            )}
                            {!auth && (
                                <li>
                                    <form className="d-flex">
                                        <button className="btn btn-outline-success me-2" type="button">
                                            <Link className="btn btn mx-2" to="/auth/login" role="button">Login</Link>
                                        </button>
                                        <button className="btn btn-outline-success me-2" type="button">
                                            <Link className="btn btn mx-2" to="/admin/login" role="button">Admin Login</Link>
                                        </button>
                                        <button className="btn btn-outline-success me-2" type="button">
                                            <Link className="btn btn mx-2" to="/auth/register" role="button">Register</Link>
                                        </button>
                                    </form>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
