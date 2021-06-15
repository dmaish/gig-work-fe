import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";


import * as auth from "../_redux/authRedux";
import { login } from '../_redux/homeCrud';

const Login = (props) => {
  const [loading, setLoading] = useState(false);
  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };
  
    const initialValues = {
        email: "",
        password: "",
      };

    const LoginSchema = Yup.object().shape({
        email: Yup.string()
          .email("Wrong email format")
          .min(2, "Minimum 2 characters")
          .max(50, "Maximum 50 characters")
          .required("Field required"),
        password: Yup.string()
          .min(2, "Minimum 2 characters")
          .max(50, "Maximum 50 characters")
          .required("Field required"),
      });

    const formik = useFormik({
        initialValues,
        validationSchema: LoginSchema,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
          enableLoading();
          try {
            const { data } = await login(values.email, values.password);
            disableLoading();
            props.login(data);
            // props.profileAction(data.user);
          } catch (error) {
            disableLoading();
            setSubmitting(false);
            setStatus(
              error.response.data
                ? error.response.data.message
                : "Unable to login.Try again."
            );
          }
        },
      });

return (
  <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="registermodal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered login-pop-form" role="document">
      <div class="modal-content" id="registermodal">
        <div class="modal-header">
          <h4>Log In</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="ti-close"></i></span></button>
        </div>
        <div class="modal-body">
          
          <div class="login-form">
            <form onSubmit={formik.handleSubmit}>

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
              
              <div class="form-group">
                <button type="submit" class="btn dark-2 btn-md full-width pop-login">Login
                 {loading && <span class="spinner-border text-light ml-auto"></span>}
                </button>
              </div>
            
                <div class="modal-footer">
                <div class="mf-link">Don't An Account?<a href="javascript:void(0)" class="theme-cl"> Register</a></div>
                <div class="mf-forget"><a href="#">Forgot Password<i class="ti-help"></i></a></div>
                </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>
);
}

// export default Login;
export default connect(null, { ...auth.actions })(Login)
