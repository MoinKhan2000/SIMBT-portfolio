import React, { useEffect } from 'react';
import './Navbar.css';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/all';

function Navbar() {
    // let navbar = useRef(null);

    useEffect(() => {
        // gsap.from(navbar,{opacity:0,duration:0.6,x:-100,ease:'bounce'})
        const navTimeLine = gsap.timeline();
        navTimeLine
            .fromTo('#navbar .n-left ,#navbar .n-right', {
                duration: 2,
                opacity: 0,
                ease: "back(2)",
                stagger:0.8,
                scale:0.2,
            },{
                opacity:1,
                duration:1,
                scale:0.8,
            })
          
    }, [])
    return (
        <div className="n-wrapper" id='navbar' >
            <div className="n-left">
                <div className="n-name">
                    M.K.
                </div>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyle: "none" }}>
                        {/* <li><a href="#intro">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#exp">Experience</a></li>
                        <li> <a href="#portfolio">Portfolio</a></li>
                        <li><a href="#testimonial">Testimonials</a></li> */}

                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li> Portfolio</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <div id='contactButton'>
                    <a href='/' className="button n-button">
                        Contact
                    </a>
                </div>
            </div>
        </div>
    );

}

export default Navbar;
