import React from 'react';
import { TweenMax, Elastic } from 'gsap';
import './Homepage.css';

class Homepage extends React.Component {
  componentWillAppear(callback) {
    console.log('inside');
    const el = this.center;
    console.log(el);
    TweenMax.fromTo(
      el,
      1,
      { opacity: 0 },
      { opacity: 1, onComplete: callback }
    );
  }

  componentWillLeave(callback) {
    const el = this.center;
    console.log(el);
    TweenMax.fromTo(
      el,
      1,
      { y: 0, opacity: 1 },
      { y: -100, opacity: 0, onComplete: callback }
    );
  }

  render() {
    return (
      <div className="homepage-container">
        <div className="homepage-center" ref={c => (this.center = c)}>
          <img className="homepage-cocktail" src="img/cocktail1.svg" />
          <h1 className="homepage-title">Are you thirsty?</h1>
        </div>
      </div>
    );
  }
}

export default Homepage;
