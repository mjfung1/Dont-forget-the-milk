import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
    constructor(props){
        super(props)
    }

    // foooter(){
    //     return(
    //         <div>sdasdasdasdasdasda</div>
    //     )
    // }

    render(){
        const { logout, currentUser } = this.props
        let display;
        if(currentUser){
            display = (
            <nav className="userPage">
                <h2 className="title">Hi, {currentUser.username}!</h2>
                <button className="button1" onClick={logout}>Log Out</button>
            </nav>  
            )
        } else {
            display = (
            <div className='page'>
                <nav className="nav">
                    <div>
                            <Link to="/">
                                <img src={window.logo} />
                            </Link>
                    </div>
                    <div>
                            <Link className="myButton" to="/login">Log in</Link>
                            <Link className="myButton signUpButton" to="/signup">Sign up for free</Link>
                    </div>  
                </nav>
            </div>
           
            )
        }
        return(
            <div>
            {display}
            {/* {this.foooter()} */}
            </div>
        )
    }
}

export default Navbar;



