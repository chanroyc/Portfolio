import React, { Component } from 'react';

class Oat extends Component {   
    render(){
        return(
            <>
                <section id="oat" className="panel oat" data-section-name="oat">
                    <div className='project'>
                        <div className='projectImage oat'>
                            
                            <div className='projectTitle oat'>
                                <h1 className='projectTitlePrimary oat'>BCIT</h1>
                                <h1 className='projectTitleSecondary oat'>OAT</h1>
                            </div>

                            <div className='projectImageContainer oat'>
                                <h1 className='projectNumber oat'>01</h1>
                                <img src='/images/cat-hide.png' className='catHide oat'></img>
                            </div>
                            
                            <a href="oat" className='btn oat'>Show</a>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Oat;