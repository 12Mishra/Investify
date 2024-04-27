// Profile.js

import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import StockTable from './StockTable.jsx';

const Profile = () => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios.get('http://localhost:3001/admin/dashboard'); // Assuming the endpoint is correct
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <>
        <div>
            <h1>User Profile</h1>
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
                {userData.stocks && userData.stocks.map((stock, index) => (
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
        </>
    );
};

export default Profile;
