import React, { Component } from 'react';

// stateless functional components

const NavBar = ({totalCounters}) => {
        return ( <nav className= "navbar navbar-light bg-light">
        <a href="#" className="navbar-brand">
            NavBar <span className="badge badge-pill badge-secondary">
                {totalCounters}</span>
        </a>
    </nav>
    );  
};
 
export default NavBar;

