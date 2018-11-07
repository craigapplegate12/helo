import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard.js';
import Auth from './components/Auth/Auth.js';
import Post from './components/Post/Post.js';
import Form from './components/Form/Form.js';

export default (
    <Switch>
        <Route component = {Auth} exact path = "/"></Route>
        <Route component = {Dashboard} exact path = "/dashboard"></Route>
        <Route component = {Post} exact path = "/post/:postid"></Route>
        <Route component = {Form} exact path = "/new"></Route>
    </Switch>
    
)