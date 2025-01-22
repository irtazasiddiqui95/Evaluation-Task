import React from 'react';
import Logo from './Images/Logo.png';
import './Logo.css'
 
const logo = (props) => (
    <div >
        <img className = "Logo" src={Logo} alt="Authentication Portal"/>
    </div>
);
export default logo;