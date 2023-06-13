import React from 'react';
import './Works.css';
import Facebook from '../../img/Facebook.svg';
import Amazon from '../../img/Amazon.svg';
import LinkedIn from '../../img/linkedIn.svg';
import Stack from '../../img/Stack.svg';
import Experience from '../../img/Experience.png';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/all';
import { gsap } from 'gsap';


function Works() {
    let work = useRef(null)
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const worksTl = gsap.timeline();
        worksTl
            .fromTo("#work .w-left", {
                opacity: 0,
                ease: "back(8)",
                scale: 0.01,
                duration: 1,
                y: 200,
                transformOrigin: '50% 50%',
            }, {
                opacity: 1,
                stagger: 0.3,
                y: 0,
                scale: 1,
                scrollTrigger: {
                    start: "top 180%",
                    trigger: "#work",
                    scroller: "body",
                    scrub: true
                }
            },)
            .fromTo("#work .w-right", {
                duration: 0.1,
                rotate: 45,
                transformOrigin: 'center center',
            }, {
                opacity: 1,
                stagger: 0.3,
                y: 0,
                scale: 1,
                rotate: 360 * 10,
                scrollTrigger: {
                    start: "top 200%",
                    trigger: "#work",
                    scroller: "body",
                    scrub: true
                }
            },)
    }, [])
    return (
        <div className='works' id='work' ref={work}>
            {/* Left Side */}
            <div className="services w-left">
                <div className="awesome">
                    <span>Work for All these</span>
                    <span>Brands & Clients</span>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <br /> Inventore eos deleniti totam quasi consequatur id saepe <br /> natus ex possimus porro. Possimus eius harum adipisci nihil <br /> pariatur repudiandae dolor nesciunt amet iure earum, porro eos.
                    </span>
                    <button className="button s-button h-button">Hire Me</button>
                    <div className="blur w-blur1" ></div>
                    <div className='blur w-blur2' ></div>
                </div>
            </div>
            {/* Right Side */}
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={LinkedIn} alt="" /></div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" /></div>
                    <div className="w-secCircle">
                        <img src={Stack} alt="" /></div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" /></div>
                    <div className="w-secCircle">
                        <img src={Experience} alt="" /></div>
                </div>
            </div>
        </div>
    );
}

export default Works;
