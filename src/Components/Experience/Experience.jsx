import React from 'react';
import './Experience.css';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/all';
import { gsap } from 'gsap';
function Experience() {
    let exp = useRef(null)
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const experience = gsap.timeline();
        experience
            .fromTo("#exp", {
                opacity: 0,
                ease: "bounce",
                duration: 2,
                rotateX: 360,
                scale: 0.8,
            }, {
                opacity: 1,
                scale: 1,
                scrollTrigger: {
                    start: "top 240%",
                    trigger: "#exp",
                    scroller: "body",
                }
            },)
            .fromTo('.desc', {
                opacity: 0,
                x: 100,

            }, {
                x: 0,
                opacity: 1,
                ease: "back(5)",
                scrollTrigger: {
                    trigger: ".desc",
                    scrub: true
                }
            })
            .fromTo('.experience', {
                opacity: 0,
                x: -100,
                scale: 1.2,
            }, {
                x: 0,
                opacity: 1,
                ease: "back(5)",
                scale: 1,
                scrollTrigger: {
                    trigger: ".experience",
                    scrub: true
                }
            }, "<0.5")

    }, [])
    return (
        <>
            <div className="exp" id='exp' ref={exp}>
                <div className='desc'>
                    <span>My</span>
                    <span>Experince</span>
                    <span>I have an Experice of around 8+ years and <br></br> completed 20+ projects  along with 4+ internships</span>
                </div>
                <div className="blur s-blur1" ></div>
                <div className='blur s-blur2' ></div>
                <div className="experience">
                    <div className="achivements">
                        <div className="circle">8+</div>
                        <span>years</span>
                        <span>Experience</span>
                    </div>
                    <div className="achivements">
                        <div className="circle">20+</div>
                        <span>completed</span>
                        <span>Projects</span>
                    </div>
                    <div className="achivements">
                        <div className="circle">4+</div>
                        <span>internship</span>
                        <span>Experience</span>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Experience;
