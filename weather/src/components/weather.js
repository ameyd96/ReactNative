import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, ImageBackground, Dimensions, StatusBar} from 'react-native';
import { Sunny, Snow, Rainy, Haze, Smoke, Clouds } from '../../assets/backgroundImages/images';

const WeatherComponent=({WeatherData})=>{
    const[backgroundImage,setbackgroundImage]=useState(null);
     const {weather, name, main:{temp,humidity},wind:{speed}} = WeatherData;
     const[{main}]=weather;
   // const {weather, name, main} = WeatherData;
    //const [allTemp] = weather;
    //const { temp, humidity } = main; 
    
    console.log(main);
    
    useEffect(()=>{
       setbackgroundImage(getBackgroundImage(main));
    },[WeatherData])

    function getBackgroundImage(weather){
        if(weather === 'Snow') return Snow;
        if(weather === 'Clear') return Sunny;
        if(weather === 'Rain') return Rainy;
        if(weather === 'Haze') return Haze;
        if(weather === 'Smoke') return Smoke;
        if(weather === 'Clouds') return Clouds;
        return Sunny;
    }

    return(
        <View style={styles.Container}>
            <ImageBackground source={backgroundImage}
            style={styles.backgroundImg} resizeMode='cover'>

        <View style={{alignItems:'center'}}>
          <Text style={{...styles.headerText}}>{name}</Text>
          <Text style={{...styles.headerText}}>{main}</Text>
          <Text style={{...styles.headerText}}>{temp} °F</Text> 
        </View>
        <View style={styles.ExtraInfo}>

        <View style={styles.info}>
        <Text style={{fontSize:22, color:'black'}}>Humidity</Text>
        <Text style={{fontSize:22, color:'black'}}>{humidity} %</Text>
        </View>

        <View >
        <Text style={{fontSize:22, color:'black'}}>Wind Speed</Text>
        <Text style={{fontSize:22, color:'black'}}>{speed} m/s</Text>
        </View>

        </View>
            </ImageBackground>
        </View>
    );
};

const styles=StyleSheet.create({

    Container:{
        alignItems:'center',
        flex:1,
        backgroundColor:'#fff'
    },
    backgroundImg:{
        flex:1,
        width:Dimensions.get('screen').width,
        height:500,
        width:350
    },
    headerText:{
        fontSize:34,
        marginTop:10,
    },
    ExtraInfo:{
        flexDirection:'row',
        marginTop:300,
        justifyContent:'space-between',
        padding:8
    },
    info:{
        width:Dimensions.get('screen').width/2.5,
        //backgroundColor:'rgb(0,0,0.5)',
        padding:10,
        borderRadius:15,
        justifyContent:'center'
    }

});

export default WeatherComponent;