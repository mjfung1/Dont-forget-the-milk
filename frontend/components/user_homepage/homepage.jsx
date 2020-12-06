import React from "react";
import GearDropdown from "./dropdown";

class userHomepage extends React.Component {
    constructor(props) {
        super(props);

        this.state = { query: "", results: [] };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllTasks();
    }

    handleSearch() {
        return e => {
            const query = e.target.value;
            let newResults = Object.assign([], this.state.results);

            this.props.tasks.forEach(task => {
                if (
                    task.title.toLowerCase().slice(0, query.length) === query &&
                    !newResults.includes(task)
                ) {
                    newResults.push(task);
                }
            });

            newResults.forEach(result => {
                if (result.title.toLowerCase().slice(0, query.length) !== query) {
                    const index = newResults.indexOf(result);
                    newResults.splice(index, 1);
                }
            });

            if (query === "") {
                newResults = [];
            }
            this.setState({ query: query });
            this.setState({ results: newResults });
        };
    }

    handleSubmit(search) {
        this.props.history.push(`/tasks/${search.id}/edit`);
        this.setState({ results: [] });
        this.setState({ query: "" });
    }

    render() {
        let searchResults;
        if (this.state.results.length === 0 && this.state.query !== "") {
            searchResults = <li>No Results</li>;
        } else {
            searchResults = this.state.results.map((task, idx) => {
                return <li key={idx}>{task.title}</li>;
            });
        }

        return (
            <header className="user-page-navbar">
                <div className="hamburger">
                    <i className="fas fa-bars"></i>
                </div>
                <section className="user-nav-left">
                    <form onSubmit={() => this.handleSubmit(this.state.results[0])}>
                        <input
                            className="search-bar"
                            onChange={this.handleSearch()}
                            type="text"
                            placeholder="Search..."
                            value={this.state.query}
                        />
                        <ul className="search-results">{searchResults}</ul>
                    </form>
                </section>

                <GearDropdown
                    user={this.props.user}
                    logout={this.props.logout}
                />
            </header>
        );
    }
}
export default userHomepage;