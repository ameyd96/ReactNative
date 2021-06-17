import {FETCH_NEWS} from '../actions/types';


const INITIAL_STATE= {
    news:[]
}

export default function (state = INITIAL_STATE, action) {
  
    switch (action.type) {
      case FETCH_NEWS:
        return {...state,news:action.payload};
        
        
      default:
        return state;
    }
  }