import React, { Component } from 'react';

import './App.css';
import './animate.css';

import 'jquery-ui';
import 'jquery-scrollify';

import Panels from './panels/Panels';

import projectOat from './projects/projectOat';
import projectVulcan from './projects/projectVulcan';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  componentDidMount() {

  }

  render() {
    return  (
      <>
	  		<Router>
				<Switch>
					<Route exact path="/" component={Panels} />
					<Route path="/vulcan" component={projectVulcan} />
					<Route path="/oat" component={projectOat} />
				</Switch>
			</Router>
			{/* <Panels /> */}
      </>
    );
  }
}
export default App;
