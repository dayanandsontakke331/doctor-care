import React from 'react';
import { Link } from "react-router-dom";
// import Model1 from '../models/Model1';
import bg from "../../assets/bg.png";
import config from '../../config';
import "./CategoriesCard.css";

export default function CategoriesCard({ title, link, catId }) {

    // let catImagePath = `${config.CAT_IMG_BASE_URI}/${catId}.png`;
    // alert("url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")")
    return (
        // <div className="overflow-hidden d-flex mb-3 catCard">
        // < className="btn" id="exploreBtn">
        // <Link to={link == "priority_contact.php" ? "/contact" : `/subcategories/${catId}`} className="catCard" style={{
        //     backgroundImage: "url(" + catImagePath + ")",
        //     backgroundPosition: 'center bottom',
        //     // backgroundSize: 'cover',
        //     backgroundSize: '150px 150px',
        //     backgroundRepeat: 'no-repeat',
        //     // padding: '2rem'
        // }} >
        <Link to={link == "priority_contact.php" ? "/contact" : `/subcategories/${catId}`} className="col-md-2 m-md-1 col-5 mx-auto catCard">
            {/* <p className="card-title catName">{title}</p> */}


            {/* <Link to={link == "priority_contact.php" ? "/contact" : `/subcategories/${catId}`} className="btn" id="exploreBtn"
            >Explore</Link> */}

            {/* data-toggle="modal" data-target="#exampleModalCenter" */}

            <img src={`${config.CAT_IMG_BASE_URI}/${catId}.png`} alt="img" className="mx-auto col-12" />
            {/* <img src="https://picsum.photos/200" alt="img" width="100px" className="mt-2" /> */}
            {/* </ span> */}
        </Link >
        // </div>
    )
}
