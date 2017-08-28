"use strict"
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import {Panel} from 'react-bootstrap';
import {connect} from 'react-redux';

class Main extends React.Component {
    render(){
        return(
            <div className="panel panel-default">
            <Header classname="Panel-Header"/>
            <Panel className="Panel-Body"> {this.props.children} </Panel>
            <Footer className="Panel-Footer"/>
            </div>
        );
    }
}

// function mapStateToProps(state){
//     return {
//         totalQty: state.cart.totalQty
//     }
// 

export default Main;