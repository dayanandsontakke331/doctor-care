import React from 'react';
import { Link } from 'react-router-dom';
import Menubar from '../Menubar/Menubar';
import logo from "../../assets/logo.png";
import user from "../../assets/icons/user.png";
import "./Header.css";

const Header = () => {
    return (
        <div>
            <div className="headerContainer">
                <div className="m-4 my-2 d-flex justify-content-between align-items-center">
                    <Link to="/">
                        <img src={logo} alt="logo" width="70px" height="50px" />
                    </Link>

                    <input type="search" placeholder="Search" className="form-control border" id="searchBar" />

                    <Link to="/profile">
                        <img src={user} alt="user" width="30px" height="30px" className="profileIcon" />
                    </Link>
                </div>
            </div>

            <hr />
            <div className="">
                <Menubar />
            </div>

        </div>
    );
}

export default Header;
