import React from 'react';
import {View,StyleSheet,Dimensions} from 'react-native';
import { WebView } from 'react-native-webview';

const {width} = Dimensions.get('window');

const DetailScreen = ({route}) => {
    
    const {url}=route.params
    return(
        <View style={{flex:1}}>
           <WebView 
           originWhitelist={["file://"]}
        
            source={{
                uri: url
            }}
            style={{borderWidth:1}}
            
        />
        </View>
    )
    
}
const styles=StyleSheet.create({
    image:{
        width:width,
        height:300,
        borderRadius:4,
        marginBottom:5,
        padding:10
    }
})

export default DetailScreen;





