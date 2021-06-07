import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import TrackerApi from '../api/Tracker';
import {navigate} from '../NavigationRef';

const authReducer = (state,action) => {
    switch(action.type){
        case 'signin' :
            return {errorMessage:'',token:action.payload}
        case 'signup' :
            return {errorMessage:'',token:action.payload};
        case 'add_error':
            return {...state,errorMessage:action.payload}; 
        case 'clear_err_message':
            return{...state,errorMessage:''};
        case 'signout' :
            return {token:null,errorMessage:''};    
        default:
            return state;
    }
}
const clearErrorMessage = dispatch => () => {
    dispatch({
        type:'clear_err_message'
    })
}
const signup = (dispatch) => {
    return async ({email,password}) => {
        //make api request
        //2. if we signup, modify state, say authenicated
        //3.if signup fails,sghow error message

        try{
            const response = await TrackerApi.post('/signup',{email,password})
            await AsyncStorage.setItem('token',response.data.token)
            dispatch({type:'signup', payload:response.data.token}) 
            //navigate to mainflow

            navigate('TrackList');
        }catch(err){
           dispatch({type:'add_error',payload:'Something Went Wrong With Signup'})
        }
    }
}
const signin = (dispatch) => {
    return async ({email,password}) => {
        try{
            const response = await TrackerApi.post('/signin',{email,password})
            await AsyncStorage.setItem('token',response.data.token);
            dispatch({
                type:'signin',
                payload:response.data.token
            })
            navigate('TrackList');

        }catch(err){
            dispatch({
                type:'add_error',
                payload:'Something Went Wrong in SignIn'
            })
        }

    }
}
//tryLocalSignIn is for automatic login,take token and navigate to next screen
const tryLocalSignIn = dispatch => async() => {
   const token= await AsyncStorage.getItem('token')
   if(token){
       dispatch({
           type:'signin',
           payload:token
       });
       navigate('TrackList');
   }else{
       navigate('Signup');
   }

}
const signout =(dispatch) => {
    return async() => {
        await AsyncStorage.removeItem('token');
        dispatch({
            type:'signout'
            
        })
        navigate('Signin');
    }
}

export const {Provider,Context} =createDataContext (
    authReducer,
    {signin,signout,signup,clearErrorMessage,tryLocalSignIn},
    {token:null, errorMessage:''}
)