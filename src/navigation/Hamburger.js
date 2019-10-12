import React, { Component } from 'react';
import $ from 'jquery';

class HamburgerSVG extends Component{
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
                <svg xmlns='www.w3.org/2000/svg' className="ham hamRotate ham1" viewBox="0 0 100 100" onClick={(e) => this.handleMenu(e)}>
                    <path 
                        className="line upper"
                        d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" 
                    />
                    
                    <path
                        className="line middle"
                        d="m 30,50 h 40" 
                    />
                    
                    <path
                        className="line lower"
                        d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
                    />
                </svg>
            </>
        )
    }
}

export default HamburgerSVG;