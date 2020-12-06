import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="nav">
            <div className="nav-buttons">
                <Link to="/"><img className='logo' src={window.logo3} /></Link>
                <ul className="nav-buttons">
                    <li><Link className="myButton" to="/login">Log in</Link></li>
                    <li><Link className="myButton signUpButton" to="/signup">Sign up for free</Link></li>
                </ul>
            </div>
        </nav>
    )
}


export default Navbar;