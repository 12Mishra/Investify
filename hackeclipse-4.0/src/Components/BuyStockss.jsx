import React from 'react';
import './BuyStockss.css';
import { Link } from 'react-router-dom';
const BuyStocks = () => {
    const stockData = [
        {
            "id": 1,
            "name": "John Doe",
            "investment": 10000,
            "stocks": [
                {
                    "symbol": "AAPL",
                    "quantity": 10,
                    "buyPrice": 150.25,
                    "investedamt": "2024cr"
                },
                {
                    "symbol": "GOOGL",
                    "quantity": 5,
                    "buyPrice": 2800.75,
                    "investedamt": "300"
                },
                {
                    "symbol": "AMZN",
                    "quantity": 3,
                    "buyPrice": 3200.50,
                    "investedamt": "30"
                }
            ]
        }
    ];

    return (
        <div className="container">
            <h1 className="title">Choose your stocks</h1>
            <h4 className="sub-title">Our one lot is equal to 0.1 share</h4>
            <h4 className="investor-info">{stockData[0].name} - Total investment: {stockData[0].investment}</h4>

            {/* Move the table text tags here */}
            <table className="holding-table">
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Quantity</th>
                        <th>Buy Price</th>
                        <th>InvestedAmt</th>
                    </tr>
                </thead>
                <tbody>
                    {stockData.map((investor, i) => (
                        investor.stocks.map((stock, j) => (
                            <tr key={`${i}-${j}`}>
                                <td>{stock.symbol}</td>
                                <td>{stock.quantity}</td>
                                <td>{stock.buyPrice}</td>
                                <td>{stock.investedamt}</td>
                            </tr>
                        ))
                    ))}
                </tbody>
            </table>

            <h1><Link className to="/payment">Redirect to Payment page</Link></h1>
        </div>

           
    );
};

export default BuyStocks;
