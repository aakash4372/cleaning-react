import React from 'react'
import { FaSearchLocation } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <div>

            <div>
                <footer
                    className="footer-section py-4"
                    id="contact"
                >
                    <Container>
                        <Row className="gap-4 gap-md-0">
                            <Col
                                md={3}
                                className="text-start text-white d-flex flex-column align-items-start mb-4 mb-md-0"
                            >
                                <div className="logo-circle">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/img/logo.jpg`}
                                        alt="Logo"
                                        className="footer-logo"
                                    />
                                </div>
                                <p className="text-start mt-3">
                                    China Cleaning Facility ensures a clean, hygienic environment
                                    with 11 years of expertise, offering reliable residential,
                                    office, and commercial cleaning services. We prioritize
                                    professionalism and safety, creating welcoming spaces for
                                    all.
                                </p>
                            </Col>
                            <Col md={3} className="text-start text-white mb-4 mb-md-0">
                                <h5 className="footer-heading">Useful Links</h5>
                                <ul className="list-unstyled d-flex flex-column gap-3 align-items-start">
                                    <li>
                                        <Link to="/" className="text-white text-decoration-none">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about" className="text-white text-decoration-none">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/services" className="text-white text-decoration-none">
                                            Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/courses" className="text-white text-decoration-none">
                                            Courses
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col md={3} className="text-start text-white">
                                <h5 className="footer-heading">Contact Us</h5>

                                {/* Phone */}
                                <p className="d-flex align-items-center justify-text">
                                    <FaPhone className="me-2 calls flex-shrink-0" />
                                    <a
                                        href="tel:+919788525856"
                                        className="text-white ps-1 text-decoration-none"
                                    >
                                        +91 9788525856
                                    </a>
                                </p>

                                {/* Email */}
                                <p className="d-flex align-items-center justify-text">
                                    <FaEnvelope className="me-2 flex-shrink-0" />
                                    <a
                                        href="mailto:chinnaclgfacility@gmail.com"
                                        className="text-white ps-2 text-decoration-none"
                                    >
                                        chinnaclgfacility@gmail.com
                                    </a>
                                </p>

                                {/* Address */}
                                <p className="d-flex align-items-start justify-text">
                                    <FaMapMarkerAlt className="me-2 flex-shrink-0 mt-1" />
                                    <span className="ps-2">
                                        No 204 Maruthakutti street, Rathinapuri, Coimbatore - 641027
                                    </span>
                                </p>

                                <p className="d-flex align-items-start justify-text">
                                    <FaSearchLocation className="me-2 flex-shrink-0 mt-1" />
                                    <span className="ps-2">
                                        Coimbatore, Tirupur, Pollachi, Mettupalayam, Coimbatore,
                                        Palakkad, Ooty
                                    </span>
                                </p>
                            </Col>

                            <Col md={3} className="text-start text-white">
                                <h5 className="footer-heading">Follow Us</h5>
                                <div className="social-icons d-flex gap-3">
                                    <a
                                        href="https://www.instagram.com/chinna_cleaning_facility?igsh=dWR2MTd1OG9yN3Bq"
                                        target="_blank"
                                        without
                                        rel="noreferrer"
                                        className="text-white"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/logo/instagram.png`}
                                            alt="Instagram"
                                            width="30"
                                            height="30"
                                        />
                                    </a>
                                    <a
                                        href="https://www.facebook.com/share/163a4sovT5"
                                        target="_blank"
                                        without
                                        rel="noreferrer"
                                        className="text-white"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/logo/facebook.png`}
                                            alt="Facebook"
                                            target="_blank"
                                            without
                                            rel="noreferrer"
                                            width="30"
                                            height="30"
                                        />
                                    </a>
                                    <a
                                        href="https://youtube.com/@chinnacleaningfacility?si=TEXo-4S7m8fk9Nuc"
                                        target="_blank"
                                        without
                                        rel="noreferrer"
                                        className="text-white"
                                    >
                                        <img
                                            src={`${process.env.PUBLIC_URL}/logo/youtube.png`}
                                            alt="Facebook"
                                            width="30"
                                            height="30"
                                        />
                                    </a>
                                </div>
                            </Col>
                        </Row>
                        <hr />
                        <Row className="mt-4">
                            <Col className="text-center text-white">
                                <p className="mb-0">
                                    &copy; {new Date().getFullYear()}
                                    <a
                                        href="https://bmtechx.in"
                                        target="_blank"
                                        without
                                        rel="noreferrer"
                                        className="text-white text-decoration-none ms-1"
                                    >
                                        BMTECHx
                                    </a>
                                    . All Rights Reserved.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </footer>


            </div>

        </div>
    )
}
