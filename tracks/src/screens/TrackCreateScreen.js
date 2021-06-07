import './_mockLocation';
import React,{useState,useEffect,useContext,useCallback} from 'react';

import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView,withNavigationFocus} from 'react-navigation';
//import {requestPermissionsAsync,watchPositionAsync,Accuracy} from 'expo-location';
import {requestForegroundPermissionsAsync,watchPositionAsync,Accuracy} from 'expo-location';
import Map from '../component/Map';
import {Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../component/TrackForm';
import Spacer from '../component/Spacer';
import { FontAwesome } from '@expo/vector-icons';

const TrackCreateScreen = ({isFocused}) => {
    const {state:{recording},
    addLocation} =useContext(LocationContext);
    const callback=useCallback((location) =>{
        addLocation(location,recording);
    },[recording])

const [err] =useLocation( isFocused || recording,callback)

    //to =====> useLocation.js
    // const [err,setErr]=useState(null);
    // const startWatching = async( ) => {
    //     try{
    //         await requestForegroundPermissionsAsync();
    //         await watchPositionAsync({
    //             accuracy:Accuracy.BestForNavigation,
    //             timeInterval:1000,
    //             distanceInterval:10
    //         }, (location) => {
    //             addLocation(location);
    //         });
    //     }catch(e){
    //         setErr(e);
    //     }
    // }
    // useEffect(()=>{
    //     startWatching();
    // },[])

    console.log(isFocused);
    return (
        <SafeAreaView forceInset={{top:'always'}}>
          <Spacer>
            <Text h2>Create Track</Text>
            </Spacer>
            <Map/>
            
            {err ? <Text>Please Enable Location</Text> :null}
            <TrackForm />
        </SafeAreaView>
    );
}

TrackCreateScreen.navigationOptions ={
    title:'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={24} color="white" />
}
const styles = StyleSheet.create({

})

export default withNavigationFocus(TrackCreateScreen);