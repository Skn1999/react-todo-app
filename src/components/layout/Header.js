import React from 'react'
import Navbar from './Navbar';

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo App</h1>
            <Navbar />
        </header>
    )
}

const headerStyle ={
    backgroundColor : "slategray",
    color : "white",
    display : "flex",
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center",
    padding : "5px 0"
}

