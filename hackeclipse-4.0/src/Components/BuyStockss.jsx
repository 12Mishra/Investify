import React from 'react';

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
                // Add more stocks if needed
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
        },
        // Add more investors if needed
    ];

    return (
        <div>
            <h1><center>Choose your stocks</center></h1>
            <h4><center>Our one lot is equal to 0.1 share</center></h4>
            <h4>{stockData[0].name}- Total investment:{stockData[0].investment} </h4>
            <table className="table table-striped">
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
        </div>
    );
};

export default BuyStocks;
