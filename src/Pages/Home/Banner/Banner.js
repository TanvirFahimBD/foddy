import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner' >
            <div className='banner-content'>
                <h1>Best Food For Your Belly </h1>
                <input className='food-input' type="text" placeholder='Search Food Items' />
            </div>
        </div>
    );
};

export default Banner;