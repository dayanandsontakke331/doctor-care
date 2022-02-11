import React, { useEffect } from 'react'
import $ from 'jquery';

const Sanitization = ({ title, tableName }) => {

    // useEffect(() => {
    console.log("Sanitization popup : " + title, "tablename : " + tableName)
    //     if (tableName == "serv_sanitization") {
    //         $("#exampleModalCenter").modal('show');
    //     }
    //     else if (tableName == "serv_personalised_printables") {
    // $("#serv_sanitization").modal('show');
    //     } else {
    //         alert("nothing");
    //     }
    // }, []);

    console.log("inside popup : " + title, tableName)
    return (
        <>
            {/* {
                tableName == "serv_sanitization" ? ( */}
            {/* <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">{title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Would like to have your clinic sanitized ? It's just a click away! Enter your preferred Date & Time to book the slot.</p>
                            <form action="">
                                <input type="date" className="form-control" /> <br />
                                <input type="time" className="form-control" /> <br />
                                <textarea placeholder="Additional Information" className="form-control"></textarea> <br />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" style={{ backgroundColor: "#103178" }}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* ) : ""
            } */}


            {/* 2nd popup */}
            {/* {
                tableName == "serv_personalised_printables" ? (
                     */}
            <div className="modal fade" id="serv_sanitization" tabIndex="-1" role="dialog" aria-labelledby="serv_sanitizationTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="serv_sanitizationLongTitle">{title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>dummy</p>
                            <form action="">
                                <input type="date" className="form-control" /> <br />
                                <input type="time" className="form-control" /> <br />
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
            {/* ) : ""
            } */}

        </>
    )
}

export default React.memo(Sanitization);