import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Homepage from './modules/home';
import { RegistrationSuccess, Verification, ResendVerification, Auth } from './modules/auth';


export const Routes = () => {
    return (
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route>
            <Auth />
          </Route>
          {/* <Route path="/success" component={RegistrationSuccess} />
          <Route path="/verify" component={Verification} />
          <Route path="/resend-verification" component={ResendVerification} />
          <Redirect to="/auth/login" /> */}
        </Switch>
    );
}