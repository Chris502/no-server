import React, { Component } from 'react';
import github from './github.svg';
import linkedin from './linkedin.svg';
 


class Footer extends Component {
    render() {
        return (
            <div className="footer-bot">

                <a href="https://github.com/Chris502"><img src={github} className="githubPic" alt="github link"></img></a>
                <a href="https://www.linkedin.com/in/chris-anderson-b90870142/"> <img src={linkedin} className="linkedInPic"alt="likedIn link"></img></a>
            </div>
        )
    }
}

export default Footer