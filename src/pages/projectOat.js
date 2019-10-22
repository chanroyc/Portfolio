import React, { Component } from 'react';
import Header from '../navigation/Header';
import Particles from 'react-particles-js';
import Fade from 'react-reveal';
import Gist from 'react-gist';

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
                                <a href='https://bcitoat.bcitwebdeveloper.ca/' target="_blank" rel="noopener noreferrer">View Live</a>
                            </div>
                            <div id="sd-container" href='#section-1'>
                                <div className="arrow"></div>
                                <div className="arrow"></div>
                            </div>
                        </div>
                        <div className='bannerImage portfolio'></div>
                    </div>

                    <div className='pageSections'>
                        
                        <section className='section-1'>
                            
                            <span className='sectionNumber'>01</span>
                            <h2>Overview</h2>
                            <span className='description'>
                                <Fade big><p>The Office Administrator with Technology program is a hands-on program from British Columbia Institute of Technology. Our team <a href='https://cherylcam.com/'>Cheryl</a>, <a href='https://mariusgessler.com/'>Marius</a>, and <a href='https://ysmatthew.com/ß'>Matthew</a> were tasked to redesign, rebuild, and migrate an existing static website using WordPress.</p></Fade>
                            </span>
                        </section>


                        <section className='section-2'>
                            <span className='sectionNumber'>02</span>
                            <h2>Team</h2>
                            <span className='description'>
                                <Fade big><p>Roy</p></Fade>
                                <Fade big><p><a href="https://cherylcam.com/">Cheryl</a></p></Fade>
                                <Fade big><p><a href="https://mariusgessler.com/">Marius</a></p></Fade>
                                <Fade big><p><a href="https://ysmatthew.com/">Matthew</a></p></Fade>
                            </span>
                        </section>
                        
                        <section className='section-3'>
                            <span className='sectionNumber'>03</span>
                            <h2>Tools</h2>
                            <span className='description'>
                                <Fade big><p>HTML, CSS, Sass, PHP, JavaScript, jQuery, WordPress, Git</p></Fade>
                                <Fade big><p>InVision, Photoshop, Adobe XD</p></Fade>
                            </span>
                        </section>

                        <section className='section-4'>
                            <span className='sectionNumber'>04</span>
                            <h2>Client Meeting</h2>
                            <span className='description'>
                                <Fade big><h3>Requirements Gathering</h3></Fade>
                                <Fade big><p>Our team met up with our client, the OAT program coordinator, to define the purpose and goals of the website wished to accomplish.</p></Fade>
                                <Fade big><p>Functional Requirements Include:</p></Fade>
                                <ul>
                                    <Fade big><li>Upload a schedule in .csv (comma separated values) format</li></Fade>
                                    <Fade big><li>Easily update schedule</li></Fade>
                                    <Fade big><li>Show job listings of office administrator positions from external sources</li></Fade>
                                </ul>

                                <Fade big><h3>Information Architecture</h3></Fade>
                                <Fade big><p>The information architecture was restructured to improve representations of pages by utilizing different titles and categories. The follwing information architecture also includes page templates we were going to use to build the custom theme.</p></Fade>
                                <Fade big><img src='/images/oatInformationArchitecture.jpg' alt='Information Architecture of the BCIT OAT website'/></Fade>
                                
                                <Fade big><h3>Content</h3></Fade>
                                <Fade big><p>The content was to be kept the same as the existing website with an additional feature to be able to change, edit, and add new content on the fly through the back-end of WordPress.</p></Fade>
                            </span>
                        </section>


                        <section className='section-5'>
                            <span className='sectionNumber'>05</span>
                            <h2>Wireframes</h2>
                            <span className='description'>
                                <Fade big><img src='/images/invisionOat.jpg' alt='InVision Wireframe of the BCIT OAT website'/></Fade>
                            </span>
                        </section>

                        <div className='content portfolioConcepts'></div>

                        <section className='section-6'>
                            <span className='sectionNumber'>06</span>
                            <h2>Prototype</h2>
                            <span className='description'>
                                <Fade big><img src='/images/adobeXDOatHome.jpg' alt='Adobe XD Prototype of the Home Page of the BCIT OAT website'/></Fade>
                                <Fade big><img src='/images/adobeXDOatSchedule.jpg' alt='Adobe XD Prototype of the Schedule Page of the BCIT OAT website'/></Fade>
                                <Fade big><img src='/images/adobeXDOatCourses.jpg' alt='Adobe XD Prototype of the Courses Page of the BCIT OAT website'/></Fade>
                                <Fade big><img src='/images/adobeXDOatCertifications.jpg' alt='Adobe XD Prototype of the Certifications Page of the BCIT OAT website'/></Fade>
                                <Fade big><img src='/images/adobeXDOatCareers.jpg' alt='Adobe XD Prototype of the Careers Page of the BCIT OAT website'/></Fade>
                                <Fade big><img src='/images/adobeXDOatContact.jpg' alt='Adobe XD Prototype of the Contact Page of the BCIT OAT website'/></Fade>
                            </span>
                        </section>

                        <div className='content portfolioDesign'></div>

                        <section className='section-7'>
                            <span className='sectionNumber'>07</span>
                            <h2>Code</h2>
                            <span className='description'>
                                <Fade big><p>The following code snippet parses job postings from an XML document provided by <a href='https://www.civicjobs.ca/' rel='nofollow'>Civic Jobs</a> from their RSS feed. It is parsed manually without the use of plugins by using SimpleXML which is an extension of PHP which converts XML to an object that can be processed with normal property selectors and array iterators.</p></Fade>
                                <Gist id='1b3c4316cc5c298120c0598f02061fa1' />
                            </span>
                        </section>
                    </div>


                    <div className='pageBack'>
                        <Fade big><a href='/#oat' className='pageBackBtn'>Back</a></Fade>
                    </div>
                </div>
            </>
        )
    }
}

export default projectOat;