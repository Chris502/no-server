import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch,Link, Route} from 'react-router-dom'
import App from './App';
import Movie from './Movie';
import Main from './components/Main'
import Landing from './components/Landing';
import UpdateList from './UpdateList';
import Contact from './Contact';
import { Timeline } from 'react-twitter-widgets'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/App' component={App} />
            <Route path='/Movie' component={Movie} />
            <Route path='/UpdateList' component={UpdateList} />
            <Route path='/Contact' component={Contact} />
        </Switch>

    </Router>,
    
    
    
    
    
    
    
    
    
    
    document.getElementById('root'));
registerServiceWorker();
