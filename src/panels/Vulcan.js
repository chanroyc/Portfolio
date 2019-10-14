import React, { Component } from 'react';

class Vulcan extends Component {
    render(){
        return (
            <>
                <section id="vulcan" className="panel vulcan" data-section-name="vulcan">
                    <div className='project'>
                        <div className='projectImage vulcan'>
                            <div className='projectTitle vulcan'>
                                <h1 className='projectTitlePrimary vulcan'>Vulcan</h1>
                                <h1 className='projectTitleSecondary vulcan'>Industries</h1>
                            </div>

                            <div className='projectImageContainer vulcan'>
                                <div className='projectNumberWrapper vulcan'>
                                    <h1 className='projectNumber vulcan'>02</h1>
                                </div>
                                <img src='/images/cat-hide-left.png' className='catHide vulcan'></img>
                            </div>

                            <a href="vulcan" className='btn vulcan'>Show</a>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Vulcan;