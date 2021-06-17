import {
FETCH_NEWS
} from '../actions/types';
import axios from 'axios';
import { Alert } from 'react-native';

const API_KEY = '131a33af38ae445f81972e0be00cb5e2';


export const fetchNewsList = () => async (dispatch) => {
    try { 

      const {data}= await axios.get('https://newsapi.org/v2/everything?q=India&Apple&from=2021-06-10&sortBy=popularity&apiKey=131a33af38ae445f81972e0be00cb5e2')
     
    
       dispatch({ type: FETCH_NEWS, payload: data.articles });
       
    } catch(err) {
        console.log(err)
        Alert.alert('Something went wrong');
    }
};


