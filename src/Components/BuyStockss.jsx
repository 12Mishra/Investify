import React, { useState } from 'react';
import './BuyStockss.css';
import { Link } from 'react-router-dom';

const BuyStocks = () => {
    const stockData = [
        {
            "id": 1,
            "name": "Rakesh Jhunjhunwala And Associates",
            "stocks": [
                {
                    "symbol": "ADANIPORTS",
                    "buyPrice": 150.25,
                    "investedamt": "20266.7 Cr"
                },
                {
                    "symbol": "ADL",
                    "buyPrice": 180.75,
                    "investedamt": "2,131.9 Cr"
                },
                {
                    "symbol": "ADFFOODS",
                    "buyPrice": 320.75,
                    "investedamt": "1,744.7 Cr"
                }
            ]
        },
        {
            "id": 2,
            "name": "Akash Bhanshali",
            "stocks": [
                {
                    "symbol": "ADANIPOWER",
                    "buyPrice": 150.25,
                    "investedamt": "10266.7 Cr"
                },
                {
                    "symbol": "ADROITINFO",
                    "buyPrice": 180.75,
                    "investedamt": "1,131.9 Cr"
                },
                {
                    "symbol": "ADSL",
                    "buyPrice": 320.75,
                    "investedamt": "744.7 Cr"
                }
            ]
        },
        {
            "id": 3,
            "name": "Premji And Associates",
            "stocks": [
                {
                    "symbol": "AFFLE",
                    "buyPrice": 150.25,
                    "investedamt": "12,066.7 Cr"
                },
                {
                    "symbol": "AETHER",
                    "buyPrice": 180.75,
                    "investedamt": "2,131.9 Cr"
                },
                {
                    "symbol": "ADVENZYMES",
                    "buyPrice": 320.75,
                    "investedamt": "1,744.7 Cr"
                },
                {
                    "symbol": "AEROFLEX",
                    "buyPrice": 320.75,
                    "investedamt": "1,450.9 Cr"
                }
            ]
        }
    ];

    // Initialize quantity state for each row with default value 0
    const [selectedQuantities, setSelectedQuantities] = useState([...Array(stockData.length)].map(() => Array(3).fill(0)));

    const handleQuantityChange = (event, investorIndex, stockIndex) => {
        const newQuantities = [...selectedQuantities];
        newQuantities[investorIndex][stockIndex] = parseInt(event.target.value); // Update the quantity at the corresponding index
        setSelectedQuantities(newQuantities);
    };

    // Array from 0 to 10
    const quantityOptions = Array.from({ length: 11 }, (_, index) => index);

    return (
        <>
        <h1><center>Choose your stocks</center></h1>
        <h4 className="sub-title"><center>Our one lot is equal to 0.1 share</center></h4>
        <div className="container">
            {stockData.map((investor, investorIndex) => (
                <div key={investor.id}>
                    <h1 className="title">{investor.name}</h1>
                    
                    <table className="holding-table">
                        <thead>
                            <tr>
                                <th>Symbol</th>
                                <th>Buy Price</th>
                                <th>InvestedAmt</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {investor.stocks.map((stock, stockIndex) => (
                                <tr key={stock.symbol}>
                                    <td>{stock.symbol}</td>
                                    <td>{stock.buyPrice}</td>
                                    <td>{stock.investedamt}</td>
                                    <td>
                                        <select value={selectedQuantities[investorIndex][stockIndex]} onChange={(event) => handleQuantityChange(event, investorIndex, stockIndex)}>
                                            {/* Render quantity options */}
                                            {quantityOptions.map((option, index) => (
                                                <option key={index} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}

            <nav className="navbar fixed-bottom bg-body-tertiary">
                <div className="container-fluid">
                    <button><Link className="navbar-brand" to="/payment">Move to payment page</Link></button>
                </div>
            </nav>
        </div>
        </>
    );
}

export default BuyStocks;
