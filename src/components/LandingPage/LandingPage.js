import React from 'react';
import { TweenMax } from 'gsap';
import './LandingPage.css';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-container">
        <div className="landing-center">
          <Link to="/home">
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

export default LandingPage;
