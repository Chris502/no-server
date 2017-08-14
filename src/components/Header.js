import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import App from '../App.js';
import Movie from '../Movie';
import UpdateList from '../UpdateList';
import Bomb from './AnnonMask.png';

class Header extends Component {

    render() {



        return (
            <nav className="header-top">
                <div className='icon-box'><img src={Bomb}  className='icon'></img></div>
                <div className="button-box">
                    <div className="top-bar"> <Link to='/App' className="top-link buttons but1">Home</Link></div>
                    <div className="top-bar"> <Link to='../Movie' className="top-link buttons but2">Thrones</Link></div>
                    <div className="top-bar"><Link to='../UpdateList' className="top-link buttons but3">Social</Link></div>
                    <div className="top-bar"> <Link to='../Contact' className="top-link buttons but4">Contact</Link></div>
                </div>
            </nav>
        )
    }
}

export default Header
