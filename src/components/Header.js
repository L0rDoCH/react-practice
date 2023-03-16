import React from 'react';
import styled from "styled-components";
import {BtnLink} from "../styles/Styles";

import bgImage from "../img/header-bg.png"

const Header = () => {
  return (
    <StyledHeader className="header">
      <HeaderWrapper className="header__wrapper">
        <HeaderTitle className="header__title">
          <strong>Привет! Меня зовут <em>Валентин</em></strong><br/>
          a frontend developer
        </HeaderTitle>
        <HeaderText className="header__text">
          <p>with passion for learning and creating.</p>
        </HeaderText>
        <BtnLink href="#!" className="btn">Download CV</BtnLink>
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  padding: 40px 0;
  min-height: 695px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--header-bg);
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center center;

  color: var(--header-text);
  text-align: center;

  @media (max-width: 620px) {
      min-height: unset;
    }

`;

const HeaderWrapper = styled.div`
  padding: 0 15px;
  max-width: 900px;
`;

const HeaderTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.4;

  strong {
    font-size: 60px;
    font-weight: 700;
  }

  em {
    font-style: normal;
    color: var(--accent);
  }
  
  @media (max-width: 620px) {
    font-size: 30px;

    strong {
      font-size: 40px;
    }
  }
`;

const HeaderText = styled.div`
  margin-bottom: 40px;
  font-size: 18px;
  line-height: 1.333;

  p:not(:first-child) {
    margin-top: 0.5em;
  }
`;

