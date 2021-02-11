import React from 'react';
import TaskShow from './task_show';

class AllTasks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            selected_task: ''
        };
          
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCheck = this.handleCheck.bind(this);

    }

    componentDidMount() {
        this.props.fetchAllTasks()
    }

    handleDelete(id) {
        this.props.deleteTask(id)
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

    handleChange(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleCheck(id) {
        const { tasks } = this.props
        return e => {
            const task = tasks.filter(task => {
                return task.id === id
            })
            this.setState({ selected_task: task})
        }
    }


    render() {
        const tasks = this.props.search ? (
            this.props.search.slice().reverse().map(task => {
                return (
                    <ul key={task.id} className='all-tasks'>
                        <li>
                            <input
                            type="checkbox"
                            name="selection"
                            onClick={this.handleCheck(task.id)}
                            />
                            {task.title}
                        </li>
                        <button onClick={() => this.handleDelete(task.id)}>
                            delete
                        </button>
                    </ul>  
                )
        })
        ) : (
            this.props.tasks.slice().reverse().map(task => {
                return (
                    <ul key={task.id} className='all-tasks'>
                        <li>
                            <input
                            type="checkbox"
                            name="selection"
                            onClick={this.handleCheck(task.id)}
                            />
                            {task.title}
                        </li>
                        <button onClick={() => this.handleDelete(task.id)}>
                            delete
                        </button>
                    </ul>  
                )
        })
        )

        return (
            
            <div className="all-tasks-container">
                <div className="tasks-container">
                    <form onSubmit={this.handleSubmit()}>
                        <input
                            className="create-task-bar"
                            onChange={this.handleChange("title")}
                            type="text"
                            value={this.state.title}
                            placeholder="Add a Task..."
                        />
                    </form>
                    {tasks} 
                </div>
                <TaskShow task={this.state.selected_task} updateTask={this.props.updateTask} tasks={this.props.tasks}/>
            </div>
        )
    }
};

export default AllTasks;
