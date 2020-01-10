import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <ul style={navStyle}>
                <li ><Link style={navItem} to="/">Home</Link></li>
                <li><Link style={navItem} to="/about">About</Link></li>
            </ul>
        </div>
    )
}

const navStyle ={
    display : "flex",
    color : "white",
    justifyContent : "center",
    listStyle : "none",
    marginTop : "10px"
}

const navItem ={
    color : "#e3e3e3",
    margin : "1rem"  
}

export default Navbar;