import React from 'react';

import { homeOjectOne } from './data';
import Hero from '../../components/Hero';

function Home() {
  return (
    <>
      <Hero {...homeOjectOne} />
    </>
  )
}

export default Home;
