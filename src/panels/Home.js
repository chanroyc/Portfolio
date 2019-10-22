import React, { Component } from 'react';
import 'jquery-ui';

class Home extends Component {
    render(){
        return(
            <>
                <section id="home" className="panel home" data-section-name="home">
                    <div className='intro'>
                        <h1 className='hi'>Hi, I'm</h1>
                        <h1 className='name'>R<img src='/images/cat.png' alt="Sketch of cat's head in place of the letter O"/>Y</h1>
                        <h1 className='sub'>Developer <span className='and'>&</span> Designer</h1>
                        <h1></h1>
                    </div>
                    <span className='scroll-down animated'>Scroll Down </span>
                </section>
            </>
        )
    }
}

export default Home;