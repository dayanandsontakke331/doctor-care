import React from 'react'
import { Link } from 'react-router-dom'
import "./ServiceCard.css"

import { ImPointRight } from "react-icons/im";

export default function ServiceCard() {
    return (
        <div className="p-1">
            {/* <p><span className="ml-2"> | order status at right</span></p> */}
            <h6><Link to="#" style={{ color: "#103178" }}><ImPointRight /><span className="ml-2">21 June 2021 : Do's & Don't Poster</span></Link></h6>
            <p><span className="ml-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, consequuntur.</span></p>
            <p className="text-right mb-1">Status : Open</p>

        </div >
    )
}
