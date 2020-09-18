import styled from 'styled-components';

export const Hero = styled.main`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg}) => (lightBg ? '#fff' : '#101522')};
`;

export const HeroInfo = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 -.9rem -.9rem -.9rem;
  flex-direction: ${({imgStart}) =>(imgStart ? 'row-reverse' : 'row')};
`;

export const HeroColumn = styled.div`
  margin-bottom: .9rem;
  padding-left: .9rem;
  padding-right: .9rem;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;



export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 6rem;

  @media (max-width: 768px) {
    padding-bottom: 6.5rem;
  }
`;

export const TopLine = styled.div`
  color: ${({lightTopLine}) => (lightTopLine ? '#a9b3c1' : '#4b59F7')};
  font-size: 1.125rem;
  line-height: 1rem;
  letter-spacing: 1.4px;
  margin-bottom: 1rem;
`;

export const Heading = styled.h1`
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#1c2237')};
  margin-bottom: 1.5rem;
  font-family: 3rem;
  line-height: 1.1;
`;

export const Subtitle = styled.p`
  color: ${({lightTextDesc}) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
  max-width: 440px;
  margin-bottom: 2.1875rem;
  font-family: 1.125rem;
  line-height: 1.5rem;
`;