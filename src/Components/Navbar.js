import React from 'react'
import { HashLink } from 'react-router-hash-link';
import { useState, useEffect } from "react";

const Navbar = () => {


        const [isNavCollapsed, setIsNavCollapsed] = useState(true);

        const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
        const [activeSection, setActiveSection] = useState(null);
        useEffect(() => {
                const handleScroll = () => {
                        const sections = document.querySelectorAll("section");
                        const scrollPosition = window.pageYOffset;
                        sections.forEach((section, index) => {
                                const top = section.offsetTop;
                                const height = section.offsetHeight;
                                if (
                                        scrollPosition >= top - window.innerHeight * 0.5 &&
                                        scrollPosition < top + height - window.innerHeight * 0.5
                                ) {
                                        setActiveSection(index);
                                }
                        });
                };
                window.addEventListener("scroll", handleScroll);
                return () => window.removeEventListener("scroll", handleScroll);
        }, []);




        return (
                <div>
                        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
                                <div class="container-fluid nav-container ">
                                        <a class="navbar-brand logo " href="#"><span className='blue' >Bé</span>Smart</a>

                                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                                <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="collapse navbar-collapse" id="navbarNav">
                                                <ul class="navbar-nav">
                                                        <li className={activeSection === 0 ? "active" : ""} >
                                                                <HashLink
                                                                        to="#"
                                                                >
                                                                        HOME
                                                                </HashLink>
                                                        </li>
                                                        <li className={activeSection === 1 ? "active" : ""}>
                                                                <HashLink
                                                                        to="#Amazing"
                                                                >
                                                                        FEATURES
                                                                </HashLink>
                                                        </li>
                                                        <li className={activeSection === 2 ? "active" : ""}>
                                                                <HashLink
                                                                        to="#Work"
                                                                >
                                                                        PORTFOLIO
                                                                </HashLink>
                                                        </li>
                                                        <li className={activeSection === 3 ? "active" : ""}>
                                                                <HashLink
                                                                        to="#Register"
                                                                >
                                                                        REGISTER
                                                                </HashLink>
                                                        </li>
                                                        <li className={activeSection === 4 ? "active" : ""}>
                                                                <HashLink
                                                                        to="#Team"
                                                                >
                                                                        TEAM
                                                                </HashLink>
                                                        </li>
                                                        <li className={activeSection === 5 ? "active" : ""}>
                                                                <HashLink
                                                                        to="#Services"
                                                                >
                                                                        SERVICES
                                                                </HashLink>
                                                        </li>
                                                        <li className={activeSection === 6 ? "active" : ""}>
                                                                <HashLink
                                                                        to="#News"
                                                                >
                                                                        BLOG
                                                                </HashLink>
                                                        </li>
                                                        <li className={activeSection === 7 ? "active" : ""}>
                                                                <HashLink
                                                                        to="#Price"
                                                                >
                                                                        PRICING
                                                                </HashLink>
                                                        </li>
                                                        <li>
                                                                <form class="d-flex" >
                                                                        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
                                                                        <a href='#Touch' id='btn-info'> Contact Us</a>
                                                                </form>
                                                        </li>
                                                </ul>
                                        </div>
                                </div>
                        </nav>

                </div>

        )
}

export default Navbar