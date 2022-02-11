import React from 'react';
import { Link } from 'react-router-dom';
import $ from "jquery";
import "./BottomNav.css";

import menu from "../../assets/icons/menu.png";
import home from "../../assets/icons/home.png";
import news from "../../assets/icons/news.png";
import user from "../../assets/icons/user.png";
import support from "../../assets/icons/handshake.png";


export default function BottomNav() {

    // $(document).ready(function () {

    //     $('.slidebarbtn').click(function () {

    //         $('.slidebarbtn').toggleClass('active');

    //         $('.header01').toggleClass('enjoy');

    //     })

    // })

    const openSlideMenu = () => {
        document.getElementById('menu').style.width = '250px';
        document.getElementById('content').style.marginLeft = '250px';
    }

    const closeSlideMenu = () => {
        document.getElementById('menu').style.width = '0';
        document.getElementById('content').style.marginLeft = '0';
    }

    return (
        <div className="d-md-none">
            <div id="content">
                <div id="menu" className="nav1">
                    <a href="#" className="close" onClick={closeSlideMenu}>
                        <i className="fas fa-times"></i>
                    </a>
                    <Link to="/">Home</Link>
                    <Link to="/articles">Articles</Link>
                    <Link to="/profile">Portfolio</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>

            <nav className="nav">

                <span className="nav__link" onClick={openSlideMenu}>
                    {/* <i className="material-icons nav__icon">menu_open</i> */}
                    <img src={menu} width="20px" />
                    <span className="nav__text">Menu</span>
                </span>

                <Link to="/" className="nav__link">
                    {/* <i className="material-icons nav__icon">home</i> */}
                    <img src={home} width="20px" />
                    <span className="nav__text">Home</span>
                </Link>

                <Link to="/articles" className="nav__link">
                    {/* <i className="material-icons nav__icon">article</i> */}
                    <img src={news} width="20px" />
                    <span className="nav__text">Articles</span>
                </Link>

                <Link to="/profile" className="nav__link">
                    {/* <i className="material-icons nav__icon">person</i> */}
                    <img src={user} width="20px" />
                    <span className="nav__text">Profile</span>
                </Link>

                <Link to="/services" className="nav__link">
                    {/* <i className="material-icons nav__icon">medical_services</i> */}
                    <img src={support} width="20px" />
                    <span className="nav__text">Services</span>
                </Link>
            </nav>
        </div>
    )
}
