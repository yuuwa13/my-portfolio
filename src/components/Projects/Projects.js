import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import umsdc from "../../Assets/Projects/umsdc.png"
import h2whoa from "../../Assets/Projects/h2whoa.png"
import spotfindr from "../../Assets/Projects/spotfindr.png"
import opaw from "../../Assets/Projects/opaw.png"
import technowiz from "../../Assets/Projects/technowiz.png"

function Projects() {
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
              imgPath={umsdc}
              isBlog={false}
              title="UMSDC"
              description="Organization Management System built with React.js, Tailwind CSS, Node.js, and Express.js for UMSDC. It streamlines the member registration process and maintains a clean, centralized database for efficient member management. Designed to simplify onboarding and enhance internal organization workflows."
              ghLink="https://github.com/umsdc/compass-backend"
              demoLink="https://umsdc.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={h2whoa}
              isBlog={false}
              title="H2Whoa"
              description="H2Whoa is a water delivery management system built with Laravel and Bootstrap to streamline orders and operations. It features Google Maps API integration to map user addresses and automatically calculate delivery fees based on location, improving efficiency for both customers and station staff."
              ghLink="https://github.com/yuuwa13/h2whoa"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotfindr}
              isBlog={false}
              title="SpotFindr"
              description="SpotFindr is a mobile app built with Flutter, Firebase, and Supabase that lets users share and discover local spots through image-based posts. It features user authentication, real-time likes, comments, and a smooth social feed for travel and location-based sharing."
              ghLink="http://github.com/yuuwa13/SpotFindr"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={opaw}
              isBlog={false}
              title="Oh! Paw"
              description="Oh! Paw is a pet rehoming website developed using vanilla PHP, HTML, CSS, and JavaScript. It allows pet owners to list their pets for adoption with photos and details. Adopters can browse available pets and connect with owners to find their perfect match."
              ghLink="https://github.com/imtoffe/Opaw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={technowiz}
              isBlog={false}
              title="TechnoWiz"
              description="TechnoWiz is a robust inventory and point-of-sale (POS) system built using vanilla PHP, HTML, and CSS. It features product management, real-time stock tracking, transaction logging, and receipt generation. Designed for small to medium businesses, the system streamlines sales and inventory operations in a simple web-based interface."
              ghLink="https://github.com/yuuwa13/TechnoWiz"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
