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
        console.log(this.props)
        const welcome = (
            <li className='setting-guest-names'><span className="avatar">{this.props.user.first_name[0]}{this.props.user.last_name[0]}</span><h2>{this.props.user.username}</h2></li>
        )

        const logout = (
            <button onClick={this.handleLogout} className='logout-link'>logout</button>
        )

        return (
            <section>
                <div className='gear-dropdown-btn' onClick={this.changeVisibility}>
                    <i className="fas fa-cog"></i>
                </div>

                <div className={this.state.visible ? 'visible-dropdown' : 'hidden-dropdown'}>
                    {welcome}
                    {logout}
                </div>
            </section>
        );
    }
}

export default withRouter(GearDropdown);