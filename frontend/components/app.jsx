import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBarContainer from './nav_bar/nav_bar_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import TaskFormContainer from "./task_form/tasks_container";

import { AuthRoute, ProtectedRoute } from '../util/route_util';



const App = () => (
    <div>
        <Switch>
            <Route exact path='/' component={NavBarContainer }/>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <ProtectedRoute exact path="/tasks" component={TaskFormContainer} />
        </Switch>
    </div>
);

export default App;