import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import github from './github.svg'
import linkedin from './linkedin.svg'
import GoogleLogin from 'react-google-login'


class Contact extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="main-content">
                    <h1> Contact Chris</h1>
                    <div className="contact-text">

                        <h3>GitHub Link</h3>
                        <h3> LinkedIn Link</h3>
                        <h3> Google Login</h3>
                    </div>
                    <div className="link-box">
                        <a href="https://github.com/Chris502"><img src={github} className="contactGitPic"></img></a>

                        <a href="https://www.linkedin.com/in/chris-anderson-b90870142/"> <img src={linkedin} className="contactLinkedInPic" alt="likedIn link"></img></a>
                        <GoogleLogin
                            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                            buttonText="Google+"
                            
                        />
                    </div>
                </div>
                <Footer />
            </div>
        )

    }
}


export default Contact