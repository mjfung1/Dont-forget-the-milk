import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBarContainer from './nav_bar/nav_bar_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';


import { AuthRoute } from '../util/route_util';



const App = () => (
    <div>
        <Switch>
            <Route exact path='/' component={NavBarContainer }/>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </Switch>
  
    </div>
);

export default App;