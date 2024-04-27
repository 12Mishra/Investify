import React from 'react';
import { useLocation } from 'react-router-dom';
import st2 from '../Assets/landing.png';
import './Carousal.css'

const Carousel = () => {
    const location = useLocation();


    if (location.pathname === '/') {
        return (
            <>

                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={st2} className="d-block w-100" alt="..." />
                        </div>    
                        </div>

                </div>

            </>

        );
    } else {

        return null;
    }
};

export default Carousel;


// <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
//     <div className="carousel-inner">
//         <div className="carousel-item active">
//             <img src={st2} className="d-block w-100" alt="..." />
//         </div>
//     </div>

// </div>