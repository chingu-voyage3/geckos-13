import { TweenMax, Elastic } from 'gsap';

const duration = 2;

export default {
  show(target, cb) {
    return TweenMax.from(target, 2, {
      opacity: 0,
      height: 0,
      onComplete: cb,
      ease: Elastic.easeOut.config(0.25, 1),
    });
  },

  hide(target, cb) {
    return TweenMax.to(target, 2, {
      opacity: 0,
      height: 0,
      onComplete: cb,
      ease: Elastic.easeOut.config(0.25, 1),
    });
  },
};
