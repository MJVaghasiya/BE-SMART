import { useState, useEffect } from "react";

// import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Nav = () => {
   
  

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
        <div className="container-fluid" id="Nav">

            <nav className="navbar navbar-expand-md container nav">

                <div>
                    <a className="navbar-brand" href='#Home'><span className='brand'><span className="blue">Dig</span>India</span></a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                </div>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 tabs">

                        <li className={activeSection === 0 ? "active" : ""} >
                            <HashLink
                                to="#" 
                            >
                                Home
                            </HashLink>
                        </li>

                        <li className={activeSection === 1 ? "active" : ""}>
                            <HashLink
                                to="#Amazing"
                            >
                                Features
                            </HashLink>
                        </li>

                        <li className={activeSection === 2 ? "active" : ""}>
                            <HashLink
                                to="#Work"
                            >
                                Portfolio
                            </HashLink>
                        </li>

                        <li className={activeSection === 3 ? "active" : ""}>
                            <HashLink
                                to="#Register"
                            >
                                Register
                            </HashLink>

                        </li>
                      
                        <li className={activeSection === 4 ? "active" : ""}>
                            <HashLink
                                to="#Team"
                            >
                                Team
                            </HashLink>

                        </li>
                      
                        <li className={activeSection === 5 ? "active" : ""}>
                            <HashLink
                                to="#Services"
                            >
                                Services
                            </HashLink>

                        </li>
                        
                        <li className={activeSection === 6 ? "active" : ""}>
                            <HashLink
                                to="#News"
                            >
                                Blog
                            </HashLink>

                        </li>
                       
                        <li className={activeSection === 7 ? "active" : ""}>
                            <HashLink
                                to="#Price"
                            >
                                Pricing
                            </HashLink>
                        </li>
     
                        <button className={activeSection === 8 ? "active" : ""}  id="btn1">
                            <HashLink
                                to="#Touch"
                            >Contact us
                            </HashLink>
                        </button>
                        
                    </ul>

                </div>


            </nav >

        </div >
    )
}

export default Nav;






// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import { HashLink } from 'react-router-hash-link';
// import { useState, useEffect } from "react";


       
      

// const Navbar = () => {

//         const [isNavCollapsed, setIsNavCollapsed] = useState(true);
      
//         const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
//         const [activeSection, setActiveSection] = useState(null);

//         useEffect(() => {
//                 const handleScroll = () => {
//                         const sections = document.querySelectorAll("section");
//                         const scrollPosition = window.pageYOffset;

//                         sections.forEach((section, index) => {
//                                 const top = section.offsetTop;
//                                 const height = section.offsetHeight;

//                                 if (
//                                         scrollPosition >= top - window.innerHeight * 0.5 &&
//                                         scrollPosition < top + height - window.innerHeight * 0.5
//                                 ) {
//                                         setActiveSection(index);
//                                 }
//                         });
//                 };

//                 window.addEventListener("scroll", handleScroll);

//                 return () => window.removeEventListener("scroll", handleScroll);
//         }, []);

//         return (
//                 <div>
//                         <nav class="navbar navbar-expand-lg bg-light fixed-top">
//                                 <div class="container-fluid">
//                                         <a class="navbar-brand logo " href="#"><span className='blue' >Bé</span>Smart</a>
//                                         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation"  onClick={handleNavCollapse}>
//                                                 <span class="navbar-toggler-icon"></span>
//                                         </button>
//                                         <div class={`${isNavCollapsed ? 'collapse' : ''} collapse navbar-collapse`} id="navbarNav">
//                                                 <ul class="navbar-nav">
//                                                         <li className={activeSection === 0 ? "active" : ""} >
//                                                                 <HashLink
//                                                                         to="#"
//                                                                 >
//                                                                         HOME
//                                                                 </HashLink>
//                                                         </li>

//                                                         <li className={activeSection === 1 ? "active" : ""}>
//                                                                 <HashLink
//                                                                         to="#Amazing"
//                                                                 >
//                                                                         FEATURES
//                                                                 </HashLink>
//                                                         </li>

//                                                         <li className={activeSection === 2 ? "active" : ""}>
//                                                                 <HashLink
//                                                                         to="#Work"
//                                                                 >
//                                                                         PORTFOLIO
//                                                                 </HashLink>
//                                                         </li>

//                                                         <li className={activeSection === 3 ? "active" : ""}>
//                                                                 <HashLink
//                                                                         to="#Register"
//                                                                 >
//                                                                         REGISTER
//                                                                 </HashLink>

//                                                         </li>

//                                                         <li className={activeSection === 4 ? "active" : ""}>
//                                                                 <HashLink
//                                                                         to="#Team"
//                                                                 >
//                                                                         TEAM
//                                                                 </HashLink>

//                                                         </li>

//                                                         <li className={activeSection === 5 ? "active" : ""}>
//                                                                 <HashLink
//                                                                         to="#Services"
//                                                                 >
//                                                                         SERVICES
//                                                                 </HashLink>

//                                                         </li>

//                                                         <li className={activeSection === 6 ? "active" : ""}>
//                                                                 <HashLink
//                                                                         to="#News"
//                                                                 >
//                                                                         BLOG
//                                                                 </HashLink>

//                                                         </li>

//                                                         <li className={activeSection === 7 ? "active" : ""}>
//                                                                 <HashLink
//                                                                         to="#Price"
//                                                                 >
//                                                                         PRICING
//                                                                 </HashLink>
//                                                         </li>
//                                                         <li>
//                                                         <form class="d-flex" >
//                                                                 {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
//                                                                        <a href='#Touch' id='btn-info'> Contact Us</a>
//                                                         </form>
//                                                         </li>

//                                                 </ul>
//                                         </div>
//                                 </div>
//                         </nav>
//                 </div>

//         )
// }


// export default Navbar

