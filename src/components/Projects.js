import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import homeDesignCRM from "../assets/img/homedesign.png";
import cabinetAll from "../assets/img/cabinetall-CRM.png";
import shopCabinetAll from "../assets/img/shoppify-CA.png";
import nailSalonCRM from "../assets/img/nailsalon-CRM.png";
import wordJenko from "../assets/img/wordpress-jenko.png";
import projImg1 from "../assets/img/belief.png";
import projImg2 from "../assets/img/burger-app.png";
import projImg3 from "../assets/img/dice.png";
import projImg4 from "../assets/img/finance.png";
import projImg5 from "../assets/img/small tasks.png";
import projImg6 from "../assets/img/syntech-cloud.png";
import projImg7 from "../assets/img/TAB2 pro1.png";
import projImg8 from "../assets/img/QA UI.png";
import projImg9 from "../assets/img/QA API.png";
import projImg10 from "../assets/img/robots.png";
import projImg11 from "../assets/img/Emerson APP.png";
import projImg12 from "../assets/img/UHO.png";
import projImg13 from "../assets/img/math4jem.png";
import projImg14 from "../assets/img/Flash-card.png";
import projImg15 from "../assets/img/mike.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projectsTab1 = [
    {
      description: "Home Design INC CRM project",
      imgUrl: homeDesignCRM,
      viewLink: "https://system.homedesigndc.com/",
    },
    {
      description: "CabinetAll LLC WordPress site",
      imgUrl: cabinetAll,
      viewLink: "https://www.cabinetall.com/",
    },
    {
      description: "CabinetAll Shopify store integrate with CabinetAll's CRM",
      imgUrl: shopCabinetAll,
      viewLink: "https://www.cabinetall.com/cabinets.html",
    },
    {
      description: "SynTech.cloud LLC Small Business CRM services",
      imgUrl: projImg6,
      viewLink: "https://syntech.cloud/",
    },
    {
      description: "Jenko MGL LLC WordPress",
      imgUrl: wordJenko,
      viewLink: "https://free85837.wordpress.com/",
    },
    {
      description: "A Client Nail salon's CRM project",
      imgUrl: nailSalonCRM,
      viewLink: "https://syntech.cloud/our-services",
    },
    {
      description: "Irlee.info post ads",
      imgUrl: projImg7,
      viewLink: "https://irlee.info/",
    },
    {
      description: "A Church website project React, Google RTDB and Auth, Netlify",
      imgUrl: projImg1,
      viewLink: "https://washingtonmongolchurch.netlify.app/",
    },
    {
      description: "Your sample project will be post here ...",
      imgUrl: projImg15,
      viewLink: "#",
    },
  ];
  const projectsTab2 = [
    {
      description: "Math tutorial internal app MERN, GCP",
      imgUrl: projImg13,
      viewLink: "https://iridescent-zuccutto-f1c5a6.netlify.app/",
    },
    {
      description: "University of Houston College of Optometry Task",
      imgUrl: projImg12,
      viewLink: "https://relaxed-frangipane-fbb37d.netlify.app/",
    },
    {
      description: "React mastering dummy project",
      imgUrl: projImg2,
      viewLink: "https://test-3d6a9.firebaseapp.com",
    },
    {
      description: "Vanilla JavaSript 'Dice roll' task project",
      imgUrl: projImg3,
      viewLink: "https://dorjoo911.github.io/diceGame/",
    },
    {
      description: "ECMA script 'Finance management' dummy project",
      imgUrl: projImg4,
      viewLink: "https://dorjoo911.github.io/familyBudgetCalculator/",
    },
    {
      description: "Emerson Sensi weather API task",
      imgUrl: projImg11,
      viewLink: "https://emerson-current-weather-by-city-zip-coord.s3.amazonaws.com/index.html",
    },
  ];
  const projectsTab3 = [
    {
      description: "Learning Web dev fundamentals",
      imgUrl: projImg5,
      viewLink: "https://dorjoo911.github.io/webDevCS315/",
    },
    {
      description: "React Basic development",
      imgUrl: projImg10,
      viewLink: "https://codesandbox.io/s/github/dorjoo911/searchRobots",
    },
    {
      description: "Math Flash cards task",
      imgUrl: projImg14,
      viewLink: "https://effervescent-pastelito-bd717d.netlify.app/",
    },
    
{
      description: "QA automation, Selemium Java Test framework for UI",
      imgUrl: projImg8,
      viewLink: "https://www.youtube.com/watch?v=4CrEnwZJ6vA&t=2s",
    },
    {
      description: "QA automation, Rest API test framework TestNG",
      imgUrl: projImg9,
      viewLink: "https://www.youtube.com/watch?v=JW_t9Xf0L6A",
    },
    {
      description: "Your sample project will post here ...",
      imgUrl: projImg15,
      viewLink: "#",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p style={{color: "skyblue", textShadow: "1px 1px 1px blue"}}>
                    I'm excited to showcase some of my ongoing web projects,
                    course assignments, and sample developments to the public.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tasks</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Fun</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectsTab1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectsTab2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                viewLink={project.viewLink}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projectsTab3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                viewLink={project.viewLink}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="imgag"
      ></img>
    </section>
  );
};
