import React, { Component } from 'react';
import Header from '../navigation/Header';
import Particles from 'react-particles-js';
import Fade from 'react-reveal';

import "../scripts/scrollTop";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

class projectPortfolioV2 extends Component {
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
                                <div class="arrow"></div>
                                <div class="arrow"></div>
                            </div>
                        </div>
                        <div className='bannerImage portfolio'></div>
                    </div>

                    <div class='pageSections'>
                        <Fade big>
                        <section className='section-1'>
                            <span class='sectionNumber'>01</span>
                            <h2>Overview</h2>
                            <span class='description'>
                                <p>The goal of this portfolio is to display a minimalistic space to showcase my work as well as to learn a new Framework: React. It began as a desire to learn as well as an idea that stemmed from 2 of my interests &ndash; cats and stars; both of which I wanted to integrate into the design.</p>
                            </span>
                        </section>
                        </Fade>
                        
                        <Fade big>
                        <section className='section-2'>
                            <span class='sectionNumber'>02</span>
                            <h2>Tools</h2>
                            <span class='description'>
                                <p>HTML, CSS, Sass, JavaScript, jQuery, React</p>
                                <p>InVision, Photoshop, Illustrator</p>
                            </span>
                        </section>
                        </Fade>

                        <Fade big>
                        <section className='section-3'>
                            <span class='sectionNumber'>03</span>
                            <h2>Concepts</h2>
                            <span class='description'>
                                <p>The initial concepts were designed months prior to development. I built a prototype in Adobe XD which I used as a basic guideline before finalizing the design.</p>
                                <img src='/images/portfolioXDHome.jpg' />
                                <img src='/images/portfolioXDAbout.jpg' />
                                <img src='/images/portfolioXDProject.jpg' />
                                <img src='/images/portFolioXDProjectDetails.jpg' />
                                <img src='/images/portfolioXDContact-1.jpg' />
                                <img src='/images/portfolioXDContact-2.jpg' />
                            </span>
                        </section>
                        </Fade>

                        <div className='content portfolioConcepts   '></div>

                        <Fade big>
                        <section className='section-4'>
                            <span class='sectionNumber'>04</span>
                            <h2>Design</h2>
                            <span class='description'>
                                <p>Using the concepts, I went backwards in the process to sketch wireframes in InVision. To create a minimalistic website, the use of space is of utmost importance and was rather challenging with the amount of content this portfolio contains. To maximize the use of spacing as well requiring to account for both mobile and desktop, I adjusted the sizing of elements which resulted in the following solution below.</p>

                                <img src='/images/portfolioInvisionDesktop.jpg' />
                                <img src='/images/portfolioInvisionMobile.jpg' />
                            </span>
                        </section>
                        </Fade>

                        <div className='content portfolioDesign'></div>
                    </div>

                    <Fade big>
                    <div className='pageBack'>
                        <a href='javascript:history.back()' class='pageBackBtn'>Back</a>
                    </div>
                    </Fade>
                </div>
            </>
        )
    }
}

export default projectPortfolioV2;