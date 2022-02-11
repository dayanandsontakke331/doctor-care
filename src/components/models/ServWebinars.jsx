import React from 'react'
import $ from 'jquery';


const ServWebinars = ({ title }) => {
    // useEffect(() => {
    console.log("ServWebinars popup title : " + title)
    // if (title == "Virtual Consultation Poster") {
    // $("#serv_webinars").modal('show');
    // }
    // });

    return (
        <div className="modal fade" id="serv_webinars" tabIndex="-1" role="dialog" aria-labelledby="serv_webinarsTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="serv_webinarsLongTitle">{title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>serv_webinars </p>
                        <form action="">
                            <input type="text" placeholder="Title" className="form-control" /> <br />
                            <textarea placeholder="Additional Information" className="form-control"></textarea> <br />
                            <input type="date" className="form-control" /> <br />
                            <input type="time" className="form-control" /> <br />
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" style={{ backgroundColor: "#103178" }}>Order Now</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default React.memo(ServWebinars);