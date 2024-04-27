import React from 'react'
import './rest.css'
import {useNavigate} from "react-router-dom" 
const Data = () => {
     const navigate = useNavigate()
    const redirect = () => {
        navigate("/auth/register");
    }

    return (
        <div>
            <>
                <h1><center>Invest in Top Companies</center></h1>
                <h3><center>Online platform to invest in stocks, derivatives, mutual funds, and more</center></h3>
                <button className="center-button" onClick={redirect}><h6>Register</h6></button>

            </>
        </div>
    )
}

export default Data
