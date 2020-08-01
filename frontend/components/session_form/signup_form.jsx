import React from 'react';
import { Link } from 'react-router-dom';



class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            username: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }


    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    componentWillUnmount() {
        this.props.clearSessionErrors();
    }
 
    render() {
        const user = this.state;
        let emailError = null;
        let passwordError = null;
        let usernameError = null;
        let firstnameError = null;
        let lastnameError = null;

        this.props.errors.forEach(error => {
            if (error === "Email can't be blank") {
                return emailError = <div>Invalid email address</div>
            } else if (error === "Password is too short (minimum is 6 characters)"){
                return passwordError = <div>Minimum is 6 characters</div>
            } else if (error === "Username can't be blank") {
                return usernameError = <div>Minimum is 2 characters</div>
            } else if (error === "First name can't be blank") {
                return firstnameError = <div>First name is required</div>
            } else if (error === "Last name can't be blank") {
                return lastnameError = <div>Last name is required</div>
            }
        })
        return (
            <div className='main'>
                <section className='left-side-page'>
                    <Link className='clicky'to='/'>
                        <img src={window.logo3} />
                    </Link>
                    <h1 className='left-message'>Join Millions of lazy people getting
                        more organized and productive!</h1>
                </section>
                <section className='right-side-page'>
                    <Link className="session-button" to="/login">Log in</Link>
                    <form
                        onSubmit={this.handleSubmit}
                        className='session-form'>
                        <h2>Sign up for free.</h2>
                        
                        <input
                            className='login-inputs'
                            type='text'
                            onChange={this.update('first_name')}
                            value={user.first_name}
                            placeholder="First Name">
                        </input>
                        <h3>{firstnameError}</h3>
                        <input
                            className='login-inputs'
                            type='text'
                            onChange={this.update('last_name')}
                            value={user.last_name}
                            placeholder="Last Name">
                        </input>
                        <h3>{lastnameError}</h3>
                        <input
                            className='login-inputs'
                            type='text'
                            onChange={this.update('email')}
                            value={user.email}
                            placeholder="Email">
                        </input>
                        <h3>{emailError}</h3>
                        <input
                            className='login-inputs'
                            type='text'
                            onChange={this.update('username')}
                            value={user.username}
                            placeholder="Username">
                        </input>
                        <h3>{usernameError}</h3>
                        <input
                            className='login-inputs'
                            type='password'
                            onChange={this.update('password')}
                            value={user.password}
                            placeholder="Password">
                        </input>
                        <h3>{passwordError}</h3>
                        <input className='button' type='submit' value='Sign up!' />
                    </form>
                </section>
            </div>
        );
    }
}
export default SignupForm;