import React from 'react'
import $ from 'jquery';


const ServPersonalisedVideo = ({ title }) => {
    // useEffect(() => {
    console.log("ServPersonalisedVideo popup title : " + title)
    // if (title == "Virtual Consultation Poster") {
    // $("#serv_personalised_vdo").modal('show');
    // }
    // });

    return (
        <div className="modal fade" id="serv_personalised_vdo" tabIndex="-1" role="dialog" aria-labelledby="serv_personalised_vdoTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="serv_personalised_vdoLongTitle">{title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>serv_personalised_vdo like to have your clinic sanitized ? It's just a click away! Enter your preferred Date & Time to book the slot.</p>
                        <form action="">
                            <label for="exampleInputCountry">Select Language</label>
                            <select className="form-control">
                                <option value="" selected disabled defaultValue>-----Select Language------</option>
                                <option value="English">English</option>
                            </select> <br />
                            <textarea placeholder="Additional Information" className="form-control"></textarea> <br />
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

export default React.memo(ServPersonalisedVideo);