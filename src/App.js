import React, { Component } from 'react';
// import ReactGA from 'react-ga';

import './App.css';
import './animate.css';

import $ from 'jquery';
import 'jquery-ui';
import 'jquery-scrollify';

import Panels from './panels/Panels';

import projectOat from './pages/projectOat';
import projectVulcan from './pages/projectVulcan';
import projectPortfolio from './pages/projectPortfolio';
import About from './pages/About';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    $('.name').fadeIn(2500);
    // ReactGA.initialize('UA-143305672-2');
    // ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return  (
      <>
	  		<Router>
          <Switch>
            <Route exact path="/" component={Panels} />
            <Route path="/vulcan" component={projectVulcan} />
            <Route path="/oat" component={projectOat} />
            <Route path="/portfolio" component={projectPortfolio} />
            <Route path="/about" component={About} />
          </Switch>
			</Router>
      </>
    );
  }
}
export default App;
