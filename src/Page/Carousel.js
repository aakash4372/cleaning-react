import React, { useEffect } from 'react'
import '../App.css';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "react-bootstrap";
import ReviewSlider from './review';
import { Container, Row, Col } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Carousel() {
    useEffect(() => {
        AOS.init();
      });
    const services = [
        {
            title: "EXPERT CLEANING FOR EVERY SPACE",
            content: "We offer professional cleaning services for your home, office, or commercial space.",
        },
        {
            title: "ECO-FRIENDLY & SAFE PRODUCTS",
            content: "We use non-toxic, eco-friendly cleaning products that are safe for your family, pets, and employees while protecting the environment.",
        },
        {
            title: "HIGHLY SKILLED & TRAINED TEAM",
            content: "Our highly trained and experienced cleaning professionals guarantee excellent results every time.",
        },
    ];



    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    };
    return (
        <div>
            <div id="mainCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={`${process.env.PUBLIC_URL}/img/medium-shot-people-cleaning-building.jpg`} class="d-block w-100" alt="..." />
                        <div class="carousel-caption">
                            <h2>Welcome to Chinna Cleaning Facility</h2>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={`${process.env.PUBLIC_URL}/img/medium-shot-woman-cleaning-home.jpg`} class="d-block w-100" alt="..." />
                        <div class="carousel-caption">
                            <h2>Welcome to Chinna Cleaning Facility</h2>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={`${process.env.PUBLIC_URL}/img/person-taking-care-office-cleaning (1).jpg`} class="d-block w-100" alt="..." />
                        <div class="carousel-caption">
                            <h2>Welcome to Chinna Cleaning Facility</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="who-we-are mt-0" style={{ backgroundColor: "#E8F9FF" }}>

                    <h2 class="text-center heading" data-aos="zoom-in" data-aos-duration="1050">
                        <span class="line"></span> Who We Are<span class="line"></span>
                    </h2>
                    <div class="container my-5">
                        <div class="row align-items-center">
                            <div class="col-12 col-md-6 col-lg-6" data-aos="fade-right" data-aos-duration="1050">
                                <img src={`${process.env.PUBLIC_URL}/img/girl.jpg`} alt="cleaing-pic" class="img-fluid rounded who-we-are-img" />
                            </div>

                            <div className="col-12 col-md-6 col-lg-6" data-aos="fade-left" data-aos-duration="1050">
                                <h2 className="fw-bold">Welcome to Chinna Cleaning Facility</h2>
                                <p className="pt-2">
                                    Chinna Cleaning Facility offers exceptional cleaning services for residential, office, and
                                    commercial spaces. Our professional team utilizes high-quality products and advanced techniques
                                    to create a clean and hygienic environment. With 11 years of experience in Coimbatore, we are
                                    <Link to="/about" className="nav-link d-inline">more...</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="who-we-serve-section py-5 mb-3" id="WhoWeServe">
                <h2 className="text-center heading mb-5" data-aos="zoom-in" data-aos-duration="1050">
                    <span className="line"></span> Service<span className="line"></span>
                </h2>

                <Slider {...settings} className="services container">
                    {services.map((service, index) => (
                        <div key={index} className="p-3" data-aos="zoom-in">
                            <Card className="service-card text-center pt-4">
                                <h5 className="service-title text-uppercase mb-3">{service.title}</h5>
                                <p className="service-content">{service.content}</p>
                            </Card>
                        </div>
                    ))}
                </Slider>
                <div className="d-flex container justify-content-end mt-2 see-more pe-5">
                    <Link to="/services" className="see-more-link">
                        See More
                    </Link>
                </div>
            </div>

            <ReviewSlider />

            <div>
                <footer className="footer bg-dark text-light py-4">
                    <Container>
                        <Row>
                            {/* Column 1 - Image and Content */}
                            <Col md={4} className="text-start">
                                <div className="footer-content">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/logo/logo.jpg`}
                                        alt="Logo"
                                        className="footer-logo mb-2" width={150}
                                    />
                                    <p className="footer-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
                                        odio.
                                    </p>
                                </div>
                            </Col>

                            {/* Column 2 - Useful Links */}
                            <Col md={4}>
                                <h5 className="footer-heading">Useful Links</h5>
                                <ul className="list-unstyled footer-links">
                                    <li>
                                        <Link to="/" className="text-light text-decoration-none">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about" className="text-light text-decoration-none">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/services" className="text-light text-decoration-none">
                                            Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact" className="text-light text-decoration-none">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </Col>

                            {/* Column 3 - Contact Information */}
                            <Col md={4}>
                                <h5 className="footer-heading">Contact</h5>
                                <p>
                                    <FaEnvelope className="footer-icon" /> example@example.com
                                </p>
                                <p>
                                    <FaPhone className="footer-icon" /> +123 456 7890
                                </p>
                                <p>
                                    <FaMapMarkerAlt className="footer-icon" /> 123, Street Name, City
                                </p>
                            </Col>
                        </Row>

                        {/* Copyright Section */}
                        <hr className="bg-light" />
                        <div className="text-center">
                            <p className="mb-0">
                                &copy; {new Date().getFullYear()}
                                <a
                                    href="https://bmtechx.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white text-decoration-none ms-1"
                                >
                                    BMTECHx
                                </a>. All Rights Reserved.
                            </p>
                        </div>
                    </Container>
                </footer>


            </div>



        </div>
    )
}
