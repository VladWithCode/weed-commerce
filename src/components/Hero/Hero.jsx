import { useState } from 'react';
import { useInterval } from '../../hooks/useInterval';
import Slide from './Slide';

function Hero({ strains }) {
  const [slide, setSlide] = useState(strains[0].id);

  useInterval(() => {
    console.count('change');
    let l = strains.length;
    if (slide + 1 >= l) setSlide(0);
    else setSlide(prev => prev + 1);
  }, 2000);

  return (
    <div className='hero'>
      {strains.map((strain, index) => (
        <Slide
          currentSlide={slide}
          slideId={index}
          strain={strain}
          key={strain.id}
        />
      ))}
    </div>
  );
}

export default Hero;
