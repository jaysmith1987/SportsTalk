import React, {Component} from 'react';
import {Table, ControlLabel, Col, Panel, Well} from 'react-bootstrap';

class UserRank extends Component {
    render(){
        return (
                <div className="rankings">
                <Well style={{backgroundColor:'lightsalmon', fontColor:'black', border:'2px solid black'}}>
                <h4 className="text-center"><strong>LeaderBoard</strong></h4>
                <Table  bordered hover responsive style={{border:'2px solid black'}}>
                    <thead > 
                    <tr>
                        <th >Rank</th>
                        <th>Username</th>
                        <th>Likes</th>
                        <th>Posts</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>52</td>
                        <td>21</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Demmy</td>
                        <td>43</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>40</td>
                        <td>22</td>
                    </tr>
                      <tr>
                        <td>4</td>
                        <td>Barry</td>
                        <td>20</td>
                        <td>22</td>
                    </tr>
                      <tr>
                        <td>5</td>
                        <td>Rarry</td>
                        <td>10</td>
                        <td>22</td>
                    </tr>
                    </tbody>
                </Table>
                </Well>
                </div>
        );
    }
    
}

export default UserRank;