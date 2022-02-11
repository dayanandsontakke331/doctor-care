import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            {/* <div className="container m-sm-5 m-2  p-2 mt-5"> */}
            <form className="row m-3 p-3 mt-5 m-sm-5">
                <div class="dropdown col-lg-6 mt-2">
                    <label for="exampleInputCountry">Select Country Code</label>
                    <select className="form-control">
                        <option value="" selected disabled defaultValue>-----Select Country Code------</option>
                        <option value="India">India</option>
                        <option value="India">Nepal</option>
                    </select>
                </div>

                <div class="form-group col-lg-6 mt-2">
                    <label for="exampleInputPassword1">Mobile Number</label>
                    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Mobile Number" />
                </div>
                <div class="form-check ml-3 col-12">
                    <input type="checkbox" class="form-check-input my-2" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Remember me</label>
                </div>

                <div class="ml-3 col-12 text-center">
                    <Link to="verify" type="submit" class="btn btn-primary roundBtn m-3 p-2" style={{ backgroundColor: "#103178" }}>Get OTP</Link>
                </div>
            </form>
            {/* </div > */}
        </>
    );
}

export default Login;
