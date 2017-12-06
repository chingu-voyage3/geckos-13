import React from 'react';
import { Switch } from 'react-router-dom';
import animations from './animations';

class AnimatedSwitch extends Switch {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      height: window.innerHeight,
    };
  }

  componentWillAppear(cb) {
    console.log('componentWillAppear');
    cb();
  }

  componentWillEnter(cb) {
    console.log('componentWillEnter');
    const el = this.center;
    animations.show(el, cb);
  }

  componentWillLeave(cb) {
    console.log('componentWillLeave');
    const el = this.center;
    animations.hide(el, cb);
  }

  render() {
    return <div ref={c => (this.center = c)}>{super.render()}</div>;
  }
}

export default AnimatedSwitch;
