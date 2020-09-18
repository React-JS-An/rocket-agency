import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';
import * as G from '../../globalStyles';

function Hero({
  primary, 
  lightBg, 
  imgStart, 
  lightTopLine, 
  lightText, 
  lightTextDesc,
  topLine,
  headLine,
  description,
  buttonLabel,
  start,
  img,
  alt 
}) {
  return (
    <S.Hero lightBg={lightBg}>
      <G.Container>
        <S.HeroInfo imgStart={imgStart}>
          <S.HeroColumn>
            <S.TextWrapper>
              <S.TopLine lightTopLine={lightTopLine}>{topLine}</S.TopLine>
              <S.Heading lightText={lightText}>{headLine}</S.Heading>
              <S.Subtitle lightTextDesc={lightTextDesc}>
                {description}
              </S.Subtitle>
              <Link to="/sign-up">
                <G.Button big fontBig primary>
                  {buttonLabel}
                </G.Button>
              </Link>
            </S.TextWrapper>
          </S.HeroColumn>
          <S.HeroColumn>
            <S.ImageWrapper start={start}>
              <S.Img src={img} alt={alt} />
            </S.ImageWrapper>
          </S.HeroColumn>
        </S.HeroInfo>
      </G.Container>
    </S.Hero>
  )
}

export default Hero;