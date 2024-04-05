import React from 'react';
import { useLocation } from 'react-router-dom';
import stock3 from '../Assets/stock3.jpg';

import './Carousal.css'
const Carousel = () => {
    const location = useLocation();


    if (location.pathname === '/') {
        return (
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={stock3} className="d-block w-100" style={{ height: '600px' }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={stock3} className="d-block w-100" style={{ height: '600px' }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={stock3} className="d-block w-100" style={{ height: '600px' }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
    } else {

        return null;
    }
};

export default Carousel;
