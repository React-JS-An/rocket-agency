import React from 'react';
import * as FaIcons from 'react-icons/fa';

import * as G from '../../globalStyles';
import * as S from './styles';

function Footer() {
  return (
    <S.Footer>
      <S.FooterSubscription>
        <S.FooterHeading>
          Junta-se ao nosso club de membros exclusivos para receber as últimas notícias e tendências.
        </S.FooterHeading>
        <S.FooterSubText>
          Você pode subscrever-se a qualquer momento.
        </S.FooterSubText>
        <S.FooterSubText>
          <S.Form>
            <S.FormInput name="email" type="email" placeholder="E-mail" />
              <G.Button fontBig>
                Subscrever-se
              </G.Button>
          </S.Form>
        </S.FooterSubText>
      </S.FooterSubscription>
      <S.FooterContainer>
        <S.FooterLinksWrapper>
          <S.FooterLinksItems>
            <S.FooterLinkTitle>Sobre nós</S.FooterLinkTitle>
            <S.FooterLink to="/sign-up">Como funciona</S.FooterLink>
            <S.FooterLink to="/">Testemunhos</S.FooterLink>
            <S.FooterLink to="/">Carreira</S.FooterLink>
            <S.FooterLink to="/">Investidores</S.FooterLink>
            <S.FooterLink to="/">Termos de Serviço</S.FooterLink>
          </S.FooterLinksItems>
          <S.FooterLinksItems>
            <S.FooterLinkTitle>Contatos</S.FooterLinkTitle>
            <S.FooterLink to="/sign-up">Como funciona</S.FooterLink>
            <S.FooterLink to="/">Testemunhos</S.FooterLink>
            <S.FooterLink to="/">Carreira</S.FooterLink>
            <S.FooterLink to="/">Investidores</S.FooterLink>
            <S.FooterLink to="/">Termos de Serviço</S.FooterLink>
          </S.FooterLinksItems>
          </S.FooterLinksWrapper>
          
          <S.FooterLinksWrapper>
          <S.FooterLinksItems>
            <S.FooterLinkTitle>Produtos</S.FooterLinkTitle>
            <S.FooterLink to="/sign-up">Como funciona</S.FooterLink>
            <S.FooterLink to="/">Testemunhos</S.FooterLink>
            <S.FooterLink to="/">Carreira</S.FooterLink>
            <S.FooterLink to="/">Investidores</S.FooterLink>
            <S.FooterLink to="/">Termos de Serviço</S.FooterLink>
          </S.FooterLinksItems>
          <S.FooterLinksItems>
            <S.FooterLinkTitle>Serviços</S.FooterLinkTitle>
            <S.FooterLink to="/sign-up">Como funciona</S.FooterLink>
            <S.FooterLink to="/">Testemunhos</S.FooterLink>
            <S.FooterLink to="/">Carreira</S.FooterLink>
            <S.FooterLink to="/">Investidores</S.FooterLink>
            <S.FooterLink to="/">Termos de Serviço</S.FooterLink>
          </S.FooterLinksItems>
        </S.FooterLinksWrapper>
      </S.FooterContainer>
      <S.SocialMedia>
        <S.SocialMediaWrap>
          <S.SocialLogo to="/">
            <S.SocialIcon />
            ULTRA
          </S.SocialLogo>
          <S.WebsiteRights>ULTRA &copy; 2020</S.WebsiteRights>
          <S.SocialIcons>
            <S.SocialIconLink href="/" target="_blank" arial-label="Twiter">
              <FaIcons.FaTwitter />
            </S.SocialIconLink>
             <S.SocialIconLink href="/" target="_blank" arial-label="Linkedin">
              <FaIcons.FaLinkedin />
            </S.SocialIconLink>
             <S.SocialIconLink href="/" target="_blank" arial-label="Facebook">
              <FaIcons.FaFacebook />
            </S.SocialIconLink>
          </S.SocialIcons>
        </S.SocialMediaWrap>
      </S.SocialMedia>
    </S.Footer>
  )
}

export default Footer;