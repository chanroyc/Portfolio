import React, { Component } from 'react';

class HeaderPortfolio extends Component {
    render(){
        return (
            <>
                <header className='headerPortfolio'>
                    <h1><a href='javascript:history.back()' className='logo portfolio'><i className="arrow left"></i></a></h1>
                </header>
            </>
        )
    }
}

export default HeaderPortfolio;