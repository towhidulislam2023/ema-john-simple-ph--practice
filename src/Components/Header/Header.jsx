import React from 'react';
import "./header.css"
import logo from "../../assets/Logo.svg"

const Header = () => {
    return (
        <nav>
            <div className='navContainer'>
                <div className='imageContainer'>
                    <img src={logo} alt="" />

                </div>
                <div className='navigationContainer'>
                    <a href="/">Order</a>
                    <a href="/">Order Review</a>
                    <a href="/">Manage Inventory</a>
                    <a href="/">Login</a>

                </div>

            </div>

        </nav>
    );
};

export default Header;