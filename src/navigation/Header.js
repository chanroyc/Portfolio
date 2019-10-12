import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui';

import HamburgerSVG from './Hamburger';

class Header extends Component {
    constructor(props){
        super(props);
        this.handleMenu = this.handleMenu.bind(this);
    }

    handleMenu(e){
        $('.ham.hamRotate.ham1').toggleClass('active');
        $('nav').slideToggle();
    }

    render(){
        return (
            <>
                <header>
                    <h1><a href='/#home' className='logo'>chan<span className='roy'>roy</span>c</a></h1>

                    <div className='nav-links'>
                        <a href='https://github.com/chanroyc/' target="_blank">GitHub</a>
                        <a href='https://www.linkedin.com/in/chanroyc/' target="_blank">Linkedin</a>
                    </div>

                    <nav>
                        <ul>
                            <li><a href='/#home' className='nav-home' data-text="Home" onClick={(e)=>this.handleMenu(e)}>Home</a></li>
                            <li><a href='/#works' className = 'nav-works' data-text="Works" onClick={(e)=>this.handleMenu(e)}>Works</a></li>
                            <li><a href='/#about' className='nav-about' data-text="About" onClick={(e)=>this.handleMenu(e)}>About</a></li>
                            <li><a href='contact' className='nav-contact' data-text="Contact" onClick={(e)=>this.handleMenu(e)}>Contact</a></li>
                        </ul>
                    </nav>

                    <HamburgerSVG />
                </header>
            </>
        )
    }
}

export default Header;