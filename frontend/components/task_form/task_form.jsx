import React from "react";
// import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import UserHomepageContainer from ".././user_homepage/user_homepage_container";


class taskForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            due_date: "",
            completed: "",
            list_id: "",
            selectedTaskIds: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.selectionAction = this.selectionAction.bind(this);
        this.handleDeleteAll = this.handleDeleteAll.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
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
            this.props.createTask(newTask)
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

    componentDidMount() {
        console.log(this.props)
        this.props.action()
    }

    componentDidUpdate() {
        // this.props.action()
    }

    selectionAction(id) {
        
        const selectedIds = Object.assign([], this.state.selectedTaskIds);
        const last = this.props.match.url;

        if (selectedIds.includes(id)) {
            const idx = selectedIds.indexOf(id);
            selectedIds.splice(idx, 1);
            this.setState({ selectedTaskIds: selectedIds });
        } else {
            selectedIds.push(id);
            this.setState({ selectedTaskIds: selectedIds });
        }

        if (selectedIds.length === 1) {
            console.log(this.props)
            const taskId = selectedIds[0];
            const path = last + "/" + taskId + "/edit";
            this.props.history.push(path);
            setTimeout(() => {
                document.getElementById("edit-task-form").style.right = "0%";
            }, 20);
        } else {
            this.props.history.push(last);
        }
    }

    isChecked(id) {
        this.state.selectedTaskIds.includes(id);
    }


    render() {

        const allTasks = this.props.tasks.map(task => {
            return (
                <label key={task.id} className="all-tasks">
                    <input
                        onClick={() => this.selectionAction(task.id)}
                        checked={this.isChecked(task.id)}
                        type="checkbox"
                        name="selection"
                    />
                    <span>{task.title}</span>
                </label>
            );
        });

        let button;
        if (!this.state.title) {
            button = (
                <input
                    type="submit"
                    value="Add Task"
                    style={{ opacity: 0.4 }}
                    disabled
                />
            );
        } else {
            button = <input type="submit" value="Add Task" />;
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
                <button className="deleteAll" onClick={() => this.handleDeleteAll()}>
                    {this.state.selectedTaskIds.length} tasks selected. Clear selection
                </button>
            );
        } else {
            deleteAllOption = "";
        }

        return (
            <section className="task-default-show">  
                <section className='main-form'>
                    <UserHomepageContainer />
                    {/* <h2 className="title">Hi, {this.props.currentUser.username}!</h2>   */}
                    {/* <button className="button1" onClick={this.handleLogout}>Log Out</button> */}
                    <h1>Tasks</h1>
                    <form onSubmit={this.handleSubmit()} className="task-form">
                        <input
                            onChange={this.update("title")}
                            type="text"
                            value={this.state.title}
                            placeholder="Add a Task"
                        />
                        {button}
                    </form>
                    <section className="list-items">
                        
                        <ul>{allTasks}</ul>
                    </section>
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
        );
    }
}

export default taskForm;