import React from 'react';
import { Route } from 'react-router-dom';
import SignupContainer from './session/signup_container'
import { AuthRoute } from '../util/route_utils'

export default () => (
    <div className='greetings'>
        <h1>Dont forget that melkkkkkk!</h1>
        <Route path="/signup" component={SignupContainer} />
    </div>
);
