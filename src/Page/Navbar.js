import React, { useState, useEffect } from "react";
import { Navbar, Nav, Offcanvas, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaInfoCircle, FaBriefcase, FaPhone } from "react-icons/fa";
import { MdCleanHands } from "react-icons/md";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { motion } from "framer-motion"; // Import Framer Motion

const MyOffcanvas = () => {
  const [show, setShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 210) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className={`shadow py-2 main-navbar ${isScrolled ? "fixed-top" : ""}`}>
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold navbar-brand">
            <img src={`${process.env.PUBLIC_URL}/logo/logo.jpg`} alt="chinna-pic" height="60" />
          </Navbar.Brand>


          <Nav className="mx-auto d-none gap-4 d-lg-flex">
            <NavLink to="/" className={({ isActive }) => `nav-link mx-2 ${isActive ? "active-link" : ""}`}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link mx-2 ${isActive ? "active-link" : ""}`}>About</NavLink>
            <NavLink to="/services" className={({ isActive }) => `nav-link mx-2 ${isActive ? "active-link" : ""}`}>Services</NavLink>
            <NavLink to="/our-work" className={({ isActive }) => `nav-link mx-2 ${isActive ? "active-link" : ""}`}>Our Work</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link mx-2 ${isActive ? "active-link" : ""}`}>Contact</NavLink>
          </Nav>

          {/* Animated Offcanvas Toggle Button */}
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9, rotate: -10 }}
            onClick={handleShow}
            className="d-lg-none"
            style={{ cursor: "pointer" }}
          >
            <HiOutlineBars3BottomRight size={30} color="#227ec1" />
          </motion.div>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="start" className="custom-offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <NavLink to="/" className={({ isActive }) => `nav-link my-2 d-flex align-items-center ${isActive ? "active-link" : ""}`} onClick={handleClose}>
              <FaHome className="me-2" /> Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link my-2 d-flex align-items-center ${isActive ? "active-link" : ""}`} onClick={handleClose}>
              <FaInfoCircle className="me-2" /> About
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => `nav-link my-2 d-flex align-items-center ${isActive ? "active-link" : ""}`} onClick={handleClose}>
              <MdCleanHands className="me-2" /> Services
            </NavLink>
            <NavLink to="/our-work" className={({ isActive }) => `nav-link my-2 d-flex align-items-center ${isActive ? "active-link" : ""}`} onClick={handleClose}>
              <FaBriefcase className="me-2" /> Our Work
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link my-2 d-flex align-items-center ${isActive ? "active-link" : ""}`} onClick={handleClose}>
              <FaPhone className="me-2" /> Contact
            </NavLink>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MyOffcanvas;
