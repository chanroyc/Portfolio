import React, { Component } from 'react';
import HeaderVulcan from '../navigation/HeaderVulcan';
import "../scripts/scrollTop";

import $ from 'jquery';
import 'jquery-ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

class projectVulcan extends Component {
    render(){
        return(
            <>
                <HeaderVulcan />
                <div className='projectVulcan'>
                    <div className='projectBanner vulcan'></div>
                    <div className='content'>
                        <h1><span className='headingNum'>01</span> Overview</h1>
                        <p>Using pre-designed mock-ups of <a href='https://vulcanindustries.com/' rel='nofollow'>Vulcan Industries' website</a>, <a href="https://stevecodeguy.com/">Steve</a> and I created a fully reponsive web page. This project was version controlled and stored on <a href="https://github.com/chanroyc/Vulcan-Industries">our team's repository</a>.</p>

                        <h1><span className='headingNum'>02</span> Team</h1>
                        <p>
                            Roy<br />
                            <a href="https://stevecodeguy.com/">Steve The Code Guy</a>
                        </p>

                        <h1><span className='headingNum'>03</span> Tech Stack</h1>
                        <p>HTML, CSS, Sass, JavaScript, jQuery, gulp.js</p>

                        <h1><span className='headingNum'>04</span> Code</h1>
                        <p>The front page of the website contains a slideshow. I did not have to reinvent the wheel, but, I thought it would be fun to create my own. The slideshow features a previous/next button and pagination.</p>
                        <p>I encountered some challenges and time constraints while creating the slideshow which led to the code being inefficient. One of the challenges was repeated clicks on the previous/next button immediately moving to the next slide before the slide animation is completed. I created a variable that tracks whether a button is clicked to prevent users from repeatedly clicking the buttons before the animation completes.</p>
                        <p>The showSlides() and prevSlides() functions could be condensed into 1 function to improve code efficiency and optimization.</p>

                        <p>
                            <iframe height="265" scrolling="no" title="Slideshow" src="https://codepen.io/chanroyc-the-looper/embed/abbbVmb?height=265&theme-id=dark&default-tab=js,result" frameBorder="no" allowtransparency="true" allowFullScreen={true} className='codepen'>
                                See the Pen <a href='https://codepen.io/chanroyc-the-looper/pen/abbbVmb'>Slideshow</a> by chanroyc
                                (<a href='https://codepen.io/chanroyc-the-looper'>@chanroyc-the-looper</a>) on <a href='https://codepen.io'>CodePen</a>.
                            </iframe>
                        </p>

                        <h1><span className='headingNum'>05</span> Showcase</h1>

                        <p>The following video shows the responsiveness of the website. The page is optimized for all devices. Check out the live demo website <a href='https://vulcan.chanroyc.ca/'>here</a>.</p>

                        <video width="100%" height="100%" controls>
                            <source src='/images/vulcan.mp4' type="video/mp4" />
                        </video>
                    </div>
                </div>
                <a href='#' className='top'><FontAwesomeIcon icon={faAngleUp} size='3x' color="white"/></a>
            </>
        )
    }
}

export default projectVulcan;