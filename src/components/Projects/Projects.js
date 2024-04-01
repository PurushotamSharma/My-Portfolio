import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ShopO from "../../Assets/Projects/ShopO.png";
import port from "../../Assets/Projects/port.png"
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={port}
              isBlog={false}
              title="Portfolio"
              description="My Portfolio is a personal website designed to showcase my skills, experience, and projects to potential employers, clients, and collaborators. It serves as a professional online presence that highlights my expertise, accomplishments, and interests."
              ghLink="https://github.com/PurushotamSharma"
              demoLink="https://purushotamsharma.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Dev Cloud "
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/PurushotamSharma/Hashnode-Blogs"
              demoLink="https://purushotamsharma.hashnode.dev/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ShopO}
              isBlog={false}
              title="ShopO"
              description="ShopO is an Online ecommerece website that is build using the MERN stack, it has the 3 panel, one is Admin, second is Seller and third is Customer, If you want to see the Demo then click on the Demo link."
              ghLink="https://github.com/PurushotamSharma/ShopO"
              demoLink="https://shop0-front-end.vercel.app/"              
            />
          </Col>

       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
