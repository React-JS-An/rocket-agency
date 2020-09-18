import React from 'react';

import { 
  homeOjectOne, 
  homeOjectTwo, 
  homeOjectThree, 
  homeOjectFour 
} from './data';
import { Hero, Price } from '../../components';

function Home() {
  return (
    <>
      <Hero {...homeOjectOne} />
      <Hero {...homeOjectTwo} />
      <Hero {...homeOjectThree} />
      <Price />
      <Hero {...homeOjectFour} />
    </>
  )
}

export default Home;
