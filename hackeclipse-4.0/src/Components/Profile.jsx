import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
    from 'react-icons/bs'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
    from 'recharts';
import './Profile.css'
import Axios from 'axios';
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';


const Profile = () => {

    const token=Cookies.get('token')

    if(!token){
        Navigate('/auth/login');
    }


    const data = [
        {
            name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
        },
        {
            name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
            name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
        },
        {
            name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },

    ];

    const [userData, setUserData] = useState("");


    useEffect(() => {

        const fetchData = async () => {
            try {
                const token = Cookies.get('token');

                // Get the token from cookies
                const request = await Axios.get('http://localhost:3001/user/', {
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
        <main className='main-container'>
            <div className='main-title'>
                <h3>DASHBOARD</h3>
            </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Number of Stocks</h3>
                        <BsFillArchiveFill className='card_icon' />
                    </div>
                    <h1>300</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>CATEGORIES</h3>
                        <BsFillGrid3X3GapFill className='card_icon' />
                    </div>
                    <h1>12</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>CUSTOMERS</h3>
                        <BsPeopleFill className='card_icon' />
                    </div>
                    <h1>33</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>ALERTS</h3>
                        <BsFillBellFill className='card_icon' />
                    </div>
                    <h1>42</h1>
                </div>
            </div>

            <div className='charts'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>

            </div>

            <div>
                <h3><center><u>Profile Data</u></center></h3>
                <p><h3>Name: {userData.name}</h3></p>
                <p><h3>Email: {userData.email}</h3></p>
                <p><h3>Phone: {userData.phone}</h3></p>
            </div>



        </main>
    )
}

export default Profile