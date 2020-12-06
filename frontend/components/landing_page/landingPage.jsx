import React from 'react';
import Navbar from './navBar';
import Footer from './footer';
import Body from './body';




class LandingPage extends React.Component {
    render(){
        return(
            <div className='page'>
                <Navbar />

                <Body />

                <Footer />
            </div> 
        )
    }
}

export default LandingPage;



