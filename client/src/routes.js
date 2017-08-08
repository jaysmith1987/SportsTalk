import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import About from './about';
import Basketball from './basketball';
import Football from './football';
import Baseball from './baseball';
import NotFound from './notfound';
import HSB from './hsb';
import CBB from './cbb';
import GLeague from './gleague';
import NBA from './nba';
import HSBB from './hsbb';
import CBBA from './cbba';
import Minors from './minors';
import MLB from './mlb';
import HSFB from './hsfb';
import CFB from './cfb';
import NFL from './nfl';


const Routes = (props) => (
  <Router {...props}>
    <div>
    <Route path="/" component={App} />
    <Route path="/About" component={About} />
    <Route path="/Football" component={Football}/>
    <Route path="/Basketball" component={Basketball}/>
    <Route path="/Baseball" component={Baseball}/>
    <Route path="/HSB" component={HSB}/>
    <Route path="/CBB" component={CBB}/>
    <Route path="/NBA" component={NBA}/>
    <Route path="/G" component={GLeague}/>
    <Route path="/HSBB" component={HSBB}/>
    <Route path="/CBBA" component={CBBA}/>
    <Route path="/Minors" component={Minors}/>
    <Route path="/MLB" component={MLB}/>
    <Route path="/HSFB" component={HSFB}/>
    <Route path="/CFB" component={CFB}/>
    <Route path="/NFL" component={NFL}/>
    </div>
  </Router>
);

export default Routes;