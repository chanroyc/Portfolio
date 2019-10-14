import React, { Component } from 'react';

class Portfolio extends Component {
    render(){
        return (
            <>
                <section id="portfolio" className="panel portfolio" data-section-name="portfolio">
                    <div className='project'>
                        <div className='projectImage portfolio'>
                            <div className='projectTitle portfolio'>
                                <h1 className='projectTitlePrimary portfolio'>Portolio</h1>
                                <h1 className='projectTitleSecondary portfolio'>App</h1>
                            </div>

                            <div className='projectImageContainer portfolio'>
                                <div className='projectNumberWrapper portfolio'>
                                    <h1 className='projectNumber portfolio'>03</h1>
                                </div>
                            </div>

                            <a href="portfolio" className='btn portfolio'>Show</a>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Portfolio;