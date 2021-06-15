import React from "react";

import Footer from '../../../components/footer';
import Nav from '../../../components/nav';

export const RegistrationSuccess = () => {
    return(
        <>
        <Nav />
        <div class="hero-banner full bg-cover center" style={{ backgroundColor: '#2944c1', backgroundImage: `url(/assets/img/bg2.png)`, height: '100vh' }}data-overlay="0">
				<div class="container">
					<div class="mt-2">
						<div class="row m-0 justify-content-center">
							<div class="col-lg-112 col-md-8">

								<h2>Congratulations</h2>

								<p class="lead">You have successfully signed up on Essayble. An email has just been sent to you. 
                                Proceed to your inbox and click on the link to verify your email address.</p>	
                                <p>Thank you for choosing Essayble.</p>

								<div class="linkeo_link">
									<a href="#" class="btn _hire_freelancers">Log In</a>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
          <Footer />
            </>
    );
}