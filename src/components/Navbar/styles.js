import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaMagento } from 'react-icons/fa';

import { Container } from '../../globalStyles';

export const Nav = styled.nav`
  background: #101522;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;