import React, { Component } from 'react';

class HeaderOat extends Component {
    render(){
        return (
            <>
                <header className='headerOat'>
                    <h1><a href='javascript:history.back()' className='logo oat'><i className="arrow left"></i> BCIT OAT</a></h1>
                </header>
            </>
        )
    }
}

export default HeaderOat;