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
                    <div className='nav-buttons'>
                        
                        <Link to="/">
                            <img className='logo' src={window.logo3} />
                        </Link>
                            
                        <ul className='nav-buttons'>
                            <li>
                                <Link className="myButton" to="/login">Log in</Link>
                            </li>
                            <li>
                                <Link className="myButton signUpButton" to="/signup">Sign up for free</Link>
                            </li>

                        </ul>
                    </div>
                    
                     
                </nav>
                <main className='main'>
                    <div className='slogan'>
                        <h1>The smart to-do app for busy people.</h1>
                        <Link className='signUp' to='/signup'>Sign Up Free</Link>
                    </div>
                    <div className='pic-change'>
                        <img src={window.mainCow} />
                    </div>
                </main>
                <footer>
                    <h1>Footer</h1>
                    <h1>Footer</h1>
                    <h1>Footer</h1>
                    <h1>Footer</h1>
                </footer>
            </div>
           
            )
        }
        return(
            <div>
            {display}
            </div>
        )
    }
}

export default Navbar;



