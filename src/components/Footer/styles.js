import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaMagento } from 'react-icons/fa';

export const Footer = styled.footer`
  background: #101522;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  color: #fff;
`;

export const FooterHeading = styled.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

export const FooterSubText = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 0.625rem 1.25rem;
  border-radius: 2px;
  margin-right: 0.625rem;
  outline: none;
  border: none;
  font-size: 1rem;
  border: 1px solid #fff;

  &::placeholder {
    color: #242424;
  }

  @media (max-width: 820px) {
    width: 100%;
    margin: 0 0 1rem 0;
  }
`;

export const FooterContainer = styled.section`
  width: 100%;
  max-width: 1000px;

  display: flex;
  justify-content: center;

  @media (max-width: 820px) {
    padding-top: 2rem;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinksItems = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 1rem;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media (max-width: 420px) {
    margin: 0;
    padding: 0.625rem;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 1rem;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media (max-width: 420px) {
    margin: 0;
    padding: 0.625rem;
    width: 100%;
  }
  `;

  export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;

    &:hover {
      color: #0467fb;
      transition: 0.3s ease-in-out;
    }
  `;

  export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
  `;

  export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 2.5rem auto 0 auto;

    @media (max-width: 820px) {
      flex-direction: column;
    } 
  `;

  export const SocialLogo = styled(Link)`
    display: flex;
    align-items: center;
    justify-self: start;

    color: #fff;
    text-decoration: none;
    font-size: 2rem;
    margin-bottom: 1rem;
    cursor: pointer; 
  `;

  export const SocialIcon = styled(FaMagento)`
  color: #fff;
    margin-bottom: 0.625rem;
  `;

  export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 1rem;
  `;

  export const SocialIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 240px;
  `;

  export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 1.5rem;
  `;