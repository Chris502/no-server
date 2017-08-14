import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component{
    render(){
        return(
            <div className="landing-img">
                <div className='lander'>
                  
                    <div className="landing-box"><div className="header-box"> 
                         <h2>Netflix binge ahead? Let me help!</h2></div>
                        <div className="land-but"><Link to='/App'><button className="getStart zoomIn">Get Started</button></Link></div>
                        
                    </div>

                

                </div>
            </div>
        )
    }
}
export default Landing