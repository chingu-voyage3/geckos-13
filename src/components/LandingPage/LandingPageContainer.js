import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

class LandingPageContainer extends React.Component {
  render() {
    return (
      <div className="landing-container">
        <div className="landing-center">
          <Link to="/cocktails">
            <img
              className="landing-cocktail"
              src="img/cocktail1.svg"
              alt="cocktail logo"
            />
            <h1 className="landing-title">Are you thirsty?</h1>
          </Link>
        </div>
      </div>
    );
  }
}

export default LandingPageContainer;
