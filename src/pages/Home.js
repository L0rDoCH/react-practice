import React from 'react';
import Header from "../components/Header";
import {Container, Section, Title2, ContentList, ContentListItem} from "../styles/Styles";

const Home = () => {
  return (
    <>
      <Header/>
      <Section className="section">
        <Container className="container">

          <ContentList className="content-list">
            <ContentListItem className="content-list__item">
              <Title2 className="title-2">Frontend</Title2>
              <p>JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</p>
            </ContentListItem>
            <ContentListItem className="content-list__item">
              <Title2 className="title-2">Backend</Title2>
              <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
            </ContentListItem>
          </ContentList>

        </Container>
      </Section>
    </>
  );
};

export default Home;
