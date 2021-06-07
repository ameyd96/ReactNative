import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, ActivityIndicator, Button} from 'react-native';
import SearchBar from "../components/SearchBar";
import axios from 'axios';

const MainScreen=({navigation})=>{
    
return(
<View> 
    <Text>Select option</Text>
<Button title="Current Day Weather" style={styles.buttonStyle}
onPress={()=>navigation.navigate('Home')}/>
<Button title="5 Day forecast Weather" style={styles.buttonStyle}
onPress={()=>navigation.navigate('Forecast')}/>
</View>
);
};

const styles=StyleSheet.create({
    buttonStyle:{
        marginTop:350,
    },
    textStyle:{
        fontSize:25,
        fontWeight:'bold',
    }
})

export default MainScreen;