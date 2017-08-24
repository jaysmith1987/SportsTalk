"use strict"
import React from 'react';

function timeTick(){
    const element = (
        <div>
            <h1>The time is: </h1>
            <h2>time: { new Date().toLocaleTimeString()}</h2>
        </div>
    )
}



class Footer extends React.Component{
    render(){
        return (
            <footer className="footer text-center">
             <div className="container" >
                <p className="footer-text">Copyright 2017 SportsTalkPro. All rights reserved </p>
            </div>
           </footer>
        )
    }
}

export default Footer;