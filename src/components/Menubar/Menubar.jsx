import React from 'react';
import "./Menubar.css";

import { Link } from 'react-router-dom';

const Menubar = () => {
    return (
        <>
            <ul className="navBar d-none d-md-block">
                <span>
                    <Link to="/">Home</Link>

                    <Link to="/articles">Articles</Link>

                    <Link to="/services">My Services</Link>

                    <Link to="/profile">My Profile</Link>
                </span>

                <span>
                    <Link to="" id="drName">Welcome Dr. Sachin</Link>
                </span>
            </ul>


        </>
    );
}

export default Menubar;
