import React from "react";
// import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import UserHomepageContainer from ".././user_homepage/user_homepage_container";
import ListFormContainer from '../lists_form/list_form_container';
import AllTasksContainer from './all_tasks_container'

class taskForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            due_date: `${Date.now()}`,
            completed: "",
            list_id: 24,
            selectedTaskIds: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDeleteAll = this.handleDeleteAll.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    update(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }


    handleSubmit(e) {
        return e => {
            e.preventDefault();
            const newTask = Object.assign({}, this.state);
            this.props.createTask(newTask);
            this.setState({
                title: ''
            })
        };
    }

    handleLogout() {
        console.log(this.props)
        this.props.logout()
        this.props.history.push('/')
    }

    handleDeleteAll() {
        this.state.selectedTaskIds.forEach(id => {
            this.props.deleteTask(id).then(this.setState({ selectedTaskIds: [] }));
        });
    }



    render() {
 
        let button = <input classname="add-btn" type="submit" value="Add Task" />;
        console.log(this)
        
        if (!this.state.title) {
            button = (
                <input
                    type="submit"
                    className="add-button"
                    value="Add Task"
                    style={{ opacity: 0.4, 
                            display: "none"}}
                    
                />
            );
        } else {
            button = <input 
                        type="submit" 
                        value="Add Task" 
                        style={{  display: "block"
                                }}
                        />;
        }

        const completed = this.props.tasks;
        let NumofCompleted = 0;
        let TotalTasks = 0;

        completed.forEach(task => {
            TotalTasks++;
            if (task.completed) {
                NumofCompleted++;
            }
        });

        let deleteAllOption;

        if (this.state.selectedTaskIds.length > 1) {
            deleteAllOption = (
                <div className="delete-many-section">
                    <span>{this.state.selectedTaskIds.length} tasks selected </span>
                    <span>
                        <button className="deleteAll" onClick={() => this.handleDeleteAll()}>
                            clear selection
                        </button>
                    </span>
                </div>
            );
        } else {
            deleteAllOption = "";
        }

        return (
            <section className="task-default-show"> 
               
                <UserHomepageContainer />

                <section className='main-form'>
                    <ListFormContainer /> 

                    <section className="list-items">
                        <div className="completed-status">
                            <h1>Incomplete</h1>
                            <h1>Completed</h1>
                        </div>
                        
                        <form onSubmit={this.handleSubmit()} className="task-form">
                            <input
                                onClick={this.handleClick}
                                onChange={this.update("title")}
                                type="text"
                                value={this.state.title}
                                placeholder="Add a Task..."
                            />
                            {button}
                        </form>
                            
                        <ul>
                            <AllTasksContainer props={this.props} />
                        </ul>
                    </section>
                    
                

                    <section
                        className={
                            this.state.selectedTaskIds.length === 0
                                ? "visible-list-summary"
                                : "hidden-list-summary"
                        }
                    >
                        <ul>
                            <label>
                                <li>{TotalTasks}</li>
                                    Tasks
                            </label>
                            <label>
                                <li>{NumofCompleted}</li>
                                Completed
                            </label>
                        </ul>
                    </section>

                    <section
                        className={
                            this.state.selectedTaskIds.length > 1
                                ? "visible-delete-option"
                                : "hidden-delete-option"
                        }
                    >
                        {deleteAllOption}
                    </section>

                </section>
            </section>
        );
    }
}

export default taskForm;