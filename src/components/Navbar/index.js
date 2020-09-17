import React from 'react';

import * as S from './styles';

function Navbar() {
  return (
    <S.Nav>
     <S.NavbarContainer>
       <S.NavLogo>
         <S.NavIcon />
         ULTRA
       </S.NavLogo>
     </S.NavbarContainer>
    </S.Nav>
  )
}

export default Navbar;