import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./SubCategoriesCard.css";
import $ from "jquery"
// import ServPersonalizedPrintables from '../models/ServPersonalizedPrintables';
import config from '../../config';

import Sanitization from '../models/Sanitization';
import ServPersonalizedPrintables from '../models/ServPersonalizedPrintables';
import ServPrintables from '../models/ServPrintables';
import CovidAccessories from '../models/CovidAccessories';
import ServWebinars from '../models/ServWebinars';
import ServPersonalisedVideo from '../models/ServPersonalisedVideo';

export default function SubCategoriesCard({ subCatDetails, handleModal1, ModalTitle }) {

    const [PrevModalTitle, setPrevModalTitle] = useState("");
    // const [ModalTitle, setModalTitle] = useState("");
    // const [ModalTableName, setModalTableName] = useState("");

    console.log(ModalTitle);
    // var titlemodel = "something";
    const handleModal = (title, tablename) => {
        // alert(tablename);
        // e.preventDefault();
        // console.log(e);
        // console.log("title is :" + title);
        // if (ModalTitle !== title) {
        setPrevModalTitle(ModalTitle);
        // setModalTitle(title);

        console.log("inside function");
        for (let i = 0; i < 9900000; i++) { }
        console.log(PrevModalTitle, ModalTitle);
        // }
        // titlemodel = title;
        // setModalTableName(tablename);

        // titlemodel = document.getElementById("#subCatTitle").innerText;
        // alert(titlemodel);
        // console.log("model state is :" + ModalTitle, "model table : " + ModalTableName);
    }

    return (

        <div className="col-lg-5 mb-3 mx-4 px-1 mx-md-auto subCatCard card-body d-flex align-items-center justify-content-around">
            <div className="col-5">
                <img src={`${config.SUBCAT_IMG_BASE_URI}/${subCatDetails.subcategory_id}.png`} width="100px" alt="icon" />
            </div>

            <div className="col-7">
                <p className="card-title subCatName text-right">{subCatDetails.title}</p>
                {
                    subCatDetails.outcome == "modal" ?
                        (
                            <>
                                {/* <span id="subCatTitle">{subCatDetails.title}</span> */}
                                <Link to="" className="btn" id="exploreBtn" value={subCatDetails.title}
                                    onClick={() => handleModal1(subCatDetails.title, subCatDetails.table_name)}
                                    data-toggle="modal" data-target={`#${subCatDetails.table_name}`}
                                >Explore</Link>
                            </>
                        )
                        : subCatDetails.outcome == "page" ?
                            <Link to={`/${subCatDetails.service_type}`} className="btn" id="exploreBtn">Read</Link>
                            : ""
                }
            </div>


            {/* serv_sanitization model */}


            {/* {
                ModalTableName == "serv_sanitization" ? <Sanitization title={ModalTitle} tableName={ModalTableName} />
                    : ModalTableName == "serv_personalised_printables" ? <ServPersonalizedPrintables title={ModalTitle} tableName={ModalTableName} />
                        : ModalTableName == "serv_printables" ? <ServPrintables title={ModalTitle} tableName={ModalTableName} />
                            : ModalTableName == "covid_accessories" && ModalTitle != "" ? <CovidAccessories title={ModalTitle} />
                                : ModalTableName == "serv_webinars" ? <ServWebinars title={ModalTitle} tableName={ModalTableName} />
                                    : ModalTableName == "serv_personalised_vdo" ? <ServPersonalisedVideo title={ModalTitle} tableName={ModalTableName} />
                                        : ""
            } */}



            {/* serv_sanitization model */}
            {/* <div className="modal fade" id="serv_sanitization" tabIndex="-1" role="dialog" aria-labelledby="serv_sanitizationTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="serv_sanitizationLongTitle">{subCatDetails.title}</h5>
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
                            <button type="button" className="btn btn-primary" style={{ backgroundColor: "#103178" }}>Order Now</button>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* serv_personalised_printables */}
            {/* <div className="modal fade" id="serv_personalised_printables" tabIndex="-1" role="dialog" aria-labelledby="serv_personalised_printablesTitle" aria-hidden="true">
                {<ServPersonalizedPrintables title={Title2} />}
            </div> */}

            {/* serv_printables */}
            {/* <div className="modal fade" id="serv_printables" tabIndex="-1" role="dialog" aria-labelledby="serv_printablesTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="serv_printablesLongTitle">{subCatDetails.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>serv_printables like to have your clinic sanitized ? It's just a click away! Enter your preferred Date & Time to book the slot.</p>
                            <form action="">
                                <label for="exampleInputCountry">Select Language</label>
                                <select className="form-control">
                                    <option value="" selected disabled defaultValue>-----Select Language------</option>
                                    <option value="English">English</option>
                                </select> <br />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" style={{ backgroundColor: "#103178" }}>Order Now</button>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* covid_accessories */}
            {/* <div className="modal fade" id="covid_accessories" tabIndex="-1" role="dialog" aria-labelledby="covid_accessoriesTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="covid_accessoriesLongTitle">my title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>covid_accessories like to have your clinic sanitized ? It's just a click away! Enter your preferred Date & Time to book the slot.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" style={{ backgroundColor: "#103178" }}>Order Now</button>
                        </div>
                    </div>
                </div>
            </div> */}


            {/* serv_webinars */}
            {/* <div className="modal fade" id="serv_webinars" tabIndex="-1" role="dialog" aria-labelledby="serv_webinarsTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="serv_webinarsLongTitle">{ModalTitle}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>serv_webinars like to have your clinic sanitized ? It's just a click away! Enter your preferred Date & Time to book the slot.</p>
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
            </div> */}

            {/* serv_personalised_vdo */}
            {/* <div className="modal fade" id="serv_personalised_vdo" tabIndex="-1" role="dialog" aria-labelledby="serv_personalised_vdoTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="serv_personalised_vdoLongTitle">{ModalTitle}</h5>
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
            </div> */}

        </div>
    )
}