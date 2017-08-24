import React, {Component}from 'react';

import {Panel, Well, FormGroup, ControlLabel, FormControl, Row, Col, Button} from 'react-bootstrap';
import Create from './create';



class Posts extends Component {
    constructor(props){
        super(props);
        this.state = { category: 'select', title: '', isNull: false, isEmpty: false};
    }

     handleCategory(event){
        this.setState({category: event.target.value})
    }

    handleChange(event){
        this.setState({title: event.target.value.substr(0, 25)})
    }

   

    addPost(event){
        event.preventDefault();
        if(this.state.category === 'select'){
            this.setState({isNull: true})
        }
        if(this.state.title === ''){
            this.setState({isEmpty: true})
        }
        console.log(this.state.category);
        console.log(this.state.title);
    
    }


    render(){

        return (
            <div className="container body">
            <Panel  style={{marginTop:'60px', backgroundColor: 'white', padding: '1px', border:'2px solid black'}}>
                &nbsp;
            <Well>
                <form onSubmit={this.addPost.bind(this)} >
                <Row>
                <ControlLabel>Category:</ControlLabel>
                <FormGroup controlId="formControlsSelect" >
                <FormControl  componentClass="select" type="select" onChange={this.handleCategory.bind(this)} value={this.state.category}>
                    <option value="select" disabled>Select Category</option>
                    <option value="Basketball">Basketball</option>
                    <option value="Football">Football</option>
                    <option value="Baseball">Baseball</option>
                </FormControl>
                {this.state.category === 'select' && this.state.isNull === true && <span style={{color: 'red', fontWeight: 'bold'}}>Error Please Select a Category!</span> }
                </FormGroup>
                <FormGroup>
                <ControlLabel>Title:</ControlLabel>
                <FormControl
                    name="title"
                    placeholder="Enter title here"
                    spellCheck="true"
                    value={this.state.title}
                    onChange={this.handleChange.bind(this)}
                />
                {this.state.title === '' && this.state.isEmpty === true && <span style={{color: 'red', fontWeight:'bold'}}>Error Please Select a Title!</span>}
                </FormGroup>
                </Row>
                <ControlLabel>Create Post:</ControlLabel>
                <Create/>
                  <Row>
                <FormGroup style={{marginTop:'10px'}}>
                <Col xs={6} sm={4}>
                    <Button  bsStyle="info" type="submit">
                     Submit Post
                    </Button>
                </Col>
                </FormGroup>
                </Row>
                </form>
            </Well>
            </Panel>
            </div>
        )
    }
}

export default Posts;