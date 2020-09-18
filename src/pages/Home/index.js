import React from 'react';

import { 
  homeOjectOne, 
  homeOjectTwo, 
  homeOjectThree, 
  homeOjectFour 
} from './data';
import Hero from '../../components/Hero';

function Home() {
  return (
    <>
      <Hero {...homeOjectOne} />
      <Hero {...homeOjectTwo} />
      <Hero {...homeOjectThree} />
      <Hero {...homeOjectFour} />
    </>
  )
}

export default Home;
