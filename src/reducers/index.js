"use strict"
import{combineReducers} from 'redux';

import {basketballReducers} from './basketballReducers';
import {footballReducers} from './footballReducers';
import {baseballReducers} from './baseballReducers';

export default combineReducers({
    basketball: basketballReducers,
    football: footballReducers,
    baseball: baseballReducers
})