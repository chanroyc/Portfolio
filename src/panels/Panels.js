import React, { Component } from 'react';

import Home from './Home';
import Oat from './Oat';
import Vulcan from './Vulcan';
import About from './About';
import Header from '../navigation/Header';

import Particles from 'react-particles-js';

class Panels extends Component {
    componentDidMount(){
        require('../scripts/scroll');
        require('../scripts/expand');
    }

    componentDidUpdate(){
        require('../scripts/scroll');
        require('../scripts/expand');
    }

    render(){
        return (
            <>
                {/* Header */}
                <Header />

                {/* Particles Background */}
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 50,
                                "density": {
                                    "enable": true,
                                    "value_area": 1500
                                }
                            },
                            "line_linked": {
                                "enable": true,
                                "opacity": 0.02
                            },
                            "move": {
                                "direction": "right",
                                "speed": 0.05
                            },
                            "size": {
                                "value": 1.5
                            },
                            "opacity": {
                                "anim": {
                                    "enable": true,
                                    "speed": 1,
                                    "opacity_min": 0.05
                                }
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onclick": {
                                    "enable": true,
                                    "mode": "push"
                                }
                            },
                            "modes": {
                                "push": {
                                    "particles_nb": 1
                                }
                            }
                        },
                        "retina_detect": true
                    }} />

                {/* Home Panel */}
                <Home />

                {/* BCIT OAT Panel */}
                <Oat />

                {/* Vulcan Panel */}
                <Vulcan />

                {/* About Panel */}
                <About />
            </>
        )
    }
}

export default Panels;