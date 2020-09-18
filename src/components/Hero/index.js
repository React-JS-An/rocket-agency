import React from 'react';

import * as S from './styles';

function Hero({ lightBg }) {
  return (
    <S.Hero lightBg={lightBg}>
      <h1>Hello!</h1>
    </S.Hero>
  )
}

export default Hero;