import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

//to connect with express and mobile use ngrok
//ngrok runs 8hrs on one ip,if you restart  ngrok then agin new ip you have to copy and paste on baseURL 

const instance= axios.create({
    baseURL:'http://afde3e88aec8.ngrok.io'
});

instance.interceptors.request.use(
   async (config) => {
    const token= await AsyncStorage.getItem('token');
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
   },
    (err) => {
        return Promise.reject(err);
    }
);
export default instance;