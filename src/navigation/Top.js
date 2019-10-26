import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

class Top extends Component{
    render(){
        return(
            <>
                <a href='#' className='top'><FontAwesomeIcon icon={faAngleUp} size='3x'/></a>
            </>
        )
    }
}

export default Top;