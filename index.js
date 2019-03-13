'use strict';
let {useState} = require('react');

function useReveal() {

  const [isRevealed, setIsRevealed] = useState(typeof window === `undefined`);
  const [delay, setDelay] = useState(0);

  const ref = (element) => {

        if (isRevealed || element === null) return;
        
        let windowHeight = window.innerHeight;
        let elementTop = element.getBoundingClientRect().top;

        // set delay
        const d = elementTop / windowHeight;
        setDelay(d > 1 ? .2 : d < 0 ? 0 : d);

        const cleanUp = () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
        }

        const check = () => {
            if (elementTop < windowHeight) {
                setIsRevealed(true);
                cleanUp();
            }
        }

        const onScroll = () => {
            elementTop = element.getBoundingClientRect().top;
            check();
        }

        const onResize = () => {
            windowHeight = window.innerHeight;
            onScroll();
        }

        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', onResize);
        check();

        return cleanUp;
  }

  return ({ref, isRevealed, delay});
}

module.exports = useReveal;