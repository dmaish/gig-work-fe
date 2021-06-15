import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";

import { register } from '../_redux/homeCrud';
import { errorAlert } from '../../../components/notification/alert'

const Register = (props) => {
  const [loading, setLoading] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  let history = useHistory();

  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

    const initialValues = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
        acceptTerms: false,
      };
      
        const RegistrationSchema = Yup.object().shape({
          firstname: Yup.string()
            .min(2, "Minimum 2 symbols")
            .max(50, "Maximum 50 symbols")
            .required("Field required"),
          lastname: Yup.string()
            .min(2, "Minimum 2 symbols")
            .max(50, "Maximum 50 symbols")
            .required("Field required"),
          email: Yup.string()
            .email("Wrong email format")
            .min(3, "Minimum 3 symbols")
            .max(50, "Maximum 50 symbols")
            .required("Field required"),
          password: Yup.string()
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              "Must contain minimum of 8 characters. At least one letter and one number"
            )
            .required("Field required"),
           confirmpassword: Yup.string()
            .required("Field required")
            .when("password", {
              is: (val) => (val && val.length > 0 ? true : false),
              then: Yup.string().oneOf(
                [Yup.ref("password")],
                "Password and Confirm Password didn't match"
              ),
            }),
          acceptTerms: Yup.bool().required(
            "You must accept the terms and conditions"
          ),
        });

        
  const formik = useFormik({
    initialValues,
    validationSchema: RegistrationSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      try {
        enableLoading();
        setSubmitting(true);
        const response = await register(
          values.email,
          values.firstname,
          values.lastname,
          values.password
        );
        disableLoading();
        setSubmitting(false);
        if (response.status === 201) {
          setRegisterSuccess(true);
          history.push("/success");
        }
      } catch (error) {
        setSubmitting(false);
        disableLoading();
        errorAlert(error.response.data.message)
      }
    },
  });

return(
   <div class="modal fade" id="register" tabindex="-1" role="dialog" aria-labelledby="registermodal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered login-pop-form" role="document">
      <div class="modal-content" id="registermodal">
        <div class="modal-header">
          <h4>Register</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="ti-close"></i></span></button>
        </div>
        <div class="modal-body">
          
          <div class="login-form">
            <form onSubmit={formik.handleSubmit}>
            
            {formik.touched.firstname && formik.errors.firstname ? (
                    <div className="form-error">{formik.errors.firstname}</div>
                ) : null}
              <div class="form-group">
                <input type="text" class="form-control" placeholder="First Name" name="firstname" {...formik.getFieldProps('firstname')}/>
              </div>

              {formik.touched.lastname && formik.errors.lastname ? (
                    <div className="form-error">{formik.errors.lastname}</div>
                ) : null}
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Last Name" name="lastname" {...formik.getFieldProps('lastname')}/>
              </div>

              {formik.touched.email && formik.errors.email ? (
                    <div className="form-error">{formik.errors.email}</div>
                ) : null}
              <div class="form-group">
                <input type="email" class="form-control" placeholder="Email" name="email" {...formik.getFieldProps('email')}/>
              </div>
              
              {formik.touched.password && formik.errors.password ? (
                    <div className="form-error">{formik.errors.password}</div>
                ) : null}
              <div class="form-group">
                <input type="password" class="form-control" placeholder="Password" name="password" {...formik.getFieldProps('password')}/>
              </div>
            
              {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
                    <div className="form-error">{formik.errors.confirmpassword}</div>
                ) : null}
              <div class="form-group">
                <input type="password" class="form-control" placeholder="Confirm Password" name="confirmpassword" {...formik.getFieldProps('confirmpassword')}/>
              </div>
              
              <div class="form-group">
                <button type="submit" class="btn dark-2 btn-md full-width pop-login" >Register 
                {loading && <span class="spinner-border text-light ml-auto"></span>}
                </button>
              </div>
            
            </form>
          </div>
          
        </div>
        <div class="modal-footer">
          <div class="mf-link">Have An Account ? <a class="theme-cl"> Log In</a></div>
        </div>
      </div>
    </div>
  </div>
);
}

export default Register;