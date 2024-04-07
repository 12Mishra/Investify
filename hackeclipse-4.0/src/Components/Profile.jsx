import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Cookies from 'js-cookie';


const Profile = () => {
    const token = Cookies.get('token');
    const [holding, setHolding] = useState({});
    const [totalAmountInvested, setTotalAmountInvested] = useState(0);
    const [totalCurrentValue, setTotalCurrentValue] = useState(0);

    useEffect(() => {


        const fetchData = async () => {
            try {
                const response = await Axios.get('http://localhost:3001/user/', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                });

                setHolding(response.data);

                // Calculate total invested amount and current value
                let investedAmount = 0;
                let currentValue = 0;

                response.data.stocks.forEach(stock => {
                    investedAmount += stock.quantity * stock.buyPrice;
                    // Assuming current value is not available in the response data
                    // currentValue += stock.current; // Uncomment this line if current value is available
                });

                setTotalAmountInvested(investedAmount);
                setTotalCurrentValue(currentValue);
            } catch (error) {
                console.error('Error fetching user details:', error.message);
            }
        };

        fetchData();
    }, [token]);

    const variable = Math.round((holding.currentAmount - holding.investedAmount));
    console.log(holding.currentValue)
    return (
        <div className="profile-container">
            <h1 className="profile-title"><center>YOUR PORTFOLIO</center></h1>
            <div className="portfolio-details">
                <p className="investment">Invested Amount: ₹ {holding.investedAmount}/-</p>
                {/* Uncomment the line below if current value is available */}
                <p className="current-value">Current Value: ₹ {holding.currentAmount}/-</p>
                <p className="net-profit-loss">Net Profit & Loss: ₹ {variable}/-</p>
            </div>

            <h1 className="profile-title"><center>YOUR CURRENT HOLDINGS</center></h1>
            <table className="holding-table">
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Buy Price</th>
                        <th>Quantity</th>
                        <th>Invested Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {holding.stocks && holding.stocks.map((stock, index) => (
                        <tr key={index}>
                            <td>{stock.symbol}</td>
                            <td>{stock.buyPrice}</td>
                            <td>{stock.quantity}</td>
                            <td>{stock.quantity * stock.buyPrice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default Profile;
