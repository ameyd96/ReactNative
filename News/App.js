import 'react-native-gesture-handler';
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';


import ShowScreen from './src/screens/ShowScreen';
import DetailScreen from './src/screens/DetailScreen';
import store from './src/redux/store/index';

const Stack = createStackNavigator();

 
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName="Show">
        
          <Stack.Screen  name="News" component={ShowScreen} />
          <Stack.Screen  name="Details" component={DetailScreen} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});