// import axios from 'axios';

// import {
//     FETCH_JOBS
// } from './types';

// //action creator

// export const fetchJobs= (region) => {
//     return async ( dispatch) => {

//     }

// }

import axios from 'axios';
import jsonServer from '../api/jsonServer';
//import reverseGeocode from 'latlng-to-zip';
//import qs from 'qs';
//import ngrok from 'ngrok';

import {
  FETCH_JOBS,
   LIKE_JOB,
  CLEAR_LIKED_JOBS
} from './types';

// const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_ROOT_URL = 'http://localhost:3000';

// const JOB_QUERY_PARAMS = {
//   publisher: '4201738803816157',
//   format: 'json',
//   v: '2',
//   latlong: 1,
//   radius: 10,
//   q: 'javascript'
// };

// Helper Function
// const buildJobsUrl = (zip) => {
//   const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
//   return `${JOB_ROOT_URL}${query}`;
// };

export const fetchJobs = (region, callback) => async (dispatch) => {
  try {
    // let zip = await reverseGeocode(region);
    // const url = buildJobsUrl(zip);
    console.log('In Fetch 1');
    //const url = await ngrok.connect(3000);
    let { data } = await jsonServer.get('/posts');
    //const response=await jsonServer.get('/blogposts');
    console.log('In Fetch 2');

    dispatch({ type: FETCH_JOBS, payload: data });
    console.log(data);

    //after dispatching jobs navigate to deck scr  
    callback();   //writen in mapscr
  } catch(e) {
    console.error(e);
  }
};

//action creator

export const likeJob =(job) => {
  return {
    payload:job,
    type:LIKE_JOB
  }
} 

export const clearLikedJobs = () => {
  return {type:CLEAR_LIKED_JOBS};
}
// export const likeJob = (job) => {
//   return {
//     payload: job,
//     type: LIKE_JOB
//   };
// };

// export const clearLikedJobs = () => {
//   return { type: CLEAR_LIKED_JOBS };
// };

//we are going to make network request so we will use reducer thunk.
//MapScreen has region object inside state.will pass region inside action creator.