import React from 'react'
import "./Contact.css"

import { Link } from 'react-router-dom'

export default function Contact() {
    return (
        <div>
            <form className="m-md-5 mt-3 px-3">
                <h5 className="m-2">Contact Us</h5>
                <textarea className="form-control border m-2" rows="8" placeholder="Write Your Message..!"></textarea>
                <Link to="#" className="btn btn-primary float-right m-2 roundBtn">Send Message</Link>
            </form>

            <div className="mt-3 contactDetails">

                <h4>You can also contact our business manager:</h4>

                <h5>Teritory Business Manager</h5>
                <h6>Mr. Mchpl S Tbm, enquiry@merops.co.in, 7841965952</h6>

                <h5>First Line Manager</h5>
                <h6>Mr. Mchpl Rpgserv, accounts@merops.co.in</h6>

                <h5>Second Line Manager</h5>
                <h6>Mr. Mchpl Rpgserv, accounts@merops.co.in</h6>

                <h5>Third Line Manager</h5>
                <h6>Mr. Mchpl Rpgserv, accounts@merops.co.in</h6>
            </div>
        </div >
    )
}
