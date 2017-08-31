"use strict"
import{combineReducers} from 'redux';

import {basketballReducers} from './basketballReducers';
import {footballReducers} from './footballReducers';
import {baseballReducers} from './baseballReducers';
import {userReducers} from './userReducers';


export default combineReducers({
    user: userReducers,
    basketball: basketballReducers,
    football: footballReducers,
    baseball: baseballReducers
})