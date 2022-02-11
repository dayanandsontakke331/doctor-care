import React from 'react'
import { Link } from 'react-router-dom'

import { AiOutlineFilePdf } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";

export default function FileCard({ fileName }) {
    return (
        <div className="col-md-4 d-flex just-content-center align-items-center">
            {/* <img src={icon} alt="icon" width="25px" height="25px" /> */}
            {/* <div className="d-flex align-items-center"> */}

            <span className="mt-1 col-10">
                <AiOutlineFilePdf /><Link to="#" className="ml-2" style={{ color: "#103178" }}>{fileName}</Link>
            </span>

            <Link to="#" className="btn col-1"><BsDownload /></Link>
            {/* </div> */}
            {/* <div className="col-3">
                <Link to="#" className="btn btn-primary my-auto " style={{ backgroundColor: "#103178" }}>
                    <BsCloudDownload />
                    <h6>Download</h6>
                </Link>
            </div> */}
            {/* style={{ backgroundColor: "#103178" }} */}
        </div >
    )
}
