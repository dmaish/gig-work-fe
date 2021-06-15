import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Footer from '../../../components/footer';
import Nav from '../../../components/nav';
import { requestEmailVerification } from '../_redux/authCrud';
import { errorAlert, successAlert } from '../../../components/notification/alert'


export const Verification = (props) => {
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);
    const [responseMessage, setResponseMessage] = useState(null);
    const searchParams = new URLSearchParams(props.location.search);
    const verificationCode = searchParams.get("code");
    const id = searchParams.get("id");

    const verifyEmail = async () => {
        try {
          setLoading(true);
          const response = await requestEmailVerification(id, verificationCode);
          if (response.status === 200) {
            setResponseMessage(response.data.message);
            successAlert(response.data.message);
            setSuccess(true);
          }
        } catch (error) {
            const errorMessage = error.response.data ? error.response.data.message : "Verification not successful"
            setLoading(false);
            setSuccess(false);
            setResponseMessage(errorMessage);
            errorAlert(errorMessage);
        }
      };
    
      useEffect(() => {
        verifyEmail();
      }, []);

    if (loading) {
    return (
        <>
        <Nav />
        <div class="hero-banner full bg-cover center" style={{ backgroundColor: '#2944c1', height: '100vh' }} data-overlay="0">
            <div class="container">
                <div class="mt-2">
                    <div class="row m-0 justify-content-center">
                        <p class="lead">Loading</p>
                    </div>
                </div>
            </div>
        </div>
        </>
        )
    }

    return(
        <>
        <Nav />
        <div class="hero-banner full full image-bottom" style={{ backgroundColor: '#2944c1', height: '100vh' }} data-overlay="0">
				<div class="container">
					<div class="mt-2">
						<div class="row m-0 justify-content-center">
							<div class="col-lg-112 col-md-8">

                            {!loading && !success && (
                                <div className="text-center">
                                <h3 className="font-size-h3">Verification Error</h3>
                                <h6 className="mt-10" style={{ color: "#F05B7F" }}>
                                    {responseMessage}
                                </h6>
                                    <div className="text-center">
                                        <div class="linkeo_link">
                                            <a href="/resend-verification" class="btn _hire_freelancers">Resend Verification Email</a>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {success && !loading && (
                                <div>
                                    <div className="text-center">
                                        <h3 className="font-size-h3">Successfully Verified</h3>
                                        <p>Kindly sign in to your account</p>
                                        <h6 className="mt-10" style={{ color: "#67CCCA" }}>
                                        {responseMessage}
                                        </h6>
                                    </div>
                                    <div className="mt-lg-20 mt-10 form-group d-flex flex-wrap flex-center">
                                        <Link to="/auth/registration">
                                        <button
                                            style={{ color: "#0071CE", background: "#CAE2F6" }}
                                            type="button"
                                            className="btn  font-weight-bold px-9 py-4 my-3 mx-4"
                                        >
                                            Back
                                        </button>
                                        </Link>
                                        <Link to="/auth/login">
                                        <button
                                            style={{ color: "#ffffff", background: "#0071CE" }}
                                            type="button"
                                            className="btn  font-weight-bold px-9 py-4 my-3 mx-4"
                                        >
                                            Sign In
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                            )}

							</div>
						</div>
					</div>
				</div>
			</div>
          <Footer />
            </>
    );
}