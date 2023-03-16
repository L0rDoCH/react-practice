import React from 'react';
import styled from "styled-components";

const Project = ({title, img}) => {
  return (
    <ProjectItem className="project">
      <a href="./project-page.html">
        <ProjectImg src={img} alt={title} className="project__img"/>
        <ProjectTitle className="project__title">{title}</ProjectTitle>
      </a>
    </ProjectItem>
  );
};

export default Project;

const ProjectItem = styled.li`
  max-width: 370px;
  background-color: var(--project-card-bg);
  box-shadow: var(--box-shadow);
  border-radius: 10px;
`;

const ProjectImg = styled.img`
  border-radius: 10px;
`;

const ProjectTitle = styled.h2`
  padding: 15px 20px 25px;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.3;
  color: var(--project-card-text);

  @media (max-width: 620px) {
    font-size: 22px;
  }
`;

