import React from 'react';

function GridSection() {
  return (
    <section>
      <div className="grid">
        <div className="grid-item">
          <h3>Experience</h3>
          <p>Over 16 years of experience developing solutions for mobile and web platforms, working on various projects across industries.</p>
          <a href="#">Read More</a>
        </div>
        <div className="grid-item">
          <h3>Skills</h3>
          <p>Expertise in mobile development (iOS, Android, React Native), cloud infrastructure (AWS, Kubernetes), and CI/CD pipelines.</p>
          <a href="#">Read More</a>
        </div>
        <div className="grid-item">
          <h3>Portfolio</h3>
          <p>Check out some of the projects I've worked on, including mobile applications, web services, and cloud-based solutions.</p>
          <a href="#">View Portfolio</a>
        </div>
      </div>
    </section>
  );
}

export default GridSection;
