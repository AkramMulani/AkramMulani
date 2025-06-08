import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { Util } from '../Util';

function Footer() {
  return (
    <div className='footer-page'>
        <footer className="footer py-4 mt-auto">
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
                <div className="mb-3 mb-md-0">
                <h5 className="text-light mb-1">{Util.name}</h5>
                <p className="rights mb-0">© {new Date().getFullYear()} All rights reserved.</p>
                </div>

                <ul className="nav mb-3 mb-md-0">
                <li className="nav-item"><Link className="nav-link px-2" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link px-2" to="/about">About</Link></li>
                <li className="nav-item"><Link className="nav-link px-2" to="/projects">Projects</Link></li>
                <li className="nav-item"><Link className="nav-link px-2" to="/contact">Contact</Link></li>
                </ul>

                <div className="social-icons">
                {Util.social.github && (
                    <a href={Util.social.github} target="_blank" rel="noreferrer" className="me-3 fs-5">
                    <i className="bi bi-github"></i>
                    </a>
                )}
                {Util.social.linkdin && (
                    <a href={Util.social.linkdin} target="_blank" rel="noreferrer" className="me-3 fs-5">
                    <i className="bi bi-linkedin"></i>
                    </a>
                )}
                {Util.contact.email && (
                    <a href={`mailto:${Util.contact.email}`} className="fs-5">
                    <i className="bi bi-envelope-fill"></i>
                    </a>
                )}
                </div>
            </div>
        </footer>
    </div>
  );
}

export default Footer;
