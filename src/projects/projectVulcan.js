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
                        <p>Using pre-designed mock-ups of Vulcan Industries' website, <a href="https://stevecodeguy.com/">Steve</a> and I created a fully reponsive web page. This project was version controlled and stored on <a href="https://github.com/chanroyc/Vulcan-Industries">our team's repository</a>.</p>

                        <h1><span className='headingNum'>02</span> Team</h1>
                        <p>
                            Roy<br />
                            <a href="https://stevecodeguy.com/">Steve The Code Guy</a>
                        </p>

                        <h1><span className='headingNum'>03</span> Tech Stack</h1>
                        <p>HTML, CSS, Sass, JavaScript, jQuery, gulp.js</p>

                        <h1><span className='headingNum'>04</span> Code</h1>
                        <p>Created a carousel image gallery for the front page with jQuery.</p>

                        <p>
                            <iframe height="265" scrolling="no" title="Slideshow" src="https://codepen.io/chanroyc-the-looper/embed/abbbVmb?height=265&theme-id=dark&default-tab=js,result" frameBorder="no" allowtransparency="true" allowFullScreen={true} className='codepen'>
                                See the Pen <a href='https://codepen.io/chanroyc-the-looper/pen/abbbVmb'>Slideshow</a> by chanroyc
                                (<a href='https://codepen.io/chanroyc-the-looper'>@chanroyc-the-looper</a>) on <a href='https://codepen.io'>CodePen</a>.
                            </iframe>
                        </p>

                        <h1><span className='headingNum'>05</span> Showcase</h1>

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