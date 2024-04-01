import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Purushotam Sharma </span>
            from <span className="purple"> Surat, Gujarat, India</span>
            <br />
            I am currently employed as a DevOps Engineer  at CredenceTech.
            <br />
            I am Purusing my MCA
            <br />
            <br />
            Apart from Deploying, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The way to get started is to quit talking and begin doing."{" "}
          </p>
          <footer className="blockquote-footer">Walt Disney</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
