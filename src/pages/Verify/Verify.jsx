import React from 'react';
import { Link } from 'react-router-dom';

const Verify = () => {
    return (
        <>
            {/* <div className=""> */}
            <form className="m-sm-5 m-3 p-3 mt-5">
                <div class="form-group">
                    <label for="exampleInputPassword1">Enter OTP</label>
                    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Enter OTP" />
                </div>
                {/* <div class="form-check my-3">
                        <input type="checkbox" class="form-check-input my-2" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Remember me</label>
                    </div> */}
                <div className="col-12 text-center">
                    <Link type="submit" to="/home" class="btn btn-primary roundBtn" style={{ backgroundColor: "#103178" }}>Verify OTP</Link>
                </div>
            </form>
            {/* </div> */}
        </>
    );
}

export default Verify;
