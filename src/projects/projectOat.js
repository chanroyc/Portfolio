import React, { Component } from 'react';
import HeaderOat from '../navigation/HeaderOat';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

class projectOat extends Component {   
    render(){
        return(
            <>
                <HeaderOat />
                <div class='projectOat'>
                    <div class='projectBanner oat'></div>
                    <div class='content'>
                        <h1><span class='headingNum'>01</span> Overview</h1>
                        <p>Office Administrator with Technnology is a hands-on program provided by British Columbia Institute of Technology. As my final project, my team and I built the program's website on WordPress using the starter theme, underscores.</p>

                        <h1><span class='headingNum'>02</span> Team</h1>
                        <p>
                            Roy<br />
                            <a href="https://cherylcam.com">Cheryl Cam</a><br />
                            <a href="https://mariusgessler.com">Marius Gessler</a><br />
                            <a href="https://ysmatthew.com">Matthew Yuen</a>
                        </p>

                        <h1><span class='headingNum'>03</span> Tech Stack</h1>
                        <p>HTML, CSS, Sass, PHP, JavaScript, jQuery, gulp.js, WordPress, REST</p>

                        <h1><span class='headingNum'>04</span> Wireframes (Mobile)</h1>

                        <p>
                            <h1>Home</h1>
                            <img src='/images/invisionOatHome.png' className='wireframes oat'/>
                            <h1>Schedule</h1>
                            <img src='/images/invisionOatSchedule.png' className='wireframes oat'/>
                            <h1>Courses</h1>
                            <img src='/images/invisionOatCourses.png' className='wireframes oat'/>
                            <h1>Certifications</h1>
                            <img src='/images/invisionOatCertifications.png' className='wireframes oat'/>
                            <h1>Careers</h1>
                            <img src='/images/invisionOatCareers.png' className='wireframes oat'/>
                            <h1>Contact</h1>
                            <img src='/images/invisionOatContact.png' className='wireframes oat'/>
                        </p>

                        <h1><span class='headingNum'>05</span> Prototype</h1>

                        <h1><span class='headingNum'>06</span> Showcase</h1>
                    </div>
                </div>
                <a href="#" className='top'><FontAwesomeIcon icon={faAngleUp} size='3x' color="white"/></a>
            </>
        )
    }
}

export default projectOat;