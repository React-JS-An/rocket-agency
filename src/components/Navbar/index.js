import React, { useState, useEffect } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import * as S from './styles';
import { Button } from '../../globalStyles';

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [button, setButton] = useState(true);
  
  const handleClick = () => setClicked(!clicked);
  const handleCloseMenu = () => setClicked(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    setButton();
  }, []);

  window.addEventListener('resize', showButton);
  
  
  return (
    <IconContext.Provider value={{color: '#FFF'}}>
      <S.Nav>
      <S.NavbarContainer>
        <S.NavLogo to="/" onClick={handleCloseMenu}>
          <S.NavIcon />
          Rocket
        </S.NavLogo>
        <S.MobileIcon onClick={handleClick}>
          {clicked ? <FaTimes /> : <FaBars />}
        </S.MobileIcon>
        <S.NavMenu onClick={handleClick} clicked={clicked}>
          <S.NavItem>
            <S.NavLinks to="/">Home</S.NavLinks>
          </S.NavItem>
          <S.NavItem>
            <S.NavLinks to="/services">Serviços</S.NavLinks>
          </S.NavItem>
          <S.NavItem>
            <S.NavLinks to="/products">Produtos</S.NavLinks>
          </S.NavItem>
          <S.NavItemBtn>
            {button ? (
              <S.NavBtnLink to="/sign-up">
                <Button primary>Registrar</Button>
              </S.NavBtnLink>
              ) : (
              <S.NavBtnLink to="/sign-up">
                <Button fontBig primary>
                Registrar
              </Button>
            </S.NavBtnLink>
          )}
          </S.NavItemBtn>
        </S.NavMenu>
      </S.NavbarContainer>
      </S.Nav>
    </IconContext.Provider>
  )
}

export default Navbar;