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
        
        <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path="/login" component={LoginSession} />
            <Route path="/signup" component={SignUpFormContainer} />
            <div className="task-show">
                {/* <Route path="/tasks" component={UserHomepageContainer} /> */}
                <Route exact path="/tasks/:taskId/edit" component={EditTaskContainer} />
                <Route className="task-show" path="/tasks" component={TaskFormContainer} />
                {/* <Route path="/lists/:listId/tasks/:taskId/edit" component={EditTaskContainer} /> */}
            </div>
            <Route className="list-and-task" path="/lists/:list.id/tasks" component={ListFormContainer} />
        </Switch>
       

    </div>
);

export default App;