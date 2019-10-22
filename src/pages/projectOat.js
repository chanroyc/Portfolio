import React, { Component } from 'react';
import Header from '../navigation/Header';
import Particles from 'react-particles-js';
import Fade from 'react-reveal';

import "../scripts/scrollTop";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

class projectOat extends Component {
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
                                <h1>BCIT OAT</h1>
                                <a href='https://bcitoat.bcitwebdeveloper.ca/' target="_blank">View Live</a>
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
                                <p>The Office Administrator with Technology program is a hands-on program from British Columbia Institute of Technology. Our team <a href='https://cherylcam.com/'>Cheryl</a>, <a href='https://mariusgessler.com/'>Marius</a>, and <a href='https://ysmatthew.com/ß'>Matthew</a> were tasked to redesign, rebuild, and migrate an existing static website using WordPress.</p>
                            </span>
                        </section>
                        </Fade>

                        <Fade big>
                        <section className='section-2'>
                            <span className='sectionNumber'>02</span>
                            <h2>Team</h2>
                            <span className='description'>
                                <p>Roy</p>
                                <p><a href="https://cherylcam.com/">Cheryl</a></p>
                                <p><a href="https://mariusgessler.com/">Marius</a></p>
                                <p><a href="https://ysmatthew.com/">Matthew</a></p>
                            </span>
                        </section>
                        </Fade>
                        
                        <Fade big>
                        <section className='section-3'>
                            <span className='sectionNumber'>03</span>
                            <h2>Tools</h2>
                            <span className='description'>
                                <p>HTML, CSS, Sass, PHP, JavaScript, jQuery, WordPress, Git</p>
                                <p>InVision, Photoshop, Adobe XD</p>
                            </span>
                        </section>
                        </Fade>

                        <Fade big>
                        <section className='section-4'>
                            <span className='sectionNumber'>04</span>
                            <h2>Client Meeting</h2>
                            <span className='description'>
                                <h3>Requirements Gathering</h3>
                                <p>Our team met up with our client, the OAT program coordinator, to define the purpose and goals of the website wished to accomplish.</p>
                                <p>Functional Requirements Include:</p>
                                <ul>
                                    <li>Upload a schedule in .csv (comma separated values) format</li>
                                    <li>Easily update schedule</li>
                                    <li>Show job listings of office administrator positions from external sources</li>
                                </ul>

                                <h3>Information Architecture</h3>
                                <p>The information architecture was restructured to improve representations of pages by utilizing different titles and categories. The follwing information architecture also includes page templates we were going to use to build the custom theme.</p>
                                <img src='/images/oatInformationArchitecture.jpg' />
                                
                                <h3>Content</h3>
                                <p>The content was to be kept the same as the existing website with an additional feature to be able to change, edit, and add new content on the fly through the back-end of WordPress.</p>
                            </span>
                        </section>
                        </Fade>

                        <Fade big>
                        <section className='section-5'>
                            <span className='sectionNumber'>05</span>
                            <h2>Wireframes</h2>
                            <span className='description'>
                                <img src='/images/invisionOat.jpg' />
                            </span>
                        </section>
                        </Fade>

                        <div className='content portfolioConcepts'></div>

                        <Fade big>
                        <section className='section-6'>
                            <span className='sectionNumber'>06</span>
                            <h2>Prototype</h2>
                            <span className='description'>
                                <img src='/images/adobeXDOatHome.jpg' />
                                <img src='/images/adobeXDOatSchedule.jpg' />
                                <img src='/images/adobeXDOatCourses.jpg' />
                                <img src='/images/adobeXDOatCertifications.jpg' />
                                <img src='/images/adobeXDOatCareers.jpg' />
                                <img src='/images/adobeXDOatContact.jpg' />
                            </span>
                        </section>
                        </Fade>

                        <div className='content portfolioDesign'></div>

                        <Fade big>
                        <section className='section-7'>
                            <span className='sectionNumber'>07</span>
                            <h2>Code</h2>
                            <span className='description'>
                                
                            </span>
                        </section>
                        </Fade>
                    </div>

                    <Fade big>
                    <div className='pageBack'>
                        <a href='/#oat' className='pageBackBtn'>Back</a>
                    </div>
                    </Fade>
                </div>
            </>
        )
    }
}

export default projectOat;