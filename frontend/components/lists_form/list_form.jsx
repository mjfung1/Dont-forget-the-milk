import React from "react";
import { Link } from "react-router-dom";
import EditListDropdown from "./edit_list_dropdown";

class ListForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            visible: false,
            error: ""
        };
        this.changeVisibility = this.changeVisibility.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.avoidDBError = this.avoidDBError.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllLists();
    }

    changeVisibility() {
        this.setState({ visible: !this.state.visible });
    }

    update(type) {
        return e => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleClose() {
        this.setState({ ["title"]: "" });
        this.setState({ ["error"]: "" });
        this.props.clearListErrors;
        this.changeVisibility();
    }

    avoidDBError() {
        this.setState({ ["error"]: "List title can't be blank!!" });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ ["error"]: "" });
        this.props.clearListErrors();
        if (this.state.title.length === 0) {
            this.avoidDBError();
        } else {
            const list = Object.assign({}, { title: this.state.title });
            this.props.createNewList(list).then(() => {
                this.setState({ ["title"]: "" });
                this.setState({ ["error"]: "" });
                this.props.clearListErrors();
                this.changeVisibility();
            });
        }
    }

    renderErrors() {
        if (this.props.errors) {
            return <div>{this.props.errors}</div>;
        }
    }

    render() {
        const allLists = this.props.lists.map(list => {
            return (
                <li key={list.id}>
                    <Link className="list-link" to={`/lists/${list.id}/tasks`}>
                        {list.title}
                    </Link>
                    <EditListDropdown
                        list={list}
                        update={this.props.updateList}
                        delete={this.props.deleteList}
                        errors={this.props.errors}
                        clearErrors={this.props.clearListErrors}
                    />
                </li>
            );
        });

        return (
            <section className="main-siderbar">
                <img className='logo' src={window.cowface} />
                <section className="tasks-section">
                    <div className="inbox-arrow">
                        <i className="fas fa-caret-down" />
                        {/* <i className="fas fa-caret-right" /> */}
                        <h4>Inbox</h4>
                    </div>
                    <li>
                        <Link className="list-all-tasks" to={"/tasks"}>All Tasks</Link>
                        <i className="fas fa-caret-down" />
                    </li>
                </section>

                <header className="list-titles">
                    <div className="inbox-arrow">
                        <i className="fas fa-caret-down" />
                        {/* <i className="fas fa-caret-right" /> */}
                        <h4>Lists</h4>
                    </div>
                    <button id="list-btn" onClick={() => this.changeVisibility()}>
                        <i className="fas fa-plus" />
                    </button>
                </header>

                <div
                    id="myModal"
                    className={
                        this.state.visible ? "visible-list-modal" : "hidden-list-modal"
                    }
                >
                    <div className="modal-content">
                        <span onClick={() => this.handleClose()} className="close">
                            &times;
            </span>
                        <h1>Add a List</h1>
                        <form onSubmit={this.handleSubmit}>
                            <label>Please enter a list name:</label>
                            <input
                                onChange={this.update("title")}
                                type="text"
                                value={this.state.title}
                            />
                            <div>{this.state.error}</div>
                            {this.renderErrors()}
                            <input type="submit" value="Add" />
                        </form>
                    </div>
                </div>
                <div className="all-list">
                    <ul className="list-titles">
                    {allLists}
                    </ul>
                </div>
            </section>
        );
    }
}

export default ListForm;