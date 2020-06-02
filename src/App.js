import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import View from './components/View';
import Auth from './components/Auth';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
          <Link to="home">Home</Link>
          <Link to="about">About</Link>
          <Link to="/">Login</Link>
          
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/home">
              <Home />
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
