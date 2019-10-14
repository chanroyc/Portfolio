import React, { Component } from 'react';

class HeaderVulcan extends Component {
    render(){
        return (
            <>
                <header className='headerVulcan'>
                    <h1><a href='javascript:history.back()' className='logo vulcan'><i className="arrow left"></i> Vulcan Industries</a></h1>
                    <h1><a href='https://vulcan.chanroyc.ca' className='viewLive' target="_blank">View Live</a></h1>
                </header>
            </>
        )
    }
}

export default HeaderVulcan;