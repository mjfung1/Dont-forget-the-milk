import React from "react";
import GearDropdown from "./dropdown";
import { withRouter } from 'react-router';

import AllTasksContainer from "../task_form/all_tasks_container";
import ListShowContainer from "../lists_form/list_show_container";

class UserNav extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            searchTerm: '', 
            filtered_tasks: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllTasks();
    }

    handleChange() {
        return e => {
            this.setState({
                searchTerm: e.target.value
            }) 
        };
    }

    handleSubmit(search) {
        return e => {
            e.preventDefault();
            const filtered = this.props.tasks.filter(task => {
                    return task.title.toLowerCase().includes(search.toLowerCase())                   
            })
            console.log(filtered, 'filtereddddddd')
            this.setState({
                searchTerm: '',
                filtered_tasks: filtered})
        }
        
    }

    render() {
        return (
            <div> 
                <section className="user-page-navbar">
                    <form onSubmit={this.handleSubmit(this.state.searchTerm)}>
                        <input
                            className="search"
                            name="search"
                            autoComplete="off"
                            onChange={this.handleChange()}
                            type="text"
                            placeholder="Search"
                            value={this.state.searchTerm}
                        />
                    </form>
                    
                    <GearDropdown
                        user={this.props.user}
                        logout={this.props.logout}
                    />
                </section>
                <section className="main-container">
                    <section className="list-bar">
                        <ListShowContainer />
                    </section>
                    <section>
                        <AllTasksContainer search={this.state.filtered_tasks}/>
                    </section>
                </section>

            </div>
        );
    }
}
export default withRouter(UserNav);