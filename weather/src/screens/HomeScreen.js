import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, ActivityIndicator, Button} from 'react-native';
import SearchBar from "../components/SearchBar";
import axios from 'axios';
import Weather from '../components/weather';

const baseURL='http://api.openweathermap.org/data/2.5/weather?';
const api_key='9d10a436d73008201714127e85ed0cea';

const HomeScreen=()=>{

const [term, setTerm]=useState('');
const [results, setResults]=useState(null);
const[dataAvailable,setDataAvailable]=useState(true);

const searchApi=async(searchTerm)=>{

    console.log('i am here again..');
    console.log(baseURL+`q=${searchTerm}&appid=${api_key}`);
    setDataAvailable(false);
    try{
        const response=await axios.
        get(baseURL+`q=${searchTerm}&appid=${api_key}`);
        if(response.status==200)
        {
            const data= response.data;
            setResults(data);
            console.log(data);
        }else{
            setResults(null);
        }
       setDataAvailable(true);
           // return data;    
    }
catch(err){
    console.log(err);
}
};

useEffect( ()=>{
    searchApi('Mumbai');
}, [])

if(!dataAvailable)
{
    return (
        <View style={styles.Container}>
          <ActivityIndicator color='gray' size={35} />  
        </View>
    )
}
else if(results === null)
{
   return(
    <View>
       
    </View>
   );
}
    return(
        <View>
            <SearchBar term={term} 
            onTermChange={setTerm}
            onTermSubmit={()=>searchApi(term)} />
         {results && <Weather WeatherData={results} />}
            </View>
    );
};

const styles=StyleSheet.create({
    Container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        backgroundColor:'#fff'
    },
    
});

export default HomeScreen;