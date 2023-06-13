import React from 'react';
import './Services.css';
import UiUx from '../../img/UiUx.png';
import WebDev from '../../img/webDev.png';
import Coder from '../../img/Coder.png';
import Card from '../Card/Card';
import Resume from './Resume.pdf';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/all';
import { gsap } from 'gsap';


function Services() {
    let service = useRef(null);
    useEffect(() => {
        let tlSer = gsap.timeline();
        gsap.registerPlugin(ScrollTrigger);
        tlSer
            .fromTo("#services", {
                opacity: 1,
                y: -50,
                // scale: 0.4,
                // repeat:-1,
                // yoyo: true,
                ease: "elastic",
                // scale: 0.2,
                // transformOrigin: '0% 50%',
            }, {
                // scale: 1,
                y: 0,
                opacity: 1,
                // stagger: 1,
                duration: 4,
                scale: 0.8,
                // stagger:0.4,
                scrollTrigger: {
                    start: "top 100%",
                    trigger: "#services",
                    scroller: "body",
                    // markers: true,
                    scrub: true
                }
            },)
            .fromTo('.cards div', {
                opacity: 0,
                x: 400,
                scale:0.3,
                stagger: { each: .3, ease: "back(5)" }
            }, {
                opacity: 1,
                x: 0,
                scale:1,
                stagger: 0.2,
                scrollTrigger: {
                    start: "top 100%",
                    trigger: ".cards div",
                    scroller: "body",
                    // markers: true,
                    scrub: true
                }
            }, "+=1")

    }, [])
    return (
        <div id='services' className="services"
            ref={service}
        >

            {/* Left side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Quibusdam repellendus at numquam.</span>
                <a href={Resume} download >
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" ></div>
                <div className='blur s-blur2' ></div>
            </div>
            {/* Right side */}
            <div className="cards">
                {/* <div className='firstCard' > */}
                <Card emoji={WebDev} heading="Web Developer" description="HTML CSS JS " cls='card1' />
                {/* </div> */}
                {/* <div className='secondCard s' > */}
                <Card emoji={UiUx} heading="UI/UX " description="Figma React Three.js" cls='card2' />
                {/* </div> */}
                {/* <div className='thirdCard'> */}
                <Card emoji={Coder} heading="Coder" description="C C++ Java Python HTML CSS JS " cls='card3' />
                {/* </div> */}
            </div>
        </div>
    );
}

export default Services;
