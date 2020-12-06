import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import generateQuote from '../../util/quote_util';

class LoginSession extends React.Component {
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
                    <LoginFormContainer />
                    
                </section>
            </div>
        );
    }
}

export default LoginSession;