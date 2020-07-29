import React from 'react';
import { Route } from 'react-router-dom';

import NavBarContainer from './nav_bar/nav_bar_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';



const App = () => (
    <div>
        <header>
            <h1>Don't Forget le melk</h1>
            <NavBarContainer />
        </header>

        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </div>
);

export default App;