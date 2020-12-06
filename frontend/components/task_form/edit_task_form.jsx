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
            <section id="edit-task-form" className="edit-task-form">
                <div onClick={() => this.handleClose()} className="edit-close">
                    close &times;
        </div>
                <div className="edit-task-info">
                    <div className="edit-task-header">
                        <h1>Details</h1>
                        <button
                            id="delete-task-button"
                            onClick={() => this.handleDelete(this.state.task.id)}
                        >
                            Delete Task
            </button>
                    </div>

                    {title}

                    <form onSubmit={this.handleSubmit()}>
                        <textarea
                            type="text"
                            onChange={this.updateTitle()}
                            value={this.state.task.body}
                        />

                        <h1>Status</h1>
                        <section className="task-Status">
                            <li>
                                <input
                                    onChange={this.updateStatus()}
                                    type="radio"
                                    value="true"
                                    name="completed"
                                    checked={this.state.task.completed === true}
                                />
                                <label>Complete</label>
                            </li>
                            <li>
                                <input
                                    onChange={this.updateStatus()}
                                    type="radio"
                                    value="false"
                                    name="completed"
                                    checked={this.state.task.completed === false}
                                />
                                <label>Incomplete</label>
                            </li>
                        </section>

                        <div className="due-date">
                            <h1>Due:</h1>
                            <input
                                onChange={this.updateDueDate()}
                                type="date"
                                name="due-date"
                                value={this.state.task.due_date}
                            />
                        </div>


                        <input type="submit" value="Update" />
                    </form>
                </div>
            </section>
        );
    }
}

export default EditTask;