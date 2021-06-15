/* eslint-disable no-script-url */
import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
	return (
        <>
        	<div class="header header-transparent change-logo">
				<div class="container">
					<div class="row">
						<div class="col-lg-12 col-md-12 col-sm-12">
							<nav id="navigation" class="navigation navigation-landscape">
								<div class="nav-header">
									<a class="nav-brand static-logo" href="/"><img src="assets/img/ess-logo-light.png" class="logo" alt="" /></a>
									<a class="nav-brand fixed-logo" href="/"><img src="assets/img/ess-logo-dark.png" class="logo" alt="" /></a>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>
  <div class="clearfix"></div>
  </>
    )
}

export default Nav;