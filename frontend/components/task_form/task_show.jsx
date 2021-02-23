import React from 'react'
import EditTaskForm from './edit_task_form'


class TaskShow extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = this.props.task;
    }
   

    componentDidMount() {
        this.props.fetchTask(this.props.match.params.taskId);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState, 'UNO')
        console.log(prevProps, 'DOS')
        if (prevProps.task !== this.props.task) {
            this.props.fetchTask(prevProps.match.params.taskId);
        }
    }

    render() {
        if (!this.props.task) return null;
        return (

            <EditTaskForm task={this.props.task} updateTask={this.props.updateTask} />
        )
        }

};

export default TaskShow;