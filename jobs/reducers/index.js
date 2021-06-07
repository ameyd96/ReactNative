import {combineReducers} from 'redux';
import auth from './authReducer';
import jobs from './jobReducers';
import likedJob from './likeReducers';

export default combineReducers({
  //  auth: () => {return {}}
  auth,jobs,likedJob
})