import React from 'react';
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import Login from './login';
import Register from './register';

function Homepage() {
    return (
      <>
          <Navbar />
          <div class="hero-banner full image-bottom" style={{backgroundColor: '#2944c1', backgroundImage: `url(/assets/img/bg2.png)`, backgroundRepeat: 'no-repeat', height: '96vh'}} data-overlay="0">
              <img src="/assets/img/adam.png" alt="latest property" class="image-cover img-responsive"/>
              <div class="container">
                <div class="row">
                  <div class="col-lg-7 col-md-0 col-sm-12">
                    <h1>Hire the best personal essay writers today</h1>
                    <p class="lead">carefully vetted writers to help you pen down your essay from initial topic to finished paper !</p>

                      <div class="linkeo_link">
                        <a style={{fontSize: '18px', fontWeight: '600'}} class="btn _hire_freelancers btn-lg">HIRE WRITER NOW</a>
                      </div>
                  </div>
                </div>
              </div>
            </div>

          <Login />
          <Register />
          <Footer />
      </>
    );
}

export default Homepage;