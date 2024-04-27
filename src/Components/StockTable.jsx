// StockTable.js

import React from 'react';

const StockTable = ({ userData }) => {
    return (
        <div>
            <h2>User Stocks</h2>
            <table>
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Buy Price</th>
                        <th>Quantity</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.stocks.map(stock => (
                        <tr key={stock._id}>
                            <td>{stock.symbol}</td>
                            <td>{stock.buyPrice}</td>
                            <td>{stock.quantity}</td>
                            <td>{new Date(stock.date).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StockTable;
