import {combineReducers} from 'redux'

import posts from './posts';

  // here we can use all of the individual reducers that we have, we have just one for now: posts
export default combineReducers({posts})