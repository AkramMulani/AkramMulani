import React from 'react';
import './About.css';

function About() {
  return (
    <div className="container py-5 about-page">
      <div className='animate__animated animate__fadeIn'>
        <h2 className="text-center mb-4">About Me</h2>
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <p className="lead">
              I'm <strong>Akram Mulani</strong>, a passionate <strong>Full Stack Developer</strong> with hands-on experience in building scalable, performant, and user-centric web applications.
            </p>
            <p>
              I have worked across the full software development lifecycle — from designing beautiful and responsive front-end interfaces using <strong>React.js / HTML / CSS</strong>, to building powerful back-end systems using <strong>Node.js, Express, Java</strong>, and managing data with <strong>MongoDB, MySQL</strong>.
            </p>
            <p>
              I’ve developed both <strong>monolithic applications</strong> and modular <strong>microservices</strong> architectures, often exposing or consuming <strong>REST APIs</strong> to build distributed systems.
            </p>
            <p>
              I'm constantly learning and enjoy taking on new challenges that push me to grow technically and creatively.
            </p>
            <p>
              When I'm not coding, you might find me exploring new tech trends, contributing to side projects, or sharing knowledge with others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
