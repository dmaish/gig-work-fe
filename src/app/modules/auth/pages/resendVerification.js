import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

import { requestResendEmailVerification } from '../_redux/authCrud';
import Footer from '../../../components/footer';
import Nav from '../../../components/nav';
import { errorAlert, successAlert } from '../../../components/notification/alert'

export const ResendVerification = (props) => {

    const initialValues = {
      email: "",
    };

    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);
    const [responseMessage, setResponseMessage] = useState(null);
    const searchParams = new URLSearchParams(props.location.search);
    const verificationCode = searchParams.get("code");
    const id = searchParams.get("id");

      const ResendEmailVerificationSchema = Yup.object().shape({
        email: Yup.string()
          .email("Wrong email format")
          .min(3, "Minimum 3 symbols")
          .max(50, "Maximum 50 symbols")
          .required('This field is required'),
      });

      const formik = useFormik({
        initialValues,
        validationSchema: ResendEmailVerificationSchema,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            try {
                setLoading(true);
                setSubmitting(true);
                const response = await requestResendEmailVerification(values.email);
                if (response.status === 200) {
                    setResponseMessage(response.data.message);
                    successAlert(response.data.message);
                    setSuccess(true);
                }
                } catch (error) {
                    const errorMessage = error.response.data ? error.response.data.message : "Resending verification email not successful"
                    setLoading(false);
                    setSuccess(false);
                    setSubmitting(false);
                    setResponseMessage(errorMessage);
                    errorAlert(errorMessage);
                }
        },
      });

    return(
        <>
        <Nav />
        <div class="hero-banner full full image-bottom" style={{ backgroundColor: '#2944c1', height: '100vh' }} data-overlay="0">
				<div class="container">
					<div class="mt-2">
						<div class="row m-0 justify-content-center">
							<div class="col-lg-112 col-md-8">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="text-center">
                                    
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className="form-error">{formik.errors.email}</div>
                                    ) : null}
                                    <div class="form-group">
                                        <input type="email" class="form-control" style={{textAlign: 'center', fontSize: '18px'}} placeholder="Email" name="email" {...formik.getFieldProps('email')}/>
                                    </div>

                                    <div class="linkeo_link">
                                        <button type="submit" class="btn _hire_freelancers">Resend Verification Email</button>
                                    </div>
                                </div>
                            </form>
							</div>
						</div>
					</div>
				</div>
			</div>
          <Footer />
            </>
    );
}