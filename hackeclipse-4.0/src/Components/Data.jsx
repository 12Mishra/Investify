import React from 'react'
import './rest.css'

const Data = () => {

    const redirect = () => {
        window.location.href = "/auth/register";
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
