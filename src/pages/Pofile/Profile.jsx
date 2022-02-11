import React from 'react'
import { Link } from 'react-router-dom'
import "./Profile.css"
import { BsPencil } from "react-icons/bs"

export default function Profile() {
    return (
        <div className="row m-1 p-2 d-flex justify-content-around profileBox">
            <div className="col-12 d-flex justify-content-between m-2">
                <img src="https://www.shareicon.net/data/512x512/2016/08/18/813844_people_512x512.png" width="50px" alt="prfile" />
                <Link to="/edit-profile" className="btn my-auto" style={{ color: "#103178" }} >
                    <BsPencil />
                </Link>
            </div>

            <fieldset className="col-md-11">
                {/* <legend className="w-auto">Info</legend> */}

                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, dicta.</span>
            </fieldset>

            <fieldset className="col-md-5 border p-2">
                <legend className="w-auto">Personal Info</legend>
                <div>
                    <b>Name : </b>
                    <span>Dr. Dayanand</span>
                </div>
                <div>
                    <b>Mobile Number : </b>
                    <span>9921811127</span>
                </div>
                <div>
                    <b>Email : </b>
                    <span>dayanandsontakke331@gmail.com</span>
                </div>
                <div>
                    <b>Birth Date : </b>
                    <span>1998-03-30</span>
                </div>
                <div>
                    <b>Qualification : </b>
                    <span>MCA</span>
                </div>
            </fieldset>

            <fieldset className="col-md-5 border p-2">
                <legend className="w-auto">Social</legend>
                <div>
                    <b>G+Plus Link : </b>
                    <span>Www.Google.Com</span>
                </div>
                <div>
                    <b>Facebook Link : </b>
                    <span>Www.Facebook.Com</span>
                </div>
                <div>
                    <b>Twitter Link : </b>
                    <span>Www.Twitter.Com</span>
                </div>
                <div>
                    <b>Linkedin Link : </b>
                    <span>Www.linkedin.Com</span>
                </div>
                <div>
                    <b>Link To Blog : </b>
                    <span>Www.linkedin.Com</span>
                </div>
            </fieldset>

            <fieldset className="col-md-5 border p-2">
                <legend className="w-auto">Work</legend>
                <div>
                    <b>Department : </b>
                    <span>Heart</span>
                </div>
                <div>
                    <b>Location : </b>
                    <span>Pune</span>
                </div>
                <div>
                    <b>Practice Hours : </b>
                    <span>9 To 6</span>
                </div>
            </fieldset>

            <fieldset className="col-md-5 border p-2">
                <legend className="w-auto">Payment</legend>
                <div>
                    <b>Payment Number : </b>
                    <span>9921811127</span>
                </div>
                <div>
                    <b>Payment Mode One : </b>
                    <span>GooglePay</span>
                </div>
                <div>
                    <b>Payment Mode Two : </b>
                    <span>PhonePay</span>
                </div>
            </fieldset>

            <fieldset className="col-md-5 border p-2">
                <legend className="w-auto">Address</legend>
                <div>
                    <b>Address : </b>
                    <span>Pune</span>
                </div>
            </fieldset>
        </div>
    )
}
