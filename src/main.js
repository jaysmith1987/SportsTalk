"use strict"
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import {connect} from 'react-redux';

class Main extends React.Component {
    render(){
        return(
            <div>
            <Header/>
            {this.props.children}
            <Footer/>
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