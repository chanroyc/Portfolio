import React, { Component } from 'react';
import Header from '../navigation/Header';
import Particles from 'react-particles-js';
import Fade from 'react-reveal';

import Top from "../navigation/Top";
import "../scripts/scrollTop";

class projectVulcan extends Component {
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
                                <h1>Vulcan Industries</h1>
                                <a href='https://vulcan.chanroyc.ca/' target="_blank" rel="noopener noreferrer">View Live</a>
                            </div>
                            <div id="sd-container" href='#section-1'>
                                <div className="arrow"></div>
                                <div className="arrow"></div>
                            </div>
                        </div>
                        <div className='bannerImage vulcan'></div>
                    </div>

                    <div className='pageSections'>
                        <section className='section-1'>
                            <span className='sectionNumber'>01</span>
                            <h2>Overview</h2>
                            <span className='description'>
                                <Fade big><p><a href='https://vulcanindustries.com/' rel='nofollow'>Vulcan Industries</a> is a company that fabricates wastewater screening equipment or aiding in the installation, troubleshooting, and repairs.</p></Fade>
                                <Fade big><p>Using pre-designed mock-ups of <a href='https://vulcanindustries.com/' rel='nofollow'>Vulcan Industries' website</a>, <a href="https://stevecodeguy.com/">Steve</a> and I created a fully reponsive web page. This project was version controlled and stored on <a href="https://github.com/chanroyc/Vulcan-Industries">our team's repository</a>.</p></Fade>
                            </span>
                        </section>
                        
                        <section className='section-2'>
                            <span className='sectionNumber'>02</span>
                            <h2>Team</h2>
                            <span className='description'>
                                <Fade big><p>Roy</p></Fade>
                                <Fade big><p><a href="https://stevecodeguy.com/">Steve Code Guy</a></p></Fade>
                            </span>
                        </section>

                        <section className='section-3'>
                            <span className='sectionNumber'>03</span>
                            <h2>Development</h2>
                            <span className='description'>
                                <Fade big><p>The website was developed using HTML, CSS, Sass, JavaScript, jQuery, gulp.js. <a href='https://stevecodeguy.com'>Steve</a> and I divided the work by separating the page into sections which were then coded separately since the structure of each section was different. In comparison to the official website, we followed current conventions by centering elements using transforms instead of padding elements. Responsiveness across various devices was also enhanced.</p></Fade>
                            </span>
                        </section>

                        <div className='content vulcanDevelopment'></div>

                        <section className='section-4'>
                            <span className='sectionNumber'>04</span>
                            <h2>Code</h2>
                            <span className='description'>
                                <Fade big><p>The front page of the website contains a slideshow. I created my own slidehow which features previous/next buttons and pagination.</p></Fade>
                                <Fade big><p>Initially, repeated clicks on the previous/next buttons were possible before the animations completed which to a waterfall of delayed animations. I created a variable which tracks whether a button is clicked to prevent users from repeatedly clicking to prevent this issue.</p></Fade>
                                <Fade big><p>The showSlides() and prevSlides() functions could be condensed into 1 function to further optimize efficiency which would lead to cleaner code.</p></Fade>
                                <Fade big><p>Below is a sample on CodePen.</p></Fade>
                                <Fade big>
                                    <p>
                                        <iframe height="265" scrolling="no" title="Slideshow" src="https://codepen.io/chanroyc-the-looper/embed/abbbVmb?height=265&theme-id=dark&default-tab=js,result" frameBorder="no" allowtransparency="true" allowFullScreen={true} className='codepen'></iframe>
                                    </p>
                                </Fade>
                            </span>
                        </section>

                        <div className='content vulcanCode'></div>
                    </div>

                    <div className='pageBack'>
                        <Fade big><a href='/#vulcan' className='pageBackBtn'>Back</a></Fade>
                    </div>

                    <Top />
                </div>
            </>
        )
    }
}

export default projectVulcan;