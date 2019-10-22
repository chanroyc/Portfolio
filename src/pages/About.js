import React, { Component } from 'react';
import Header from '../navigation/Header';
import Particles from 'react-particles-js';
import Fade from 'react-reveal';

class About extends Component {
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
                                <h1>About Me</h1>
                            </div>
                            <div id="sd-container">
                                <div class="arrow"></div>
                                <div class="arrow"></div>
                            </div>
                        </div>
                        <div className='bannerImage about'></div>
                    </div>

                    <div class='pageSections'>
                        <section className='section-1'>
                            <span class='sectionNumber'>01</span>
                            <h2>Who I Am</h2>
                            <span class='description'>
                                <Fade big><p>Hi! I'm Roy. Glad to have you here. Welcome to my portfolio!</p></Fade>
                                <Fade big><p>I'm a developer and designer from Vancouver, B.C. who builds fluid, responsive, modern and alluring websites with phenomenal user experiences, but of course, that's a matter of perspective! If there's something that you believe I could improve on, please let me know. I'm open to suggestions!</p></Fade>
                            </span>
                        </section>

                        <section className='section-2'>
                            <span class='sectionNumber'>02</span>
                            <h2>What I love</h2>
                            <span class='description'>
                                <Fade big><p>If you haven't noticed already, I love cats and stars! &#128571; &#127775;</p></Fade>
                                <Fade big><p> I used to cycle, however, it's more enjoyable cycling with others and I currently don't know anyone who does. If you cycle, let's chat over a ride!</p></Fade>
                                <Fade big><p>In my free time, you'll catch me either looking for something new to learn, spending time with friends, or scouring for shows on Netflix.</p></Fade>
                            </span>
                        </section>

                        <section className='section-3'>
                            <span class='sectionNumber'>03</span>
                            <h2>Education</h2>
                            <span class='description'>
                                <div class='certification'>
                                    <Fade big><h3>Technical Web Design Certificate</h3></Fade>
                                    <Fade big><p>May &ndash; October 2019</p></Fade>
                                    <Fade big><p>British Columbia Institute of Technology</p></Fade>
                                </div>

                                <div class='certification'>
                                    <Fade big><h3>Bachelor of Science in Computing Science</h3></Fade>
                                    <Fade big><p>September 2012 &ndash; December 2017</p></Fade>
                                    <Fade big><p>Simon Fraser University</p></Fade>
                                </div>
                            </span>
                        </section>

                        <section className='section-4'>
                            <span class='sectionNumber'>04</span>
                            <h2>Tech Stack</h2>
                            <span class='description'>
                                <Fade big><p>HTML, CSS, Sass, JavaScript, jQuery, React, PHP, Python, Java, C++, mySQL, Express.js, Node.js</p></Fade>
                            </span>
                        </section>

                        <section className='section-5'>
                            <span class='sectionNumber'>05</span>
                            <h2>Design Stack</h2>
                            <span class='description'>
                                <Fade big><p>Photoshop, Illustrator, Adobe XD, InVision, Balsamiq</p></Fade>
                            </span>
                        </section>
                    </div>

                    <div className='pageBack'>
                        <Fade big><a href='/#vulcan' className='pageBackBtn'>Back</a></Fade>
                    </div>
                </div>
            </>
        )
    }
}

export default About;