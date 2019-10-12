import React, { Component } from 'react';

class HeaderVulcan extends Component {
    render(){
        return (
            <>
                <header className='headerVulcan'>
                    <h1><a href='/#vulcan' className='logo vulcan'><i className="arrow left"></i> Vulcan Industries</a></h1>
                    <h1><a href='https://vulcan.chanroyc.ca' className='viewLive'>View Live</a></h1>
                </header>
            </>
        )
    }
}

export default HeaderVulcan;