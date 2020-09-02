import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import PageNotFound from './components/pages/PageNotFound';
import Protected from './components/pages/Protected';
import Auth from './components/pages/Auth';
import View from './components/pages/View';
import AddPost from './components/pages/AddPost';
import Nav from './components/layout/Nav';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/about">
            <Protected cmp={About} />
          </Route>
          <Route path="/home">
            <Protected cmp={Home} />
          </Route>
          <Route path="/list">
            <Protected cmp={View} />
          </Route>
          <Route path="/login">
            <Auth />
          </Route>
          <Route path="/posts">
            <Protected cmp={AddPost} />
          </Route>
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
