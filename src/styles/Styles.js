import styled, {css} from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1200px;
`;

export const Section = styled.main`
  padding: 70px 0;

  @media (max-width: 620px) {
    padding: 40px 0;
  }
`;

export const Title1 = styled.h1`
  margin-bottom: 60px;

  font-size: 60px;
  font-weight: 700;
  line-height: 1.3;
  color: var(--title-1);
  text-align: center;

  @media (max-width: 620px) {
    margin-bottom: 30px;
    font-size: 40px;
  }

`;

export const Title2 = styled.h2`
  margin-bottom: 20px;

  font-size: 40px;
  font-weight: 700;
  line-height: 1.3;

  @media (max-width: 620px) {
    margin-bottom: 10px;
    font-size: 30px;
  }
`;

export const ContentList = styled.ul`
  margin: 0 auto;
  max-width: 570px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
  text-align: center;

  a {
    color: var(--accent);
  }

  @media (max-width: 620px) {
    row-gap: 20px;
  }
`;

export const ContentListItem = styled.li`
  font-size: 18px;
  line-height: 1.5;

  p:not(:last-child) {
    margin-top: 0.5em;
  }

  @media (max-width: 620px) {
    font-size: 16px;
  }
`;



const btn = css`
  display: inline-block;
  height: 48px;
  padding: 12px 28px;

  border-radius: 5px;
  background-color: var(--accent);
  color: var(--white);
  letter-spacing: 0.15px;
  font-size: 16px;
  font-weight: 500;

  transition: opacity 0.2s ease-in;
  
  &:hover {
    opacity: 0.8;
  }
  
  &:active {
    position: relative;
    top: 1px;
  }
`;

export const BtnLink = styled.a`
  ${btn}
`;

export const Btn = styled.button`
  ${btn}
`;

export const DarkModeBtn = styled.button`
  order: 9;

  position: relative;
  display: flex;
  justify-content: space-between;

  width: 51px;
  height: 26px;
  padding: 5px;

  border-radius: 50px;
  background-color: #272727;

  @media (max-width: 620px) {
    order: 0;
  }


  &::before {
    content: '';

    position: absolute;
    top: 1px;
    left: 1px;

    display: block;
    width: 24px;
    height: 24px;

    border-radius: 50%;
    background-color: #fff;

    transition: left 0.2s ease-in;
  }
  
  img {
    position: relative;
    z-index: 9;
  }

  ${props => props.active && css`
    &::before {
      left: 26px;
    }
  `}
`;
