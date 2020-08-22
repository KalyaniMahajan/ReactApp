import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Protected from './components/Protected';
import Auth from './components/Auth';
import View from './components/View';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
          <Nav />    
          <Switch>
            <Route path="/about">
              <Protected  cmp={About} />
            </Route>
            <Route path="/home">
            <Protected  cmp={Home} />
            </Route>
            <Route path="/list">
            <Protected  cmp={View} />
            </Route>
            <Route path="/">
              <Auth />
            </Route>
          </Switch>

        </Router>
    </div>
  );
}

export default App;
