import React from 'react'
import { Link } from 'react-router-dom'
import "./EditProfile.css"
import { IoCaretBackSharp } from "react-icons/io5"

export default function EditProfile() {
    return (
        <div className="row m-3 p-2 d-flex justify-content-around border editProfileBox">
            <div className="col-12 d-flex justify-content-between m-2">

                <label htmlFor="image">
                    <input type="file" name="image" id="image" style={{ display: 'none' }} />
                    <img src="https://www.shareicon.net/data/512x512/2016/08/18/813844_people_512x512.png" width="50px" alt="prfile" />
                </label>

                <Link to="/profile" className="btn my-auto">
                    <IoCaretBackSharp />
                </Link>
            </div>

            <div className="col-md-5">
                <b>First Name : </b>
                <span><input type="text" className="form-control" placeholder="First Name" /></span>
            </div>

            <div className="col-md-5">
                <b>Last Name : </b>
                <span><input type="text" className="form-control" placeholder="Last Name" /></span>
            </div>

            <div className="col-md-5">
                <b>Mobile Number : </b>
                <span><input type="text" className="form-control" placeholder="Contact Number" /></span>
            </div>

            <div className="col-md-5">
                <b>Email : </b>
                <span><input type="text" placeholder="Email" className="form-control" /></span>
            </div>

            <div className="col-md-5">
                <b>Department : </b>
                <span><input type="text" placeholder="Department" className="form-control" /></span>
            </div>

            <div className="col-md-5">
                <b>Location : </b>
                <span><input type="text" placeholder="Location" className="form-control" /></span>
            </div>

            <div className="col-md-5">
                <b>Birth Date : </b>
                <span><input type="text" placeholder="Birth Date" className="form-control" /></span>
            </div>

            <div className="col-md-5">
                <b>Qualification : </b>
                <span><input type="text" placeholder="Qualification" className="form-control" /></span>
            </div>

            <div className="col-md-5">
                <b>Address : </b>
                <span><input type="text" placeholder="Address" className="form-control" /></span>
            </div>


            <div className="col-md-5">
                <b>G+Plus Link : </b>
                <span><input type="text" placeholder="G+Plus Link" className="form-control" /></span>
            </div>

            <div className="col-md-5">
                <b>Facebook Link : </b>
                <span><input type="text" placeholder="Facebook Link" className="form-control" /></span>
            </div>

            <div className="col-md-5">
                <b>Twitter Link : </b>
                <span><input type="text" placeholder="Twitter Link" className="form-control" /></span>
            </div>

            <div className="col-md-5">
                <b>Linkedin Link : </b>
                <span><input type="text" placeholder="Linkedin Link" className="form-control" /></span>
            </div>

            <div className="col-md-5">
                <b>Link To Blog : </b>
                <span><input type="text" placeholder="Link To Blog" className="form-control" /></span>
            </div>

            <div className="col-md-5">
                <b>Payment Mode Number : </b>
                <span><input type="text" placeholder="Payment Mode Number" className="form-control" /></span>
            </div>

            <div className="col-md-5">
                <b>Payment Mode One : </b>
                <span><input type="text" placeholder="Payment Mode One" className="form-control" /></span>
            </div>

            <div className="col-md-5">
                <b>Payment Mode Two : </b>
                <span><input type="text" placeholder="Payment Mode Two" className="form-control" /></span>
            </div>

            <div className="col-md-5">
                <b>Practice Hours : </b>
                <span><input type="text" placeholder="Practice Hours" className="form-control" /></span>
            </div>

            <div className="col-md-11">
                <b>Personal Intro : </b>
                <span><textarea type="text" placeholder="Personal Intro" className="form-control" /></span>
            </div>

            <div className="col-md-11 my-2">
                <button type="submit" className="float-right btn btn-primary roundBtn" style={{ backgroundColor: "#103178" }}>Update Details</button>
            </div>
        </div>
    )
}
