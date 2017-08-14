import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './styles/main.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className='head' />
        <Main/>
        <Footer />
      </div>
    );
  }
}

export default App;
