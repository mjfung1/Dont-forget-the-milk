import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import generateQuote from '../../util/quote_util';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', 
                        password: '' };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleDemoLogin(e) {
        const demoUser = {
            username: 'mfung',
            password: 'hunter12'
        };
        this.props.processForm(demoUser)

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

    renderQuote() {
        const quote = generateQuote();
        return (
            <div>
                <p
                    className='quote-text'>"{quote.text}"
        </p>
                <p
                    className='quote-author'>- {quote.author}
                </p>
            </div>
        );
    }

    render() {
        const user = this.state;
        return (
            <div className='main'>

                <section className='left-side-page'>
                    <Link className='clicky' to='/'>
                        <img src={window.logo3} />
                    </Link>
                    <h1 className='left-message'>{this.renderQuote()}</h1>
                </section>

                <section className='right-side-page'>
                    <Link className="session-button" to="/signup">Sign up for free</Link>
                    <form
                        onSubmit={this.handleSubmit}
                        className='session-form'>
                        <h2>Been here before? Welcome back!</h2>
                        <h4 className='errorMessage'>{this.renderErrors()}</h4>
                        <input
                            className='login-inputs'
                            type='text'
                            onChange={this.update('username')}
                            value={user.username}
                            placeholder="Username">
                        </input>
                
                        <input
                            className='login-inputs'
                            type='password'
                            onChange={this.update('password')}
                            value={user.password}
                            placeholder="Password">
                        </input>
                    
                        <input
                            className='button'
                            type='submit'
                            value='Log in' />
                        <input
                            className='button demo'
                            type='button'
                            value='Demo Login'
                            onClick={this.handleDemoLogin} />
                    </form>
                    
                </section>
            </div>
        );
    }

}

export default LoginForm;