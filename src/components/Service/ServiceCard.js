import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Continuous Integration (CI)',
    description: 'Implementing CI pipelines using tools like Jenkins, GitLab CI, or GitHub Actions to automate the build and testing process.',
  },
  {
    title: 'Continuous Deployment (CD)',
    description: 'Setting up CD pipelines to automate the deployment of applications to production environments using tools like Kubernetes, Docker, or AWS ECS.',
  },
  // Add more service objects as needed
];

const ServiceList = () => {
  return (
    <div className="service-list">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default ServiceList;
