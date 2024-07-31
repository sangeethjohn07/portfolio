import React from 'react'
import "./MainSection.css"
import Typewriter from "typewriter-effect";

function MainSection() {
    return (
        <div className='mainsection-container' id="mainsection">
            <video src='portfolio/videos/mainsection.mp4' autoPlay loop muted />

            <h1>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Hi, I'm Sangeeth John")
                            .pauseFor(1000)
                            .start();
                    }}
                />
            </h1>
            <p>Aspiring Product Manager</p>
            <h2>3+ years of experience in the Tech industry!</h2>
            <h3>Emlyon business school, France | ex-Cisco Appdynamics | NITC CSE'20</h3>



            <div className="main-btns-resume">
                <a href='https://drive.google.com/uc?export=download&id=1hyRsemgJQwxm73YcedbychLrMWCAT7HA' target="_blank" rel="noopener noreferrer" download>
                    <button className="btn-resume">
                        Download Resume
                    </button>
                </a>
            </div>
            <div className="arrow-box">
            <a href='#profileCard'>
                <i className="fa fa-angle-double-down"></i>
            </a>
            </div>
        </div>
    )
}

export default MainSection;
