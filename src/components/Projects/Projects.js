import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Portfolio from "../../Assets/Projects/portfolio.png";

import Vtytrucking from "../../Assets/Projects/vtytrucking.png";
import ReactGA from "react-ga";
import Fcitv from "../../Assets/Projects/fcitv.png";

function Projects() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Fcitv}
              isBlog={false}
              title="fcitv"
              description="fcitv.co.za is a church website I developed and hosted, offering features like live streaming, a comprehensive video archive for sermons, and geo-location integration. The site provides an interactive and user-friendly platform for congregants to watch live services, access past sermons, and find church locations, enhancing their spiritual connection and engagement. "
              link="https://fcitv.co.za"
              liveLink="https://fcitv.co.za"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Vtytrucking}
              isBlog={false}
              title="Vutomy Trucking"
              description="Vutomy Trucking is a YouTube content creator's site I developed using HTML, CSS, and JavaScript, with Netlify CMS for effective content management. The site provides an engaging platform to showcase videos and blog posts, offering a responsive and user-friendly experience for visitors to explore and stay updated with the latest trucking-related content and updates."
              link="https://vutomytrucking,netlify.app"
              liveLink="https://vutomytrucking,netlify.app"
              />
              </Col>
    
              <Col md={4} className="project-card">
                <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="portfolio Site"
              description="My first portfolio site highlights my development skills, built using HTML, CSS, ReactJS, and Redux. It features detailed project descriptions and live links, offering a comprehensive view of my work. The site is fully responsive and user-friendly, providing an engaging platform for potential clients and employers to explore my projects and skills."
              link="https://mulweli-portfolio-web.netlify.app/"
              liveLink="https://mulweli-portfolio-web.netlify.app/"
              />
              </Col>
            </Row>
          </Container>
        </Container>
      );
    }


export default Projects;
