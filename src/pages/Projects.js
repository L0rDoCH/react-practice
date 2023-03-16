import React from 'react';
import {Container, Section, Title1} from "../styles/Styles";
import styled from "styled-components";
import Project from "../components/Project";
import {projectsList} from "../data/projectsList";

const Projects = () => {
  return (
    <Section className="section">
      <Container className="container">
        <Title1 className="title-1">Projects</Title1>
        <ProjectsList className="projects">
          {projectsList.map((project) => {
            return <Project key={project.id} title={project.title} img={project.img} />
          })}
        </ProjectsList>
      </Container>
    </Section>
  );
};

export default Projects;

const ProjectsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 30px;
`;
