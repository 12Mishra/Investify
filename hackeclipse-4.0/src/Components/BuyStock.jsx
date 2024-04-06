import React from 'react'
import './BuyStock.css'
import Axios from 'axios';
import { useState, useEffect } from 'react';

const BuyStock = () => {
    
    
    const investorData = [
        // {
        //     "id": 1,
        //     "name": "John Doe",
        //     "investment": 10000,
        //     "stocks": [
        //         {
        //             "symbol": "AAPL",
        //             "quantity": 10,
        //             "buyPrice": 150.25,
        //             "date": "2024-04-03T12:00:00Z"
        //         },

        //     ]
        // },
        // {
        //     "id": 2,
        //     "name": "Jane Smith",
        //     "investment": 15000,
        //     "stocks": [
        //         {
        //             "symbol": "AAPL",
        //             "quantity": 10,
        //             "buyPrice": 150.25,
        //             "date": "2024-04-03T12:00:00Z"
        //         },
        //     ]
        // },
        // {
        //     "id": 3,
        //     "name": "Alice Johnson",
        //     "investment": 20000,
        //     "stocks": [
        //         {
        //             "symbol": "AAPL",
        //             "quantity": 10,
        //             "buyPrice": 150.25,
        //             "date": "2024-04-03T12:00:00Z"
        //         },
        //     ]
        // },
        // {
        //     "id": 4,
        //     "name": "Mohit Johnson",
        //     "investment": 20000,
        //     "stocks": [
        //         {
        //             "symbol": "AAPL",
        //             "quantity": 10,
        //             "buyPrice": 150.25,
        //             "date": "2024-04-03T12:00:00Z"
        //         },
        //     ]
        // },
        // {
        //     "id": 5,
        //     "name": "Mohit Chauhan",
        //     "investment": 20000,
        //     "stocks": [
        //         {
        //             "symbol": "AAPL",
        //             "quantity": 10,
        //             "buyPrice": 150.25,
        //             "date": "2024-04-03T12:00:00Z"
        //         },

        //     ]
        // }
        {
            "id": 1,
            "name": "Premji And Associates",
            "description": "Radhakishan Shivkishan Damani is an Indian billionaire businessman and investor, He is the founder and chairman of retail chain Avenue Supermarts Limited. Damani is often referred to as the Retail King of India.",

        },

     ]


    // const [userData, setUserData] = useState("");

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await Axios.get('http://localhost:3001/investors');
    //             setUserData(response.data);
    //         } catch (error) {
    //             console.error('Error fetching investor data:', error.message);
    //         }
    //     };

    //     fetchData();
    // }, []);




    return (
        // <div>
        //     <h1 className='text'><center><u>Choose Your Investors Here!!</u></center></h1>
        //     <div className="menu">
        //         <div className="food-items">
        //             {/* <img src={PaneerTikkaBurgerImage} /> */}
        //             <div className="details">
        //                 {investorData.map(investor => (
        //                     <div className="details-sub" key={investor.id="1"}>
        //                         <li>
        //                             <h5>{investor.name}</h5>
        //                             <p>{investor.investment}</p>
        //                         </li>
        //                     </div>
        //                 ))}
        //             </div>

        //         </div>

        //         <div className="food-items">
        //             {/* <img src={Burger} /> */}
        //             <div className="details">
        //                 <div className="details-sub">
        //                     <h5>Radha Krishna Damini</h5>
        //                 </div>
        //                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing elit.</p>

        //             </div>
        //         </div>

        //         <div className="food-items">
        //             {/* <img src={Sandwich} /> */}
        //             <div className="details">
        //                 <div className="details-sub">
        //                     <h5>Investor XYZ </h5>

        //                 </div>
        //                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit lorem ipsum, dolor sit amet consectetur adipisicing elit</p>

        //             </div>
        //         </div>

        //         <div className="food-items">
        //             {/* <img src={Chicken} /> */}
        //             <div className="details">
        //                 <div className="details-sub">
        //                     <h5>Investor XYZ </h5>

        //                 </div>
        //                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus reiciendis nam non quia! Earum eveniet quia minus nemo.</p>

        //             </div>
        //         </div>
        //         <div className="food-items">
        //             {/* <img src={Spaghetti} /> */}
        //             <div className="details">
        //                 <div className="details-sub">
        //                     <h5>Investor XYZ </h5>
        //                 </div>
        //                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus reiciendis nam non quia! Earum eveniet quia minus nemo.</p>

        //             </div>
        //         </div>

        //         <div className="food-items">
        //             {/* <img src={PaneerTikkaBurgerImage} /> */}
        //             <div className="details">
        //                 <div className="details-sub">
        //                     <h5>Investor XYZ </h5>

        //                 </div>
        //                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus reiciendis nam non quia! Earum eveniet quia minus nemo.</p>

        //             </div>
        //         </div>
        //         <div className="food-items">
        //             {/* <img src={PaneerTikkaBurgerImage} /> */}
        //             <div className="details">
        //                 <div className="details-sub">
        //                     <h5>Investor XYZ </h5>

        //                 </div>
        //                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus reiciendis nam non quia! Earum eveniet quia minus nemo.</p>

        //             </div>
        //         </div>
        //         <div className="food-items">
        //             {/* <img src={PaneerTikkaBurgerImage} /> */}
        //             <div className="details">
        //                 <div className="details-sub">
        //                     <h5>Investor XYZ </h5>

        //                 </div>
        //                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus reiciendis nam non quia! Earum eveniet quia minus nemo.</p>

        //             </div>
        //         </div>

        //         <nav class="navbar fixed-bottom bg-body-tertiary">
        //             <div class="container-fluid">
        //                 <a class="navbar-brand" href="#">Cart</a>
        //             </div>
        //         </nav>
        //     </div>

        // </div>

        <>
            <div>
                <h1><center>Choose your investors </center></h1>
                {investorData.map(investor => (
                    <div className="food-items" key={investor.id}>
                        {/* <img src={investor.image} alt="Investor Image" /> */}
                        <div className="details">
                            <div className="details-sub">
                                <h5>{investor.name}</h5>
                            </div>
                            <p>Investment: {investor.description}</p>
                            {/* <p>Stocks Available:
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Symbol</th>
                                            <th>Quantity</th>
                                            <th>Buy Price</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {investorData.map((row, i) => (
                                            <tr key={i}>
                                                <td>{row.symbol}</td>
                                                <td>{row.quantity}</td>
                                                <td>{row.buyPrice}</td>
                                                <td>{row.date}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </p> */}
                            {/* <div>
                                <button className="d-flex"><h6>See Stocks</h6></button>
                                </div> */}

                            <div>
                                
                            </div>
                        </div>
                    </div>

                ))}
            </div>

        </>

    )
}

export default BuyStock
