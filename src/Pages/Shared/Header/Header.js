import React from 'react';
import { NavLink } from "react-router-dom";
import logo from '../../../images/icons/logo2.png'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import './Header.css'

const Header = () => {
    const navLinkStyle = ({ isActive }) => {
        return {
            margin: "1.2rem",
            color: isActive ? "red" : "",
            textDecoration: isActive ? 'underline' : 'none',
        };
    }

    return (
        <div>
            <nav className='d-flex justify-content-between align-items-center header '>
                <div>
                    <NavLink style={navLinkStyle} to='/'>
                        <img src={logo} alt="" width={100} />
                    </NavLink>
                </div>
                <div>
                    <NavLink style={navLinkStyle} to='/cart'>
                        <ShoppingCartIcon width={30} />
                    </NavLink>
                    <NavLink style={navLinkStyle} to='/login'>Login</NavLink>
                    <NavLink style={navLinkStyle} to='/register'>SignUp</NavLink>
                </div>

            </nav>
        </div>
    );
};

export default Header;