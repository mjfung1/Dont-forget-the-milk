import React from 'react'


class TaskShow extends React.Component {
    constructor(props) {
        super(props);
        debugger
        this.state = {
            task: props.SelectedTask,
            completed: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        debugger
        // this.setState({title: this.props.task.title})
    }
    handleChange(field) {
        return e => {
            this.setState({ [field]: e.target.value})
        }
    }

    handleSubmit(e) {
        return e => {
            e.preventDefault();
            console.log(this.state)
        }
    }



    render() {

        console.log(this.state)

        const { task, tasks } = this.props

        const num_completed = tasks.filter(task => {
            return task.completed === true;
        })
        debugger
        const show_task = task ? (
            <form onSubmit={this.handleSubmit()}>
                <label htmlFor="title">
                    <input type="text" 
                            value={this.state.task}
                            onChange={this.handleChange('title')}
                    /> 
                </label>
                <label htmlFor="completed">
                    <input type="text" 
                            value={this.state.completed}
                            onChange={this.handleChange('completed')}
                    /> 
                </label>
            </form>
        ) : (
            <div className="summary">
                <div>
                    {tasks.length}
                    task
                </div>
                <div>
                    {num_completed.length}
                    completed
                </div>
            </div>
        )

        return (
            <div>
                {show_task}
            </div>
        )
        }

};

export default TaskShow;