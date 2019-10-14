import React, { Component } from 'react';
import HeaderPortfolio from '../navigation/HeaderPortfolio';
import "../scripts/scrollTop";

import $ from 'jquery';
import 'jquery-ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

class projectPortfolio extends Component {
    render(){
        return(
            <>
                <HeaderPortfolio />
                <div className='projectPortfolio'>
                    <div className='projectBanner portfolio'></div>

                    <div className='content'>
                        <h1><span className='headingNum'>01</span> Overview</h1>

                        <p>The vision that I have for this portfolio is to create a minimalistic space to display my work. It began as an idea that stemmed from 2 of my biggest interests - cats and stars, which I wanted to integrate into my design.</p>

                        <h1><span className='headingNum'>02</span> Tech Stack</h1>
                        <p>HTML, CSS, Sass, JavaScript, jQuery, React</p>

                        <h1><span className='headingNum'>03</span> Idea</h1>

                        <p>Months prior, I created a prototype using Adobe XD to plan out my ideas. I revisited the prototype before resketching wireframes, to which I concluded that I was not going to use the design from the prototype.</p>

                        <a href='https://xd.adobe.com/view/14bbda5e-7845-484f-45b7-6338ae71bc3d-628a/'><img src='/images/adobeXDPortfolio'></img></a>

                        <h1><span className='headingNum'>04</span> Wireframes</h1>

                        <p>The wireframes are sketched on InVision. As I mentioned, my vision is to create a minimalistic space to display my work. I did not want to make my portfolio overly busy, therefore, my solution is an attempt at making proper use of space and sizing of elements so it would not appear empty.</p>
                        <img src='/images/invisionPortfolio'></img>

                        <h1><span className='headingNum'>0?</span> Special Thanks</h1>
                        
                        <p><a href='https://www.instagram.com/rianaportillo/'>Riana Portillo</a> for sketching the cats and design advising.</p>
                    </div>
                </div>
                <a href='#' className='top'><FontAwesomeIcon icon={faAngleUp} size='3x' color="white"/></a>
            </>
        )
    }
}

export default projectPortfolio;