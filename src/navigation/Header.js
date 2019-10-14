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

                    <nav>
                        <div className='navContainer'>
                            <ul className='links'>
                                <li><a href='/#home' className='nav-home' data-text="Home" onClick={(e)=>this.handleMenu(e)}>Home</a></li>
                                <li><a href='/#work' className = 'nav-work' data-text="Work" onClick={(e)=>this.handleMenu(e)}>Work</a></li>
                                <li><a href='/#about' className='nav-about' data-text="About" onClick={(e)=>this.handleMenu(e)}>About</a></li>
                                <li><a href='mailto: contact@chanroyc.ca' className='nav-contact' data-text="Contact" onClick={(e)=>this.handleMenu(e)}>Contact</a></li>
                            </ul>

                            <ul className='socialLinks'>
                                <li><a href='https://github.com/chanroyc' target="_blank"><svg class='github' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 .4C7.2.4 0 7.6 0 16.4c0 7.1 4.6 13.1 10.9 15.2.8.1 1.1-.3 1.1-.8v-2.7c-4.5 1-5.4-2.1-5.4-2.1-.7-1.8-1.8-2.3-1.8-2.3-1.5-1 .1-1 .1-1 1.6.1 2.5 1.6 2.5 1.6 1.4 2.4 3.7 1.7 4.7 1.3.1-1 .6-1.7 1-2.1-3.6-.4-7.3-1.8-7.3-7.9 0-1.7.6-3.2 1.6-4.3-.2-.4-.7-2 .2-4.2 0 0 1.3-.4 4.4 1.6 1.3-.4 2.6-.5 4-.5s2.7.2 4 .5C23.1 6.6 24.4 7 24.4 7c.9 2.2.3 3.8.2 4.2 1 1.1 1.6 2.5 1.6 4.3 0 6.1-3.7 7.5-7.3 7.9.6.5 1.1 1.5 1.1 3v4.4c0 .4.3.9 1.1.8C27.4 29.5 32 23.5 32 16.4c0-8.8-7.2-16-16-16z" fill-rule="evenodd" clip-rule="evenodd" fill="#fff"/></svg></a></li>
                                <li><a href='https://linkedin.com/chanroyc' target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm-3.9 22.6H8.8V12.2H12l.1 10.4zm-1.7-11.7c-1 0-1.7-.7-1.7-1.6 0-.9.7-1.6 1.7-1.6s1.7.7 1.7 1.6c.1.9-.6 1.6-1.7 1.6zm13.5 11.7h-3.2v-5.8c0-1.3-.5-2.3-1.6-2.3-.9 0-1.4.6-1.7 1.2-.1.2-.1.5-.1.8v6H14v-7.1c0-1.3 0-2.4-.1-3.3h2.8l.1 1.4h.2c.4-.7 1.5-1.7 3.2-1.7 2.1 0 3.7 1.4 3.7 4.5v6.3z" fill="#fff"/></svg></a></li>
                            </ul>
                        </div>
                    </nav>

                    <HamburgerSVG />
                </header>
            </>
        )
    }
}

export default Header;