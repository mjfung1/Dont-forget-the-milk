import React from 'react';
import { Link } from 'react-router-dom';
import DeleteMany from './delete_many';

class AllTasks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            due_date: `${Date.now()}`,
            completed: "",
            list_id: 24,
            selectedTaskIds: []
        };
        this.selectionAction = this.selectionAction.bind(this);
        this.handleDeleteOne = this.handleDeleteOne.bind(this);

    }

    componentDidMount() {
        this.props.action()
    }

    handleDeleteOne(item_id) {
        this.props.deleteTask(item_id)

    }

    selectionAction(id) {
        console.log(this.props, "this selection id")
        const selectedIds = Object.assign([], this.state.selectedTaskIds);
        const last = this.props.props.match.url;

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
            this.props.props.history.push(path);
            setTimeout(() => {
                document.getElementById("edit-task-form").style.right = "0%";
            }, 20);
        } else {
            // this.props.props.history.push(last);
            <DeleteMany />
        }
    }


    isChecked(id) {
        this.state.selectedTaskIds.includes(id);
    }

    render() {
        console.log(this.props, "this the alltasks")
        const allTasks = this.props.tasks.map(task => {
        if (task.completed === false) {
            return (
                <div className="alltasks-container">
                    <label key={task.id} className="all-tasks">
                        <input
                            onClick={() => this.selectionAction(task.id)}
                            // checked={() => this.isChecked(task.id)}
                            type="checkbox"
                            name="selection"
                        />
                        <span>{task.title}</span>
                        </label>
                        <button onClick={() => this.handleDeleteOne(task.id)} className="trash-btn">
                            <i className="fas fa-trash"></i>
                        </button>
                </div>
                )
            }
        });
        return allTasks;
    }
    

        
        
}

export default AllTasks;