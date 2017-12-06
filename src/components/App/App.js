import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import TransitionGroup from 'react-addons-transition-group';

// Local imports
import './App.css';
import AnimatedSwitch from '../AnimatedSwitch/AnimatedSwitch';
import HomePage from '../HomePage/HomePage';
import LandingPage from '../LandingPage/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route
          render={({ location }) => (
            <TransitionGroup component="main">
              <AnimatedSwitch key={location.key} location={location}>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/home" component={HomePage} />
              </AnimatedSwitch>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

export default App;
