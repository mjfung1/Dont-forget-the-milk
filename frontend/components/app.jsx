import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container'
import { AuthRoute } from '../util/route_utils'
import Home from './home/home';

export default () => (
    <div className='greetings'>
        <Route path="/" component={NavBarContainer} />
        <Route path="/signup" component={SignupContainer} />
    </div>
);
