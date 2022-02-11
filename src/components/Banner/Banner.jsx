import React from 'react'
import { Link } from 'react-router-dom';
import "./Banner.css";

export default function Banner() {
    return (
        <div className="p-4 bannerBox">
            <span className="badge badge-pill badge-success">New</span>
            <h3>Medical</h3>
            <h3>Knowledge</h3>
            <h3>Base</h3>
            <Link to="/articles" className="btn btn-primary roundBtn">Read</Link>
        </div>
    )
}
