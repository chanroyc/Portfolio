import React, { Component } from 'react';
import Header from '../navigation/Header';
import Particles from 'react-particles-js';
import Fade from 'react-reveal';

import "../scripts/scrollTop";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

class projectPortfolio extends Component {
    render(){
        return(
            <>
                <Header />
                {/* Particles Background */}

                <div className='page'>
                    <div className='pageTop'>
                        <div className='heading'>
                            <Particles
                                params={{
                                    "particles": {
                                        "number": {
                                            "value": 60,
                                            "density": {
                                                "enable": true,
                                                "value_area": 1500
                                            }
                                        },
                                        "line_linked": {
                                            "enable": true,
                                            "opacity": 0.1
                                        },
                                        "move": {
                                            "direction": "right",
                                            "speed": 0.05
                                        },
                                        "size": {
                                            "value": 1.5
                                        },
                                        "color": {
                                            "value": "#1ab6ff"
                                        },
                                        "opacity": {
                                            "anim": {
                                                "enable": true,
                                                "speed": 1,
                                                "opacity_min": 0.05
                                            }
                                        }
                                    },
                                    "interactivity": {
                                        "events": {
                                            "onclick": {
                                                "enable": true,
                                                "mode": "push"
                                            }
                                        },
                                        "modes": {
                                            "push": {
                                                "particles_nb": 1
                                            }
                                        }
                                    },
                                    "retina_detect": true
                                }}
                            />
                            <div className='title'>
                                <h1>Portfolio App</h1>
                                <a href='https://chanroyc.ca/' target="_blank">View Live</a>
                            </div>
                            <div id="sd-container" href='#section-1'>
                                <div className="arrow"></div>
                                <div className="arrow"></div>
                            </div>
                        </div>
                        <div className='bannerImage portfolio'></div>
                    </div>

                    <div className='pageSections'>
                        <Fade big>
                        <section className='section-1'>
                            <span className='sectionNumber'>01</span>
                            <h2>Overview</h2>
                            <span className='description'>
                                <p>The goal of this portfolio is to display a minimalistic space to showcase my work as well as to learn a new Framework: React. It began as a desire to learn as well as an idea that stemmed from 2 of my interests &ndash; cats and stars; both of which I wanted to integrate into the design.</p>
                            </span>
                        </section>
                        </Fade>
                        
                        <Fade big>
                        <section className='section-2'>
                            <span className='sectionNumber'>02</span>
                            <h2>Tools</h2>
                            <span className='description'>
                                <p>HTML, CSS, Sass, JavaScript, jQuery, React</p>
                                <p>InVision, Photoshop, Illustrator</p>
                            </span>
                        </section>
                        </Fade>

                        <Fade big>
                        <section className='section-3'>
                            <span className='sectionNumber'>03</span>
                            <h2>Concepts</h2>
                            <span className='description'>
                                <p>The initial concepts were designed and built in Adobe XD months prior to development. These concepts were originally the finalized prototypes, but I decided to only use them as an alpha version before redesigning the layout with sketches in InVision.</p>
                                <img src='/images/portfolioXDHome.jpg' />
                                <img src='/images/portfolioXDAbout.jpg' />
                                <img src='/images/portfolioXDProject.jpg' />
                                <img src='/images/portfolioXDProjectDetails.jpg' />
                                <img src='/images/portfolioXDContact-1.jpg' />
                                <img src='/images/portfolioXDContact-2.jpg' />
                            </span>
                        </section>
                        </Fade>

                        <div className='content portfolioConcepts   '></div>

                        <Fade big>
                        <section className='section-4'>
                            <span className='sectionNumber'>04</span>
                            <h2>Design</h2>
                            <span className='description'>
                                <p>Using concepts from the prototype, I went backwards in the process to sketch wireframes in InVision. The prototype's design had design elements that I liked, some of which include pagination and the colour scheme. To create an improved, minimalistic website, the use of space was of utmost importance and was rather challenging with the amount of content this portfolio contains. To maximize the use of spacing in both mobile and desktop, I adjusted the sizing of elements which resulted in the following solution below.</p>

                                <img src='/images/portfolioInvisionDesktop.jpg' />
                                <img src='/images/portfolioInvisionMobile.jpg' />
                            </span>
                        </section>
                        </Fade>

                        <div className='content portfolioDesign'></div>
                    </div>

                    <Fade big>
                    <div className='pageBack'>
                        <a href='/#portfolio' className='pageBackBtn'>Back</a>
                    </div>
                    </Fade>
                </div>
            </>
        )
    }
}

export default projectPortfolio;