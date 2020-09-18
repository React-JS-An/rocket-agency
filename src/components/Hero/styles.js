import styled from 'styled-components';

export const Hero = styled.section`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg}) => (lightBg ? '#fff' : '#101522')};
`;
