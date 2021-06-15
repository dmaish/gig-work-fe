import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";

const Register = () => {
    return(
        <div class="container col-md-9 col-sm-12 ">
        <div class="call-to-act-caption pt-s-0">
            <h2 style={{color: '#343a40'}}>Sign in</h2>
            <p>Enter your email and password</p>

            <div class="login-form mt-4">
                <form>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="First Name" name="firstname" />
              </div>

              <div class="form-group">
                <input type="text" class="form-control" placeholder="Last Name" name="lastname" />
              </div>

              <div class="form-group">
                <input type="email" class="form-control" placeholder="Email" name="email" />
              </div>
              
              <div class="form-group">
                <input type="password" class="form-control" placeholder="Password" name="password" />
              </div>
            
              <div class="form-group">
                <input type="password" class="form-control" placeholder="Confirm Password" name="confirmpassword" />
              </div>
                <div className="form-group d-flex justify-content-between align-items-center mt-4">
                    <div className="col-sm-6"><div class="mf-link">forgot password ?</div></div>
                    <button type="submit" class="col-sm-6 btn dark-2 btn-md full-width pop-login">Login
                    </button>
                </div>
                </form>
            </div>
        </div>
    </div> 
    );
}

export default Register;