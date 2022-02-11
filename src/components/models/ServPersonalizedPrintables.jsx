import React from 'react'
import $ from 'jquery';


const ServPersonalizedPrintables = ({ title }) => {
    // useEffect(() => {
    console.log("ServPersonalizedPrintables popup title : " + title)
    // if (title == "Virtual Consultation Poster") {
    // $("#serv_personalised_printables").modal('show');
    // }
    // });

    return (
        <div className="modal fade" id="serv_personalised_printables" tabIndex="-1" role="dialog" aria-labelledby="serv_personalised_printablesTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="serv_personalised_printablesLongTitle">{title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>dummy serv_personalised_printables</p>
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

    )
}

export default React.memo(ServPersonalizedPrintables);
