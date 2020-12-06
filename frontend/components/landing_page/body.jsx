import React from 'react';
import { Link } from 'react-router-dom';


const Body = () => {
    return (
        <main className='main'>
            <div className='slogan'>
                <h1>The smart to-do app for busy people.</h1>
                <Link className='signUp' to='/signup'>Sign Up Free</Link>
            </div>
            <div className='pic-change'>
                <img src={window.mainCow} />
            </div>
        </main>
    )
}

export default Body;