"use strict" 
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';




import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import reducers from './reducers/index';
import{applyMiddleware, createStore} from 'redux';
import{postUser} from './actions/userActions';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//Step 1 create store
const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

import Main from './main';
import Home from './components/pages/home';
import About from './components/pages/about'
import Basketball from './components/pages/basketball';
import Football from './components/pages/football';
import Baseball from './components/pages/baseball';
import Login from './components/pages/login';
import Register from './components/pages/register';
import Posts from './components/pages/posts';
import Contacts from './components/pages/contacts';

//import NotFound from './components/pages/notfound';


const Routes = (
    <Provider store = {store}>
        <Router history={browserHistory}>
            <Route path="/" components={Main}>
                <IndexRoute components={Home}/>
                <Route path="/about" component={About} />
                <Route path="/football" component={Football}/>
                <Route path="/basketball" component={Basketball}/>
                <Route path="/baseball" component={Baseball}/>
                <Route path="/login" component={Login}/>
                <Route path="/posts" component={Posts}/>
                <Route path="/register" component={Register}/>
                <Route path="/contacts" component={Contacts}/>
            </Route>
        </Router>
    </Provider>
)

render(
    Routes, document.getElementById('app')
);

