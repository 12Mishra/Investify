import React from 'react'
import  Axios  from 'axios'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

const Payment = () => {


    const [userData, setUserData] = useState([
        { symbol: 'AAPL', quantity: 10, buyPrice: 150, date: new Date('2023-01-01') },
        { symbol: 'GOOG', quantity: 5, buyPrice: 2500, date: new Date('2023-01-15') },
        { symbol: 'MSFT', quantity: 8, buyPrice: 300, date: new Date('2023-02-01') }
      ]);
      
      useEffect(() => {
          const fetchData = async () => {
              try {
                  const token = Cookies.get('token');
      
                  // Send userData to the server in the body
                  const response = await Axios.post('http://localhost:3001/user/stocks/payment', {
                      userData: userData
                  }, {
                      headers: {
                          Authorization: `Bearer ${token}`
                      }
                  });
      
                  // Handle response if needed
                  console.log(response.data); // Assuming server sends back some data
      
              } catch (error) {
                  // Handle error
                  console.error('Error fetching data:', error);
              }
          };
      
          fetchData();
      }, [userData]); // Include userData in the dependency array to trigger the effect when it changes
      


            // if (request.status === 500) {
            //     Navigate("/auth/login/");
            // }
            // console.log(request.status);


            return (
                <div>
                    <h3>You are paying this amount: 500</h3>
                </div>
          )
        };


  


export default Payment
