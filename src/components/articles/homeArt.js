import React, {Component} from 'react';
import {Panel, Well} from 'react-bootstrap';

class HomeArticle extends Component {
    render(){
        return(
            <div>
            <Panel style={{width:'300px'}}>
                <Well>
                    <h4 className="text-center">Latest Articles</h4>
                    <ul><a href="http://espn.com">Article 1</a></ul>
                    <ul><a href="http://nbadraft.net">Article 2</a></ul>
                    <ul><a href="http://bleacherreport.com">Article 3</a></ul>
                    <ul><a href="http://mlb.com">Article 4</a></ul>
                    <ul><a href="http://nfl.com">Article 5</a></ul>
                </Well>
            </Panel>
            </div>
        );
    }
}

export default HomeArticle;