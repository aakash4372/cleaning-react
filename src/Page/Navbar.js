import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "../App.css";

export default function Navbarsection() {
    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 180) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div>
            {/* Top Navbar */}
            <div className="top-navtab d-none d-lg-block d-flex justify-content-end align-items-center">
                <div className="d-flex justify-content-end align-items-center gap-3 me-4">
                    <p className="mb-0">Coimbatore <span className="top-navtab-span">|</span></p>
                    <p className="mb-0">Tirupur <span className="top-navtab-span">|</span></p>
                    <p className="mb-0">Pollachi <span className="top-navtab-span">|</span></p>
                    <p className="mb-0">Mettupalayam <span className="top-navtab-span">|</span></p>
                    <p className="mb-0">Palakkad <span className="top-navtab-span">|</span></p>
                    <p className="mb-0">Ooty</p>
                </div>
            </div>

            <div>
                {/* Navbar */}
                <nav className={`navbar navbar-expand-lg main-navbar ${isScrolled ? "fixed-nav" : ""}`}>
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src={`${process.env.PUBLIC_URL}/logo/logo.jpg`} alt="chinna-pic" height="40" />
                        </Link>

                        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/our-work">Our Work</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Offcanvas Menu */}
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link className="nav-link" to="/" >Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/about" >About</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/services" >Services</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/our-work" >Our Work</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/contact" >Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            
        </div>
    );
}
