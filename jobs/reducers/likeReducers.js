// import {
//     LIKE_JOB
// } from '../actions/types';
// import _ from 'lodash';


// export default function(state,action) {
//     switch(action.type){
//         case LIKE_JOB:
//             return _.unionBy([
//                 action.payload,...state    //make a new array user just job liked => action.payload &
//                 // ...state => previously liked job by user
//             ],'jobkey')
//         default:
//             return state;
//     }
// }

import _ from 'lodash';
//import { REHYDRATE } from 'redux-persist/constants';
import {
  LIKE_JOB,
  CLEAR_LIKED_JOBS
} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    // case REHYDRATE:
    //   return action.payload.likedJobs || [];
    case CLEAR_LIKED_JOBS:
      return [];
    case LIKE_JOB:
      return _.uniqBy([
        action.payload, ...state
      ], 'jobkey');

    default:
      return state;
  }
}