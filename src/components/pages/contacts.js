import React, {Component} from 'react';
import {Well} from 'react-bootstrap';

class Contacts extends Component {
    render(){
        return (
            <div style={{marginTop: '80px'}}>
                <Well className="text-center">
                    <h1><b>Contact Us</b></h1>
                    <hr/>
                    <h3>Email</h3>
                    <h4>SportsTalkPro@gmail.com</h4>
                </Well>
            </div>
        )
    }
}

export default Contacts;