import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TransitionGroup from 'react-addons-transition-group';

// Local imports
import './App.css';
import AnimatedSwitch from '../AnimatedSwitch/AnimatedSwitch';
import HomePageContainer from '../HomePage/HomePageContainer';
import CocktailDetailContainer from '../CocktailDetail/CocktailDetailContainer';
import LandingPageContainer from '../LandingPage/LandingPageContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route
          render={({ location }) => (
            <TransitionGroup component="main">
              <AnimatedSwitch key={location.key} location={location}>
                <Route exact path="/" component={LandingPageContainer} />
                <Route exact path="/home" component={HomePageContainer} />
                <Route
                  path="/home/cocktails/:id"
                  component={CocktailDetailContainer}
                />
              </AnimatedSwitch>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

export default App;
