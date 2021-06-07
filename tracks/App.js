import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import AccountScreen from './src/screens/AccountScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import {Provider as AuthProvider, Provider} from './src/context/AuthContext';
import {setNavigator} from './src/NavigationRef';
import LoadingScreen from './src/screens/LoadingScreen';
import {Provider as LocationProvider} from './src/context/LocationContext';
import {Provider as TrackProvider} from './src/context/TrackContext';
import { FontAwesome5 } from '@expo/vector-icons';
const trackListFlow= createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail :TrackDetailScreen
})

trackListFlow.navigationOptions ={
  title:'Tracks',
  tabBarIcon:<FontAwesome5 name="th-list" size={24} color="white" />
}

const switchNavigator = createSwitchNavigator({
  Loading :LoadingScreen,
  loginFlow : createStackNavigator({
    Signup :SignupScreen,
    Signin:SigninScreen,
  }),
  mainFlow : createBottomTabNavigator({
    // trackListFlow :createStackNavigator({
    //     TrackList: TrackListScreen,
    //     TrackDetail :TrackDetailScreen
    // }),
    trackListFlow:trackListFlow,
    TrackCreate:TrackCreateScreen,
    Account :AccountScreen
  })
})

const App= createAppContainer(switchNavigator);

export default () => {
  return (
    <TrackProvider>
    <LocationProvider>
    <AuthProvider>
      <App ref={(navigator)=>{setNavigator(navigator)}}/>
    </AuthProvider>
    </LocationProvider>
    </TrackProvider>
  );
}

