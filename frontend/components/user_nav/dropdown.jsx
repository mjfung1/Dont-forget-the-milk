import React from 'react';
import { withRouter } from "react-router";


class GearDropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

        this.changeVisibility = this.changeVisibility.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    changeVisibility() {
        this.setState({ visible: !this.state.visible });
    }


    handleLogout() {
        console.log(this.props)
        this.props.logout()
        this.props.history.push('/')
    }

    render() {
        const welcome = (
            <li className='setting-guest-names'>
                <h4 className="avatars">{this.props.user.first_name} {this.props.user.last_name}</h4>
                <span>{this.props.user.email}</span>
            </li>
        )

        const logout = (
            <button onClick={this.handleLogout} className='logout-button'>Sign out</button>
        )

        return (
            <section>
                <div>
                    {welcome}
                    {logout}
                </div>
            </section>
        );
    }
}

export default withRouter(GearDropdown);