import React, { useState, useEffect } from 'react'
import $ from 'jquery';


const CovidAccessories = ({ title }) => {
    // const [CovidPopupTitle, setCovidPopupTitle] = useState("");
    // useEffect(() => {
    //     console.log("CovidAccessories popup title : " + title)

    //     if (title != CovidPopupTitle && title !== "") {
    //         console.log("inside if", CovidPopupTitle);
    //         setCovidPopupTitle(title);
    $("#covid_accessories").modal('show');
    //     } else {
    //         console.log("inside else", CovidPopupTitle);
    //         $("#covid_accessories1").modal('show');
    //     }
    //     // }
    //     // });
    //     // useEffect(() => {
    // }, []);

    {
        // title == "N95 Mask" ? console.log("n95") : console.log("n90")
        alert("covid title is : " + title);
    }
    return (
        <div className="modal fade" id="covid_accessories" tabIndex="-1" role="dialog" aria-labelledby="covid_accessoriesTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="covid_accessoriesLongTitle">{title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>{title} covid_accessories </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" >Close</button>
                        <button type="button" className="btn btn-primary" style={{ backgroundColor: "#103178" }}>Order Now</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CovidAccessories;