import React from "react";

class taskForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            due_date: "",
            completed: "",
            list_id: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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

    componentDidMount() {
        this.props.action()
    }

    render() {
        const allTasks = this.props.tasks.map(task => {
            return (
                <label key={task.id} className="all-tasks">
                    <span>{task.title}</span>
                </label>
            );
        });


        return (
            <section className="task-default-show">  
                    <h1>Tasks</h1>
                    <h2>{allTasks}</h2>
            </section>
        );
    }
}

export default taskForm;