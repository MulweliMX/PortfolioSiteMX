import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Portfolio from "../../Assets/Projects/portfolio.png";

import Vtytrucking from "../../Assets/Projects/vtytrucking.png";
import ReactGA from "react-ga";

// Cloudinary images for new projects
const IPM = "https://res.cloudinary.com/dqsh3hnnt/image/upload/v1790937253/ipm_sl3lnl.png";
const VareonDoc = "https://res.cloudinary.com/dqsh3hnnt/image/upload/v1790937253/vareon_tq1ped.png";
const Numtec = "https://res.cloudinary.com/dqsh3hnnt/image/upload/v1790937253/numtec_p3rr70.png";

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
              imgPath={IPM}
              isBlog={false}
              title="IPM"
              description="Institute of People Management (IPM) website. A professional educational institution platform offering training programs, courses, and membership resources to professionals across South Africa."
              link="https://ipm.co.za"
              liveLink="https://ipm.co.za"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VareonDoc}
              isBlog={false}
              title="Vareon Doc"
              description="Vareon Doc is a document management solution that streamlines business processes, offering secure storage, efficient retrieval, and collaborative tools for organizations to manage their digital assets."
              link="https://vareondoc.co.za"
              liveLink="https://vareondoc.co.za"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Numtec}
              isBlog={false}
              title="Numtec"
              description="Numtec provides innovative technology solutions designed to help businesses optimize their operations through cutting-edge software and hardware integrations."
              link="https://numtec.co.za"
              liveLink="https://numtec.co.za"
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
