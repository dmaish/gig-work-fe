import React from 'react';
import { Route, Switch, Redirect, Link} from "react-router-dom";
import Login from './login';
import Register from './register';

export const Auth = () => {
    return (
      <>
            <div class="container-fluid">
                <div style={{height: '100vh'}} class="row">
                    <div style={{backgroundColor: '#2944c1', backgroundImage: `url(/assets/img/bg2.png)`, backgroundRepeat: 'no-repeat'}} class="d-flex flex-column col-md-5 p-0 col-sm-5">
                        <div style={{width: '100%'}}  class="p-4">
                            <a class="nav-brand static-logo" href="/">
                            <img src="/assets/img/penclip-light.png" class="logo mb-4" alt="" /></a>
                            <h4 style={{color: '#ffffff'}} className="mt-4">Welcome !</h4>
                            <h5 style={{color: '#ffffff'}}>Let us connect you to the best essay writers worldwide...</h5>
                        </div>
                    </div>
                    
                    <div style={{height: '100%'}} class="col-md-7 col-sm-7 p-0">
                        <div className="d-flex justify-content-end p-4">Don't have an account yet ? <Link to="/auth/register"><h6 style={{color: "#4B61CC"}}>&nbsp;Register !</h6></Link></div>
                        
                        <Switch>
                            <Route path="/auth/login"  component={Login} />
                            <Route path="/auth/register"  component={Register} />
                            <Redirect from="/auth" to="/auth/login" />
                            <Redirect to="/auth/login" />
                        </Switch>
          
                    </div>
                    
                </div>
            </div>
      </>
    );
}
