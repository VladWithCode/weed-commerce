import { useEffect, useRef } from 'react';

/**
 * Hook found at:
 * https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 * @param {Function} cb - The function to be executed
 * @param {number} delay - Delay on ms
 */
export const useInterval = (cb, delay) => {
  const savedCb = useRef();

  // Remember the latest callback
  useEffect(() => {
    savedCb.current = cb;
  }, [cb]);

  // Set up the interval
  useEffect(() => {
    function tick() {
      savedCb.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
