import React from 'react'
import "./EmailerCard.css";

import { ImPointRight } from "react-icons/im";

import book from "../../assets/icons/book.png"
import download from "../../assets/icons/download.png"
import planes from "../../assets/icons/planes.png"

// import { FiSend } from "react-icons/fi";
// import { BsDownload } from "react-icons/bs";
// import { BiBookReader } from "react-icons/bi";
import { BiBookOpen } from "react-icons/bi";

export default function EmailerCard() {
    return (
        <div className="d-flex justify-content-between">
            <span><ImPointRight /><span className="ml-2 mb-2">Covid Onesource journal (Cardlovascular) 17 Nov 2021</span></span>
            <div className="d-flex justify-content-between">
                {/* <FiSend className="emailerIcons" />
                <BsDownload className="emailerIcons" />
                <BiBookReader className="emailerIcons" /> */}
                {/* <img src={book} alt="icon" width="30px" height="30px" className="emailerIcons" /> */}
                <BiBookOpen width="35px" height="35px" className="emailerIcons" />
                <img src={download} alt="icon" width="30px" height="30px" className="emailerIcons" />
                <img src={planes} alt="icon" width="30px" height="30px" className="emailerIcons" />
            </div>
        </div>
    )
}
