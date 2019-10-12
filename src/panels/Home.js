import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui';

class Home extends Component {
    render(){
        return(
            <>
                <section id="home" className="panel home" data-section-name="home">
                    <div class='name'>
                        <h1 className='firstName'>Roy</h1>
                        <h1 className='lastName'>Chan</h1>
                    </div>

                    <img src="/images/rings.svg" className='rings'></img>
                    <img src="/images/cat.svg" className='cat'></img>
                    <span className='scroll-down animated'>Scroll Down </span>
                </section>
            </>
        )
    }
}

export default Home;