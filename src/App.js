import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import routes from './routes.js';
import './App.css';

import Nav from './components/Nav/Nav';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Route component={Nav}/>
        {routes}
       
        </div>
    );
  }
}

export default App;
