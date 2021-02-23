import React from 'react';
// import { withRouter } from 'react-router-dom';

class EditTaskForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = props.task;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(field) {
        
        return e => {
            this.setState({ [field]: e.target.value})
        }
        
    }

    handleSubmit(e) {
            e.preventDefault();
            this.props.updateTask(this.state)
                .then(this.props.history.push('/tasks'))
    }

    render() {
        return(
            <div>
                <h2>Edit</h2>
                <form id="edit-task-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="title">TITLE
                        <input type="text" 
                                value={this.state.title}
                                onChange={this.handleChange('title')}
                        /> 
                    </label>
                    <label htmlFor="due-date">DUE DATE
                        <input type="text" 
                                value={this.state.completed}
                                onChange={this.handleChange('due_date')}
                        /> 
                    </label>
                    <label htmlFor="completed">COMPLETED
                        <input type="text" 
                                value={this.state.completed}
                                onChange={this.handleChange('completed')}
                        /> 
                    </label>
                    <button>submit</button>
                </form>
            </div>
        )
    }
};

export default EditTaskForm
// export default withRouter(EditTaskForm);