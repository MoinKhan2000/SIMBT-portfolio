import './Intro.css';
// import 'linkedIn' from '../../img/linkedIn.png';
import linkedIn from '../../img/linkedIn.svg';
import Github from '../../img/Github.svg';
import Insta from '../../img/Insta.svg';
import main from '../../img/main.png';
import Iback2 from '../../img/Iback2.svg';
import Iback1 from '../../img/Iback1.svg';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import emoji from '../../img/emoji.png'
import { gsap } from 'gsap';
import { useEffect } from 'react'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
function Intro() {
    useEffect(() => {
        let inTl=gsap.timeline();
        inTl.fromTo('.i-left', {
            opacity: 0, x: -100,
        }, { opacity: 1, x: 0, duration: 1, delay: 1 })
        .fromTo('.i-right', {
            opacity: 0, x: 100
        }, {
            opacity: 1, x: 0, duration: 1, delay: 0.5
        })
    }, [])



    return (
        <div id="intro" className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span className='hi'>Hy! I Am</span>
                    <span className='name'>Moin From INDIA.</span>
                    <span className='front'>  FrontEnd Developer with high level of experience in web designing and development, producting the Quality work.</span>
                </div>
                <button className="button i-button">Hire Me.
                </button>
                <div className="i-icons">
                    <a href="/">  <img src={linkedIn} alt="" /></a>
                    <a href="/">  <img src={Github} alt="" /></a>
                    <a href="/">  <img src={Insta} alt="" /></a>
                </div>
            </div>
            <div className="i-right">
                <img src={Iback1} alt="" />
                <img src={Iback2} alt="" />
                <img src={main} alt="" />
                <img src={emoji} alt="" />

                <div className='floating-div' style={{ right: "-10%", top: "-18%" }}>
                    <FloatingDiv image={crown} text1={"Web"} text2={"Developer"} />
                </div>
                <div className='floating-div' style={{ bottom: "30%", left: "2%" }}>
                    <FloatingDiv image={thumbup} text1={"Best"} text2={"Designs"} />
                </div>

                {/* Blur divs */}
                {/* <div className='blur' style={{ background: "rgb(238 210 255" }}></div> */}
                <div className='blur' style={{ background: "#C1F5FF", top: '12rem', width: '15rem', left: '2rem', filter: 'blur(90px)', height: '11rem', }}></div>
            </div>
        </div>
    );
}

export default Intro;
