import AppLoading from 'expo-app-loading';
import _ from 'lodash';
import React, { Component } from 'react';
import Slide from '../components/Slide';
import AsyncStorage from '@react-native-async-storage/async-storage';


//for notification
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';

const SLIDE_DATA =[
{text:'WELCOME TO JOB APP', color:'#03A9F4'},
{text:'Read this for more info..', color:'#009688'},
{text:'Set your location, then swipe away', color:'#03A9F4'}
];

class WelcomeScreen extends Component {
  state = {token:null}

  
  async componentDidMount(){
    this.registerForPushNotificationsAsync();
    let token = await AsyncStorage.getItem('fb_token');

    if(token){
      this.props.navigation.navigate('Map');
      this.setState({token})
    }else{
      this.setState({token:false})
    }
   
  }



  registerForPushNotificationsAsync=async()=> {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  console.log(token);
    return token;
  }
  onSlidesComplete=()=>{
    this.props.navigation.navigate('Auth');
  }
 

    render() {
      if(_.isNull(this.state.token)){
        return <AppLoading />
      }
      return (
       <Slide data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
      );
    }
  }
  
  export default WelcomeScreen;






// import React, {Component} from 'react';
// import {View,Text} from 'react-native';
// import Slide from '../components/Slide';

// const SLIDE_DATA =[
//     {text:'WELCOME TO JOB APP', color:'#03A9F4'},
//     {text:'Read this for more info..', color:'#009688'},
//     {text:'Set your location, then swipe away', color:'#03A9F4'}
//     ];
// class WelcomeScreen extends Component {
//     render() {
//         return (
//             <View>
//                 <Slide data={SLIDE_DATA}/>

//             </View>
//         )
//     }
// }

// export default WelcomeScreen;