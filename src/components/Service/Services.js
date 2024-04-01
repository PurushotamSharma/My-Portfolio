import React from "react";
import { SiAmazonaws, SiUpwork } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { BsFileEarmarkText } from "react-icons/bs";
import { AiOutlineApi } from "react-icons/ai";
import { RiCloudFill } from "react-icons/ri";
import { GrServices } from "react-icons/gr";

import "./serviceblock.css";

const awsServices = [
  { title: "EC2", description: "Elastic Compute Cloud", icon: <SiAmazonaws /> },
  { title: "S3", description: "Simple Storage Service", icon: <SiAmazonaws /> },
  { title: "CI/CD", description: "Continuous Integration / Continuous Deployment", icon: <SiAmazonaws /> },
  { title: "CodeDeploy", description: "Automates code deployments to any instance, including EC2 instances and instances running on-premises", icon: <SiAmazonaws /> },
  { title: "CloudWatch", description: "Monitor and manage your AWS infrastructure", icon: <SiAmazonaws /> }
];

function ServiceBlock() {
  return (
    <div className="service-block">
      {awsServices.map((service, index) => (
        <div key={index} className="service-card">
          <div className="service-card-image">{service.icon}</div>
          <div>
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-description">{service.description}</p>
          </div>
        </div>
      ))}
      <div className="service-card">
        <FaDatabase className="service-card-image" />
        <h3 className="service-card-title">Database Management</h3>
        <p className="service-card-description">Manage and organize data efficiently</p>
      </div>

      <div className="service-card">
        <GiNetworkBars className="service-card-image" />
        <h3 className="service-card-title">Networking</h3>
        <p className="service-card-description">Network setup and configuration</p>
      </div>

      <div className="service-card">
        <BsFileEarmarkText className="service-card-image" />
        <h3 className="service-card-title">File Storage</h3>
        <p className="service-card-description">Store and manage files securely</p>
      </div>

      <div className="service-card">
        <AiOutlineApi className="service-card-image" />
        <h3 className="service-card-title">API Management</h3>
        <p className="service-card-description">Manage APIs for data exchange</p>
      </div>

      <div className="service-card">
        <RiCloudFill className="service-card-image" />
        <h3 className="service-card-title">Cloud Hosting</h3>
        <p className="service-card-description">Host applications and websites on cloud servers</p>
      </div>

      <div className="service-card">
        <GrServices className="service-card-image" />
        <h3 className="service-card-title">Other Services</h3>
        <p className="service-card-description">Additional services as per requirements</p>
      </div>
      
      <div className="service-card">
        <SiUpwork className="service-card-image" />
        <h3 className="service-card-title">Upwork Freelancing</h3>
        <p className="service-card-description">Find my freelancing services on Upwork</p>
      </div>
    </div>
  );
}

export default ServiceBlock;
