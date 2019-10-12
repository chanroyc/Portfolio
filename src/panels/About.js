import React, { Component } from 'react';

class About extends Component {
    render(){
        return(
            <>
                <section id="about" className="panel about" data-section-name="about">
                    <img src='/images/cat-hide.png' className='catHide about'></img>
                    <img src='/images/cat-hide-wink.png' className='catHideWink about'></img>

                    <div class='aboutContent'>
                        <h1 className='titleAbout'>About Me</h1>
                        <h2 className='tagline'>Cats are great. So are dogs, but I like cats more. :3</h2>

                        <div className='toolbox'>
                            <div className='techStack'>
                                <h3>Tech Stack</h3>
                                HTML5,
                                CSS3,
                                JavaScript,
                                Sass,
                                Python,
                                Java,
                                C++,
                                jQuery,
                                PHP,
                                WordPress,
                                React.js,
                                mySQL,
                                express.js,
                                Node.js
                            </div>

                            <div className='designStack'>
                                <h3>Design Stack</h3>
                                Photoshop,
                                Illustrator,
                                Adobe Xd,
                                InVision,
                                Balsamiq
                            </div>
                        </div>

                        <a href='about.html' className='btn about'>Read More</a>
                    </div>
                </section>
            </>
        )
    }
}

export default About;