import React, {Component} from 'react';
import {Panel, Well} from 'react-bootstrap';

class HomeArticle extends Component {
    render(){
        return(
            <div>
            <Panel style={{width:'300px'}}>
                <Well>
                    <h4 className="text-center">Latest Articles</h4>
                    <ul><a href="espn.com">Article 1</a></ul>
                    <ul><a href="nbadraft.net">Article 2</a></ul>
                    <ul><a href="bleacherreport.com">Article 3</a></ul>
                    <ul><a href="mlb.com">Article 4</a></ul>
                    <ul><a href="nfl.com">Article 5</a></ul>
                </Well>
            </Panel>
            </div>
        );
    }
}

export default HomeArticle;