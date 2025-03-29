import React from "react";
// import { projects } from "../portfolio";
import { Container, Row } from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";
import Fade from "react-reveal/Fade";
type ProjectType = {
    name: string;
    desc: string;
    github?: string;
    link?: string;
  };

const personalprojects: ProjectType[] = [
    {
        name: "Path Finding Visualizer",
        desc: "HTML CSS ReactJS Javascript",
        link: "https://abedelrazzak.github.io/path-finding-visualizer/",
      },
      {
        name: "Sorting Visualizer",
        desc: "HTML CSS ReactJS Javascript",
        link: "https://abedelrazzak.github.io/sorting-visualizer/",
      },
      {
        name: "ElonDrifts Car Game",
        desc: "ReactJS CSS ThreeJS Blender",
        link: "https://abedelrazzak.github.io/ElonDrifts/",
      },
      {
        name: "PID Controlled Dino Game",
        desc: "NodeJS JS HTML CSS",
        link: "https://abedelrazzak.github.io/PID-Controlled-Dino-Game/",
      },
      {
        name: "YouTube video word finder",
        desc: "ReactJS TailwindCSS Python",
        link: "https://abedelrazzak.github.io/wordvid/",
      },
]

const PersonalProjects = () => {
  return (
    personalprojects && (
      // <Fade bottom duration={500}>
        <section className="section section-lg">
          <Container>
            <div className="d-flex p-4">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                  <i className="ni ni-laptop text-info" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-info">Personal Projects</h4>
              </div>
            </div>
            <Row className="row-grid align-items-center">
              {personalprojects.map((data, i) => {
                return <ProjectsCard key={i} {...data} />;
              })}
            </Row>
          </Container>
        </section>
      // </Fade>
    )
  );
};

export default PersonalProjects;
