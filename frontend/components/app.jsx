import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './landing_page/landingPage';
import SignUpFormContainer from './session_form/signup_form_container';
import LoginSession from './session_form/login_session';
import UserNavContainer from './user_nav/user_nav_container';


const App = () => (
    <div>
        
        <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path="/login" component={LoginSession} />
            <Route path="/signup" component={SignUpFormContainer} />
            <Route path="/tasks" component={UserNavContainer} />
        </Switch>
       

    </div>
);

export default App;