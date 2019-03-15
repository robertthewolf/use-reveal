var {useState} = require('react');

module.exports = function useReveal() {

  var [isRevealed, setIsRevealed] = useState(typeof window === `undefined`);
  var [delay, setDelay] = useState(0);

  var ref = (element) => {

        if (isRevealed || element === null) return;
        
        var windowHeight = window.innerHeight;
        var elementTop = element.getBoundingClientRect().top;

        // set delay
        var d = elementTop / windowHeight;
        setDelay(d > 1 ? .2 : d < 0 ? 0 : d);

        var cleanUp = () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
        }

        var check = () => {
            if (elementTop < windowHeight) {
                setIsRevealed(true);
                cleanUp();
            }
        }

        var onScroll = () => {
            elementTop = element.getBoundingClientRect().top;
            check();
        }

        var onResize = () => {
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