import React,{useContext} from 'react';
import {View,StyleSheet,Text,ActivityIndicator} from 'react-native';
import MapView,{Polyline,Circle} from 'react-native-maps';
import {Context as LocationContext} from '../context/LocationContext';


const Map = ( ) => {
    const {state:{currentLocation,locations}} = useContext(LocationContext);
    console.log(locations);
    if(!currentLocation){
        return <ActivityIndicator size="large" style={{marginTop:200}} />
    }
 

    //for generating different coordinates

    // let points=[];
    // for(let i=0;i<20;i++){
    //     if(i % 2==0){
    //         points.push({
    //             latitude:19.1383 + i * 0.001,
    //             longitude:77.3210 + i * 0.001
    //         })
    //     }else{
    //         points.push({
    //             latitude:19.1383 - i * 0.002,
    //             longitude:77.3210 + i * 0.001
    //         })
    //     }
       
    //}
    initialLocation = {
        latitude: 19.1750992,
         longitude:77.2936257,
      };
    return  <MapView style={Styles.map}
        initialRegion={{
            // latitude: 19.1750992,
            // longitude:77.2936257,
            ...initialLocation,
            latitudeDelta:0.01,
            longitudeDelta:0.01
            
        }}
        // region={{
        //     ...currentLocation.coords,
        //     latitudeDelta:0.01,
        //     longitudeDelta:0.01
            
        // }}

        >
            {/* <Polyline coordinates={points}/> */}
            <Circle
            center={currentLocation.coords} 
            radius={30}
            strokeColor="rgba(158,158,255,1.0)"
            fillColor="rgba(158,158,255,0.3)"
            />

            <Polyline coordinates={locations.map(loc => loc.coords)} />
        </MapView>
    
       
    
}

const Styles =StyleSheet.create({
    map:{
        height:300,
        width: '100%',
    }

})

export default Map;