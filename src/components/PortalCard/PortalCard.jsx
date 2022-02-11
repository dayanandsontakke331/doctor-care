import React from 'react'
import { Link } from 'react-router-dom'
import "./PortalCard.css"

import { ImPointRight } from "react-icons/im";

export default function PortalCard() {
    return (
        <div className="p-1">
            <Link to="#" style={{ color: "#103178" }}><ImPointRight /><span className="ml-2">Important Portal Link</span></Link>
        </div>
    )
}
