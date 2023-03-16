import React from 'react';
import sun from "../img/icons/sun.svg";
import moon from "../img/icons/moon.svg";
import styled, {css} from "styled-components";
import {Container, DarkModeBtn} from "../styles/Styles";

const Navbar = () => {
  return (
    <StyledNav className="nav">
      <Container className="container">
        <NavRow className="nav-row">
          <Logo href="./index.html" className="logo"><strong>Freelancer</strong> portfolio</Logo>

          <DarkModeBtn className="dark-mode-btn">
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
          </DarkModeBtn>

          <NavList className="nav-list">
            <li className="nav-list__item">
              <NavListLink active href="./index.html" className="nav-list__link nav-list__link--active">Home</NavListLink>
            </li>
            <li className="nav-list__item">
              <NavListLink href="./projects.html" className="nav-list__link">Projects</NavListLink>
            </li>
            <li className="nav-list__item">
              <NavListLink href="./contacts.html" className="nav-list__link">Contacts</NavListLink>
            </li>
          </NavList>
        </NavRow>
      </Container>
    </StyledNav>
  );
};

export default Navbar;

const StyledNav = styled.nav`
  padding: 20px 0;
  background-color: var(--nav-bg);
  border-bottom: 1px solid var(--nav-border);
  color: var(--nav-text);
  letter-spacing: normal;
`;

const NavRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 30px;
  row-gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 620px) {
    justify-content: space-between;
  }
`;

const Logo = styled.a`
  margin-right: auto;
  color: var(--nav-text);
  font-size: 24px;
  font-family: 'Poppins', sans-serif;

  strong {
    font-weight: 700;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  align-items: center;
  column-gap: 40px;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
`;

const NavListLink = styled.a`
  color: var(--nav-text);
  transition: opacity 0.2s ease-in;
  
  &:hover {
    opacity: 0.8;
  }
  
  ${props => props.active && css`
    position: relative;
    
    &::before {
      content: '';

      position: absolute;
      left: 0;
      top: 100%;

      display: block;
      height: 2px;
      width: 100%;
      background-color: var(--accent);
  `}
`;
