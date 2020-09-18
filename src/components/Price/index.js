import React from 'react';
import { GiCrystalBars } from 'react-icons/gi';
import { GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';

import * as G from '../../globalStyles';
import * as S from './styles';

function Price() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <S.PricingSection>
        <S.PricingWrapper>
          <S.PricingHeading>Nossos Serviços</S.PricingHeading>
          <S.PricingContainer>
            <S.PricingCard to='/sign-up'>
              <S.PricingCardInfo>
                <S.PricingCardIcon>
                  <GiRock />
                </S.PricingCardIcon>
                <S.PricingCardPlan>Pacote Prata</S.PricingCardPlan>
                <S.PricingCardCost>100 AOA</S.PricingCardCost>
                <S.PricingCardLength>por mês</S.PricingCardLength>
                <S.PricingCardFeatures>
                  <S.PricingCardFeature>100 Estudantes</S.PricingCardFeature>
                  <S.PricingCardFeature>100 AOA</S.PricingCardFeature>
                  <S.PricingCardFeature>Tudo de bom</S.PricingCardFeature>
                </S.PricingCardFeatures>
                <G.Button primary>Escolha um Plano</G.Button>
              </S.PricingCardInfo>
            </S.PricingCard>
            <S.PricingCard to='/sign-up'>
              <S.PricingCardInfo>
                <S.PricingCardIcon>
                  <GiCrystalBars />
                </S.PricingCardIcon>
                <S.PricingCardPlan>Pacote Ouro</S.PricingCardPlan>
                <S.PricingCardCost>200 AOA</S.PricingCardCost>
                <S.PricingCardLength>por mês</S.PricingCardLength>
                <S.PricingCardFeatures>
                  <S.PricingCardFeature>1000 Estudantes</S.PricingCardFeature>
                  <S.PricingCardFeature>200 AOA</S.PricingCardFeature>
                  <S.PricingCardFeature>Nerdologia</S.PricingCardFeature>
                </S.PricingCardFeatures>
                <G.Button primary>Escolha um Plano</G.Button>
              </S.PricingCardInfo>
            </S.PricingCard>
            <S.PricingCard to='/sign-up'>
              <S.PricingCardInfo>
                <S.PricingCardIcon>
                  <GiRock />
                </S.PricingCardIcon>
                <S.PricingCardPlan>Pacote Diamante</S.PricingCardPlan>
                <S.PricingCardCost>900 AOA</S.PricingCardCost>
                <S.PricingCardLength>pOr mês</S.PricingCardLength>
                <S.PricingCardFeatures>
                  <S.PricingCardFeature>Inlimitado</S.PricingCardFeature>
                </S.PricingCardFeatures>
                <G.Button primary>Escolha um Plano</G.Button>
              </S.PricingCardInfo>
            </S.PricingCard>
          </S.PricingContainer>
        </S.PricingWrapper>
      </S.PricingSection>
    </IconContext.Provider>
  );
}
export default Price;
