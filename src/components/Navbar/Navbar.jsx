import React from 'react';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className='text-center py-10'>
            <h2 className='text-4xl font-medium text-gray-900 pb-3'>Spaceflight details</h2>
            <p className='text-gray-700'>Find out the elaborate features of all the past big spaceflights.</p>
        </div>
    );
};

export default Navbar;