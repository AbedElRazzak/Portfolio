import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";
import { skillsSection } from "../portfolio";
import emoji from "react-easy-emoji";


const Skills = () => {

  const skills2 = [
    emoji("⚡ Full Stack Development using ReactJS and TailwindCSS"),
    emoji("⚡ Restful APIs development using PHP and Python"),
    emoji("⚡ Wordpress Development"),
  ]

  const softwareSkills2 = [
    {
      skillName: "Python",
      iconifyTag: "logos:python",
    },
    {
      skillName: "Django",
      iconifyTag: "vscode-icons:file-type-django",
    },
    {
      skillName: "JS",
      iconifyTag: "logos:javascript",
    },
    {
      skillName: "ReactJS",
      iconifyTag: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "NextJS",
      iconifyTag: "vscode-icons:file-type-light-next",
    },
    {
      skillName: "AWS",
      iconifyTag: "logos:aws",
    },
    {
      skillName: "Heroku",
      iconifyTag: "logos:heroku-icon",
    },
    {
      skillName: "Github",
      iconifyTag: "akar-icons:github-fill",
    },
    {
      skillName: "Docker",
      iconifyTag: "logos:docker-icon",
    },
  ]


  return (
    skillsSection && (
      <Fade bottom duration={500}>
        <Container className="text-center my-5 section section-lg">
          <h1 className="h1">{skillsSection.title}</h1>
          <p className="lead">{skillsSection.subTitle}</p>
          {skillsSection.data.map((section, index) => {
            return (
            <>
            <Row className="my-8" key={index}>
                <Col lg="6" className="order-2 order-lg-1">
                  <DisplayLottie animationPath={section.lottieAnimationFile} />
                </Col>
                <Col lg="6" className="order-1 order-lg-2">
                  <h3 className="h3 mb-2">{section.title}</h3>
                  <div className="d-flex justify-content-center flex-wrap mb-2">
                    {section.softwareSkills.map((skill, i) => {
                      return (
                        <Fragment key={i}>
                          <div
                            className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
                            id={skill.skillName.replace(/\s/g, "")}
                          >
                            {/* <Icon icon={skill.iconifyTag} data-inline="false"></Icon> */}
                            <img className="w-[50px]" src={`/img/icons/common/${skill.iconifyTag}.png`} style={{"width": "50px"}} />
                          </div>
                          <UncontrolledTooltip delay={0} placement="bottom" target={skill.skillName.replace(/\s/g, "")}>
                            {skill.skillName}
                          </UncontrolledTooltip>
                        </Fragment>
                      );
                    })}
                  </div>
                  <div>
                    {section.skills.map((skill, i) => {
                      return <p key={i}>{skill}</p>;
                    })}
                  </div>
                </Col>
              </Row>

              <Row className="my-8" key={index}>
                <Col lg="6" className="order-1 order-lg-1">
                  <h3 className="h3 mb-2">{"Software Development"}</h3>
                  <div className="d-flex justify-content-center flex-wrap mb-2">
                    {softwareSkills2.map((skill, i) => {
                      return (
                        <Fragment key={i}>
                          <div
                            className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
                            id={skill.skillName.replace(/\s/g, "")}
                          >
                            <Icon icon={skill.iconifyTag} data-inline="false"></Icon>
                          </div>
                          <UncontrolledTooltip delay={1} placement="bottom" target={skill.skillName.replace(/\s/g, "")}>
                            {skill.skillName}
                          </UncontrolledTooltip>
                        </Fragment>
                      );
                    })}
                  </div>
                  <div>
                    {skills2.map((skill, i) => {
                      return <p key={i}>{skill}</p>;
                    })}
                  </div>
                </Col>
                <Col lg="6" className="order-2 order-lg-2">
                  <DisplayLottie animationPath={"/lottie/skills/fullstack.json"} />
                </Col>
              </Row>
            </>
            );
          })}
        </Container>
      </Fade>
    )
  );
};

export default Skills;
