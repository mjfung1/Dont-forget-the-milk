import React from "react";

// task has status, complete='true' incomplete='false'

class EditTask extends React.Component {
    constructor(props) {
        super(props);

        this.state = { list: this.props.list, task: this.props.task };
        this.updateTitle = this.updateTitle.bind(this);
        this.updateStatus = this.updateStatus.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.updateDueDate = this.updateDueDate.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllTasks();
        document.getElementById("edit-task-form").style.display = "block";
    }

    componentWillReceiveProps(newProps) {
        this.setState({ list: newProps.list, task: newProps.task });
    }

    updateTitle() {
        return e => {
            this.state.task.title = e.target.value;
            this.setState(this.state.task);
        };
    }

    updateStatus() {
        return e => {
            if (e.target.value === "true") {
                this.state.task.completed = true;
            }
            if (e.target.value === "false") {
                this.state.task.completed = false;
            }
            this.setState(this.state.task);
        };
    }

    updateDueDate() {
        return e => {
            this.state.task.due_date = e.target.value;
            this.setState(this.state.task);
        };
    }


    handleDelete(id) {
        this.props.deleteTask(id).then(() => {
            this.props.history.push("/tasks");
        });
    }

    handleSubmit(e) {
        return e => {
            e.preventDefault();
            this.props.updateTask(this.state.task).then(() => {
                document.getElementById("edit-task-form").style.right = "-43.5%";
                setTimeout(() => {
                    const currentUrl = this.props.location.pathname.split("/");
                    currentUrl.splice(-2, 2);
                    const redirectToUrl = currentUrl.join("/");
                    this.props.history.push(redirectToUrl);
                    document.getElementById("edit-task-form").style.display = "hidden";
                }, 100);
            });
        };
    }

    handleClose() {
        document.getElementById("edit-task-form").style.right = "-43.5%";
        setTimeout(() => {
            document.getElementById("edit-task-form").style.display = "hidden";
            const currentUrl = this.props.location.pathname.split("/");
            currentUrl.splice(-2, 2);
            const redirectToUrl = currentUrl.join("/");
            this.props.history.push(redirectToUrl);
        }, 100);
    }

    render() {
        console.log(this.props)
        let title;
        if (this.props.list.title) {
            const taskTitle = this.props.list.title;
            title = <h1>List : {taskTitle}</h1>;
        } else {
            title = '';
        }

        return (
            <section id="edit-task-form">
                <div onClick={() => this.handleClose()} className="edit-close">
                    close &times;
                </div>
                    <div className="edit-task-info">
                    <div className="edit-task-header">
                        
                    </div>

                    <form  className="edit-task-form" onSubmit={this.handleSubmit()}>
                        <div className="due-date">
                        <h1>Edit</h1>
                            {/* <h1><i className="fas fa-grip-lines-vertical"></i></h1> */}
                            <input
                                className="edit-input"
                                type="text"
                                onChange={this.updateTitle()}
                                value={this.state.task.title}
                            />
                            {/* <h1><i className="far fa-edit"></i></h1> */}
                        </div>


                        <div className="due-date">
                            <h1>Status</h1>
                            <section className="task-Status">
                                
                                <li>
                                    <label>Incomplete</label>
                                    <input
                                        onChange={this.updateStatus()}
                                        type="radio"
                                        value="false"
                                        name="completed"
                                        checked={this.state.task.completed === false}
                                    />
                                    
                                </li>
                                <li>
                                    <label>Completed</label>
                                    <input
                                        onChange={this.updateStatus()}
                                        type="radio"
                                        value="true"
                                        name="completed"
                                        checked={this.state.task.completed === true}
                                    />
                                    
                                </li>

                            </section>
                        </div>
                        

                        <div className="due-date">
                            <h1>Due:</h1>
                            <input
                                onChange={this.updateDueDate()}
                                type="date"
                                name="due-date"
                                value={this.state.task.due_date}
                            />
                        </div>


                        <input className="update-btn" type="submit" value="Update" />
                    </form>
                </div>
            </section>
        );
    }
}

export default EditTask;