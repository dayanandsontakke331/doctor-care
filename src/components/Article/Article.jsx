import React from 'react'
import { Link } from 'react-router-dom'

// import book from "../../assets/icons/book.png"
import { BiBookOpen } from "react-icons/bi"

export default function Article() {
    return (
        <div className="border radius-5 p-3 m-2 mt-3 row">
            <div className="title col-12">
                <h4>lorem ipsum dolor sit amet.</h4>
            </div>
            <div className="desc py-2 col-12 text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex beatae enim
                accusamus minus unde omnis! A in dolores error ipsa provident,
                suscipit quasi obcaecati nisi laudantium ea, repellendus saepe repellat.
            </div>
            <div className="readmore pt-1 col-12">
                {/* <button className="btn btn-primary float-right" style={{ backgroundColor: "#103178" }}>Read More</button> */}
                {/* <img src={book} alt="icon" width="30px" className="float-right" style={{ cursor: "pointer" }} /> */}
                <Link to="#" className="mr-2" style={{ color: '#103178' }}>Read this Journal</Link>
                <span>|</span>
                <Link to="#" className="mr-2" style={{ color: '#103178' }}> Read All therapy name</Link>
                <BiBookOpen style={{ fontSize: "30px" }} className="float-right" />
            </div>
        </div>
    )
}
