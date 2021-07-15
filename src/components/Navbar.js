import React from 'react'
import '../App.css'
import { GiCloudyFork } from "react-icons/gi";
function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg navbar-light" style={{ "background-color": "rgb(238,24,96)" }}>
            
            {/* <img src="/images/pic12.jpg" id="myImageLogo"/> */}
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" style={{ "font-weight": "bold" }}>SGADC</a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{ "float": "right" }}>
                
                <ul class="navbar-nav mr-auto" style={{ "float": "right" }}>
                    <li class="nav-item active">
                        <a class="nav-link" href="#" style={{ "color": "white" }}>Home </a>
                    </li>
                </ul>
                <li class="nav-item" style={{ "float": "right" }}>
                    <a class="nav-link" href="#" style={{ "color": "white" }}>About us</a>
                </li>
                <li class="nav-item" style={{ "float": "right" }}>
                    <a class="nav-link" href="#" style={{ "color": "white" }}>Programms</a>
                </li>

                <li class="nav-item" style={{ "float": "right" }}>
                    <a class="nav-link" href="#" style={{ "color": "white" }}>Contact us</a>
                </li>                
            </div>
        </nav>
    )
}

export default Navbar
