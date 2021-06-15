import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


const Login = () => {
    return(
         <div class="container col-md-9 col-sm-12 p-0">
            <div class="call-to-act-caption">
                <h2 style={{color: '#343a40'}}>Sign in</h2>
                <p>Enter your email and password</p>

                <div class="login-form mt-4">
                    <form>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Email" name="email" />
                    </div>
                    
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Password" name="password" />
                    </div>
                    <div className="form-group d-flex justify-content-between align-items-center mt-4">
                        <div className="col-sm-6"><Link to="/auth/register"><h5 style={{color: "#4B61CC"}}> forgot password ?</h5></Link></div>
                        <button type="submit" class="col-sm-6 btn dark-2 btn-md full-width pop-login">Login
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div> 
    );
}

export default Login;