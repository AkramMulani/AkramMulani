import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { Util } from '../Util';

function Home() {
  return (
    <div className="home-container d-flex align-items-center justify-content-center text-center">
      <div className="animate__animated animate__fadeIn">
        <img src={Util.profile} alt="profile" className="rounded-circle img-thumbnail mb-4" width="160" height="160" />

        <h1 className="display-4 fw-bold">Hey, I'm <span className="text-primary">{Util.name}</span></h1>
        <h4 className="mt-3">A Passionate {Util.passion}</h4>
        <p className="lead mt-3">
          I build robust web applications end-to-end — from interactive front-ends to scalable back-end services and efficient database designs.
        </p>
        <p className="lead">
          Experienced in developing monolithic applications as well as microservices-based architectures and RESTful APIs.
        </p>

        <p className="lead mt-3">
          I specialize in creating full-stack solutions using modern frontend frameworks, backend systems, and optimized database structures.
        </p>
        <p className="lead">
          Worked on both monolithic and microservices applications, designing and consuming REST APIs for scalable software systems.
        </p>


        <div className="mt-4">
          <a href={Util.resume} className="btn btn-primary btn-lg me-3" download>Download Resume</a>
          <Link to="/contact" className="btn btn-outline-light btn-lg">Contact Me</Link>
        </div>

        <div className="mt-4">
          <a href={Util.social.github} target="_blank" rel="noreferrer" className="text-white me-3 fs-3">
            <i className="bi bi-github"></i>
          </a>
          <a href={Util.social.linkdin} target="_blank" rel="noreferrer" className="text-white me-3 fs-3">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href={`mailto:${Util.contact.email}`} className="text-white fs-3">
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
