import React from 'react';
import styled from "styled-components";
import {Container} from "../styles/Styles";
import vk from "../img/icons/vk.svg";
import instagram from "../img/icons/instagram.svg";
import twitter from "../img/icons/twitter.svg";
import gitHub from "../img/icons/gitHub.svg";
import linkedIn from "../img/icons/linkedIn.svg";

const Footer = () => {
  return (
    <StyledFooter className="footer">
      <Container className="container">
        <FooterWrapper className="footer__wrapper">
          <Social className="social">
            <SocialItem className="social__item"><a href="#!"><img src={vk} alt="Link"/></a></SocialItem>
            <SocialItem className="social__item"><a href="#!"><img src={instagram} alt="Link"/></a></SocialItem>
            <SocialItem className="social__item"><a href="#!"><img src={twitter} alt="Link"/></a></SocialItem>
            <SocialItem className="social__item"><a href="#!"><img src={gitHub} alt="Link"/></a></SocialItem>
            <SocialItem className="social__item"><a href="#!"><img src={linkedIn} alt="Link"/></a></SocialItem>
          </Social>
          <Copyright className="copyright">
            <p>© 2022 frontend-dev.com</p>
          </Copyright>
        </FooterWrapper>
      </Container>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  margin-top: auto;
  padding: 60px 0 50px;
  background-color: var(--footer-bg);
  color: var(--footer-text);

  @media (max-width: 620px) {
    padding: 40px 0 30px;
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 27px;

  @media (max-width: 620px) {
    row-gap: 20px;
  }
`;

const Social = styled.ul`
  display: flex;
  column-gap: 30px;
  align-items: center;

  @media (max-width: 620px) {
    column-gap: 20px;
  }
`;

const SocialItem = styled.li`
  @media (max-width: 620px) {
    width: 28px;
  }

`;

const Copyright = styled.div`
  font-size: 16px;

  p:not(:first-child) {
    margin-top: 0.5em;
  }
`;
