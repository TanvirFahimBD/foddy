import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    // console.log("🚀 ~ file: Footer.js ~ line 6 ~ Footer ~ year", year)
    return (
        <div className='text-center'>
            <p>Copyright {year}. All rights reserved.</p>
        </div>
    );
};

export default Footer;