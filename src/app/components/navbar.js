/* eslint-disable no-script-url */
import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        	<div class="header header-transparent change-logo">
				<div class="container">
					<div class="row">
						<div class="col-lg-12 col-md-12 col-sm-12">
							<nav id="navigation" class="navigation navigation-landscape">
								<div class="nav-header">
									{/* <a class="nav-brand static-logo" href="/"><img src="assets/img/ess-logo-light.png" class="logo" alt="" /></a>
									<a class="nav-brand fixed-logo" href="/"><img src="assets/img/ess-logo-dark.png" class="logo" alt="" /></a> */}
									<a class="nav-brand static-logo" href="/"><img src="assets/img/penclip-light.png" class="logo" alt="" /></a>
									<a class="nav-brand fixed-logo" href="/"><img src="assets/img/dark-penclip.png" class="logo" alt="" /></a>
									<div class="nav-toggle"></div>
								</div>
								<div class="nav-menus-wrapper">
									<ul class="nav-menu">
									
										<li class="active"><a href="#">link 1<span class="submenu-indicator"></span></a>
											<ul class="nav-dropdown nav-submenu">
												<li><a href="#">Job Board<span class="submenu-indicator"></span></a>
													<ul class="nav-dropdown nav-submenu">
														<li><a href="index.html" class="active">Home Style 1</a></li>                                    
														<li><a href="home-2.html">Home Style 2</a></li>                                    
														<li><a href="home-3.html">Home Style 3</a></li> 
														<li><a href="home-4.html">Home Style 4</a></li> 
														<li><a href="home-5.html">Home Style 5</a></li> 
														<li><a href="home-6.html">Home Style 6</a></li>  														
													</ul>
												</li>
												<li><a href="#">Freelancing<span class="submenu-indicator"></span></a>
													<ul class="nav-dropdown nav-submenu">
														<li><a href="freelancer-1.html">Freelancing 1</a></li>                                    
														<li><a href="freelancer-2.html">Freelancing 2</a></li>  
														<li><a href="freelancer-3.html">Freelancing 3</a></li> 
														<li><a href="freelancer-4.html">Freelancing 4</a></li>  														
													</ul>
												</li>
											</ul>
										</li>
										
										<li><a href="xxx.html">Hire Writer</a></li>
										
									</ul>
									
									<ul class="nav-menu nav-menu-social align-to-right">
										
										<li>
										<Link to="/auth/login">
											Log In 
										</Link>
										</li>
										<li class="add-listing bg-whit">
										<Link to="/auth/register">
											Register
										</Link>
										</li>
									</ul>
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

export default Navbar;