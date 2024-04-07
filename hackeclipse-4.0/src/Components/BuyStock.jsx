import React from 'react';
import './BuyStock.css';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
let inv = []
const BuyStock = () => {



    const [userData, setUserData] = useState("");
    
    useEffect(() => {

        const fetchData = async () => {
            try {
                const token = Cookies.get('token');

                // Get the token from cookies
                const request = await Axios.post('http://localhost:3001/user/', {
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
        <div className="menu">

            <div className="heading">
                <h1>Choose Your Investors</h1>
                
            </div>
            <div className="food-items">
                
                <div className="details">
                    <div className="details-sub">
                        <h5>Rakesh Jhunjhunwala And Associates</h5>
                       
                    </div>
                    <p>Rakesh Jhunjhunwala (born 5 July 1960) is an Indian Investor and trader and manages the asset firm Rare Enterprises. A qualified Chartered Accountant, he invests in both his own name and his wife's, Rekha Jhunjhunwala. Jhunjhunwala has been described as India's Warren Buffett, and his investments are closely tracked by the media. He tends to favor stocks in the finance, tech, retail and pharma sectors.</p>
                    <p>Yearly Return: 17.8% </p>
                    <p>Total Invested Amount: Rs. 110,005.2 Cr.</p>
                    <input type="checkbox" onChange={()=>{
                        {investor.name}

                    }}/>
                </div>
            </div>

             <div className="food-items">
                
                <div className="details">
                    <div className="details-sub">
                        <h5>Akash Bhanshali</h5>
                       
                    </div>
                    <p>Akash Bhansali is one of the top individual investors in the Indian markets famous for his stock-picking skills. Apart from his stock-picking skills, he is also known for his rather distinctive strategy applied to his personal portfolio. His strategy follows a one industry-one stock rule.</p>
                    <p>Yearly Return: 19.8% </p>
                    <p>Total Invested Amount: 12,005 cr</p>
                </div>
            </div>
            <div className="food-items">
                
                <div className="details">
                    <div className="details-sub">
                        <h5>Premji And Associates</h5>
                       
                    </div>
                    <p>Radhakishan Shivkishan Damani is an Indian billionaire businessman and investor, He is the founder and chairman of retail chain Avenue Supermarts Limited. Damani is often referred to as the Retail King of India.</p>
                    <p>Yearly Return: 9.2% </p>
                    <p>Total Invested Amount: 184,537.5 cr</p>
                </div>
            </div>
            <div className="food-items">
                
                <div className="details">
                    <div className="details-sub">
                        <h5>Radhakishan Damani</h5>
                       
                    </div>
                    <p>Radhakishan Shivkishan Damani is an Indian billionaire businessman and investor, He is the founder and chairman of retail chain Avenue Supermarts Limited. Damani is often referred to as the Retail King of India.</p>
                    <p>Yearly Return: 9.2% </p>
                    <p>Total Invested Amount: 2,10,005 cr</p>
                </div>
            </div>
            <div className="food-items">
                
                <div className="details">
                    <div className="details-sub">
                        <h5>Mukul Agrawal</h5>
                       
                    </div>
                    <p>Mukul Agrawal is a recent star of Indian stock market. He entered the market in the late 1990s. His investment strategy includes aggressive investment, invest after proper analysis, takes a risk with penny stocks that can become multibagger, and keep two separate portfolios for investment and trading. These are the shares held by Mukul Agrawal as per the information available by the exchanges. For some companies the latest quarter results might not be available as they may file it later on.</p>
                    <p>Yearly Return: 11.7% </p>
                    <p>Total Invested Amount: 11,989 cr</p>
                </div>
             </div> 

            <nav class="navbar fixed-bottom bg-body-tertiary">
                <div class="container-fluid">
                    <button><Link className="navbar-brand" to="/buystockss">Cart</Link></button>
                </div>
            </nav>
        </div>


    );
};

export default BuyStock;