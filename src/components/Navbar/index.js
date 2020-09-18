import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import * as S from './styles';

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);
  return (
    <IconContext.Provider value={{color: '#FFF'}}>
      <S.Nav>
      <S.NavbarContainer>
        <S.NavLogo>
          <S.NavIcon />
          ULTRA
        </S.NavLogo>
        <S.MobileIcon onClick={handleClick}>
          {clicked ? <FaTimes /> : <FaBars />}
        </S.MobileIcon>
        <S.NavMenu onClick={handleClick} clicked={clicked}>
          <S.NavItem>
            <S.NavLinks to="/">Home</S.NavLinks>
          </S.NavItem>
          <S.NavItem>
            <S.NavLinks to="/services">Services</S.NavLinks>
          </S.NavItem>
          <S.NavItem>
            <S.NavLinks to="/products">Products</S.NavLinks>
          </S.NavItem>
        </S.NavMenu>
      </S.NavbarContainer>
      </S.Nav>
    </IconContext.Provider>
  )
}

export default Navbar;