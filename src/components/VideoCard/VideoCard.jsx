import React from 'react'
import { Link } from 'react-router-dom'

export default function VideoCard({ link }) {
    return (
        <>
            <div className="col-12 col-md-5 d-flex flex-column m-2 my-3 ">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe src={link} className="embed-responsive-item" frameborder="1"></iframe>
                </div>
                <Link to="#" >
                    <button className="btn btn-block btn-primary text-white text-center" data-toggle="modal" data-target="#videoPopup" style={{ backgroundColor: "#103178" }}>
                        Watch Full Video
                    </button>
                </Link>
            </div>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="videoPopup" tabindex="-1" role="dialog" aria-labelledby="videoPopupLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="videoPopupLabel">Video</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe src={link} className="embed-responsive-item" frameborder="1"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
