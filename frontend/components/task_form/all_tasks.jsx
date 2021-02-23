import React from 'react';
import TaskShowContainer from './task_show_container';
import { Route, Switch } from 'react-router-dom';



class AllTasks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            selectedTask: []
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

    handleCheck(taskId) {
        console.log(this.props.history)
        return e => {
            
           
            this.props.history.push(`/tasks/${taskId}/edit`)
            this.setState({ selectedTask: taskId})
   
        }
    }


    render() {
        console.log(this.state)

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
                
                <Route exact path="/tasks/:taskId/edit" component={TaskShowContainer} />

            </div>
        )
    }
};

export default AllTasks;
