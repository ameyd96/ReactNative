// import AsyncStorage from '@react-native-async-storage/async-storage';
// //install npm install @react-native-async-storage/async-storage
// import * as Facebook from 'expo-facebook';

// import 
// {
// FACEBOOK_LOGIN_SUCCESS,
// FACEBOOK_LOGIN_FAIL
// } from './types';

// // export const facebookLogin =() => {



// //     return async (dispatch) =>{  //thunk 

// //             const token=await AsyncStorage.getItem('fb_token');
// //         if(token){
// //             //Dispatch action saying FB login is done

// //             dispatch({
// //                 type:FACEBOOK_LOGIN_SUCCESS,payload:token
// //             });
// //         }else{
// //             //Start FB login process

// //             doFaceBookLogin(dispatch);
// //         }
// //     }
// // }

// // const doFaceBookLogin = async (dispatch) => {
// //     let {type,token} = await Facebook.logInWithReadPermissionsAsync('1032349054192495',{
// //         permissions: ['public_profile']
// //     });

// //     if(type === 'cancel'){
// //         dispatch({
// //             type:FACEBOOK_LOGIN_FAIL
// //         })
// //     }

// //     await AsyncStorage.setItem('fb_token',token)
// //     dispatch({type:FACEBOOK_LOGIN_SUCCESS,payload:token});

// // }


// export const facebookLogin = () => async dispatch => {
    
//     let token = await AsyncStorage.getItem('fb_token');
  
//     if (token) {
//       // Dispatch an action saying FB login is done
//       dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
//     } else {
//       // Start up FB Login process
//       doFacebookLogin(dispatch);
//     }
//   };
  
//   const doFacebookLogin = async dispatch => {
//     await Facebook.initializeAsync({ 
//         AppId: '1032349054192495',
//         appName:  'Jobs' 
//     });
//     let { type, token } = await Facebook.logInWithReadPermissionsAsync( {
//       permissions: ['public_profile']
//     });
  
//     if (type === 'cancel') {
//       return dispatch({ type: FACEBOOK_LOGIN_FAIL });
//     }
  
//     await AsyncStorage.setItem('fb_token', token);
//     dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
//   };

// //doFaceBookLogin = helper fun
// //faceBookLogin = action Creator




import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Facebook from 'expo-facebook';

import {
FACEBOOK_LOGIN_SUCCESS,
FACEBOOK_LOGIN_FAIL
} from './types';

// How to use AsyncStorage:
// AsyncStorage.setItem('fb_token', token);
// AsyncStorage.getItem('fb_token');

// Action Creator
export const facebookLogin = () => async (dispatch) => {
let token = await AsyncStorage.getItem('fb_token');

if(token) {
// Dispatch an action saying FB login is done
dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
} else {
// Start up FB login process
doFacebookLogin(dispatch);
}
};

// Helper Function
const doFacebookLogin = async (dispatch) => {
Facebook.initializeAsync({
appId: '1032349054192495',
appName: 'Jobs'
});

// let result = await Facebook.logInWithReadPermissionsAsync({
// OR ( destructure result object )
let { type, token } = await Facebook.logInWithReadPermissionsAsync({
permissions: ['public_profile'] // Fixed string ahe te 'public_profile'
});


if(type === 'cancel') {
return dispatch({ type: FACEBOOK_LOGIN_FAIL });
}

await AsyncStorage.setItem('fb_token', token);
dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};