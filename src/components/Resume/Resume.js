import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import ReactGA from "react-ga";

function Resume() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <p style={{ color: "white" }}>CV available on request</p>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="ICT Solution Architect [Nashua LTD]"
              date="Aug 2023 - 2024"
              content={[
                "Duties incude design, development, and integration of technology solutions to meet business needs, ensuring alignment with organizational goals and IT infrastructure standards.",
              ]}
            />
            <Resumecontent
              title="Freelance Software Engineer [Mulvara Holdings]"
              date="Aug 2023 - present"
              content={[
                " As a freelance software developer duties included designing, coding, tests, and maintainance of software applications and websites for clients, managing project timelines, and ensuring high-quality deliverables while collaborating with clients to meet their specific needs and objectives.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Ndp in IT Software Development [IIE Rosebank College] "
              date="2020 - 2022"
              content={[
                `CGPA: 8.00/10 `,
                " Completed my National Diploma in IT fron IIE Rosebank College.",
              ]}
            />

            <h3 className="resume-title">Certifications</h3>
            <Resumecontent
              title=""
              content={[
                `AWS Microsoft Azure(Cloud Computing).`,
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <p style={{ color: "white" }}>CV available on request</p>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;