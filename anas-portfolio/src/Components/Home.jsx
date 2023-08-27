import {React, useState, useEffect} from "react";
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { Link, Element } from "react-scroll";
import { useInView } from 'react-intersection-observer';
import './Home.css'
import themeButton from './sun-line.png'
import anasImage2 from './anasImage7.png'
import linkedin from './linkedin.svg'
import github from './github.svg'
import instagram from './instagram.svg'
import arrowdown from './arrowdown.svg'
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";

export default function Home(){
    return (
        <div className="main">

            <motion.div
                    className="header"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                ></motion.div>
            <div className="upperContainer">

                <div className="header">
                    <div className="myName">
                        <h2>Anas</h2>
                    </div>
                    <div className="themeIcon">
                        <img src={themeButton} alt="Theme Button" />
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }} // Initial animation state
                    animate={{ opacity: 1, y: 0 }} // Animation when component enters the screen
                    transition={{ duration: 1 }} // Animation duration
                    className="myInfo"
                >
                    <h4>Hi, I'm</h4>
                    <h2>Anas Saifi</h2>
                    <h4>Web Developer</h4>
               </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }} // Initial animation state
                    animate={{ opacity: 1, x: 0 }} // Animation when component enters the screen
                    transition={{ duration: 1 }} // Animation duration
                    className="twoButtons"
                >
                    <InViewAnimation>

                    <button className="download-cv">Download CV</button>
                    <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-50} // Adjust offset as needed
                    duration={500}
                >
                    <button className="about-me">About Me</button>
                </Link>
                </InViewAnimation>
                    </motion.div>
            </div>
            
            <div className="midContainer">
            <motion.div
                    initial={{ opacity: 0, y: 100 }} // Initial animation state
                    animate={{ opacity: 1, y: 0 }} // Animation when component enters the screen
                    transition={{ duration: 1 }} // Animation duration
                    className="navbar"
                >
                    <InViewAnimation>
        <ul>
            <li><img src={linkedin} alt="" /></li>
            <li><img src={github} alt="" /></li>
            <li><img src={instagram} alt="" /></li>
        </ul>
    </InViewAnimation>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }} // Initial animation state
                    animate={{ opacity: 1, y: 0 }} // Animation when component enters the screen
                    transition={{ duration: 1 }} // Animation duration
                    className="myImage"
                >
                     <InViewAnimation>
                    <img src={anasImage2} alt="" />
                </InViewAnimation>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }} // Initial animation state
                    animate={{ opacity: 1, y: 0 }} // Animation when component enters the screen
                    transition={{ duration: 1 }} // Animation duration
                    className="scrollInfo"
                >
                    <span>
                        <p>Scroll Down <img src={arrowdown} alt="" /></p>
                        </span>
               </motion.div>
            </div>
            <Element name="about">
             <About />
             </Element>
<Element>
                <Skills />
        </Element>
        <Element>
                <Projects />
                </Element>
                </div>
    );
}


function InViewAnimation({ children }) {
    const [ref, inView] = useInView({
        triggerOnce: false, 
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    );
}