import { combineReducers } from 'redux';
import pokemon from './pokemon';
import filter from './filter';

export default combineReducers({ pokemon, filter });
