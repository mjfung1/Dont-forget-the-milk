import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import LandingPage from './landing_page/landingPage';
import SignUpFormContainer from './session_form/signup_form_container';
import LoginSession from './session_form/login_session';
import TaskFormContainer from "./task_form/tasks_container";
import EditTaskContainer from "./task_form/edit_task_container";
// import UserHomepageContainer from "./user_homepage/user_homepage_container";
import ListFormContainer from "./lists_form/list_form_container";

import { AuthRoute, ProtectedRoute } from '../util/route_util';



const App = () => (
    <div>
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path="/login" component={LoginSession} />
            <Route path="/signup" component={SignUpFormContainer} />
            <div className="task-show">
                <Route className="task-show" path="/tasks" component={TaskFormContainer} />
                <Route exact path="/tasks/:taskId/edit" component={EditTaskContainer} />
                <Route path="/lists/:listId/tasks/:taskId/edit" component={EditTaskContainer} />
            </div>
            {/* <Route path="/tasks1" component={UserHomepageContainer} /> */}
            <Route className="list-and-task" path="/tasks" component={ListFormContainer} />
        </Switch>
        </BrowserRouter>

    </div>
);

export default App;