import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {   username: '', 
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
        this.props.processForm(user).then(() => this.props.history.push('/tasks'));
    }

    handleDemoLogin(e) {
        const demo = {
            username: 'demo',
            password: 'nothunter12'
        };
        this.props.processForm(demo).then(() => this.props.history.push('/tasks'));

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
        return (
   
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
                    

        );
    }

}

export default LoginForm;