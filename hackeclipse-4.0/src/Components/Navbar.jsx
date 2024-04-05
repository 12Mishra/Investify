import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button class="btn btn-outline-success me-2" type="button"><Link className="navbar-brand" to="/">INVESTIFY</Link></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/user">Profile</Link>
                            </li>


                        </ul>
                        <form className="d-flex">
                            <li><button class="btn btn-outline-success me-2" type="button"><Link className="btn btn mx-2" to="/auth/login" role="button">Login</Link></button></li>
                            <li><button class="btn btn-outline-success me-2" type="button"><Link className="btn btn mx-2" to="/auth/register" role="button">Register</Link></button></li>
                            <li><button class="btn btn-outline-success me-2" type="button"><Link className="btn btn mx-2" to="/logout" role="button">Logout</Link></button></li>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
