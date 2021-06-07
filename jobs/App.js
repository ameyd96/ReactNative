import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Provider} from 'react-redux';


import AuthScreen from './screens/AuthScreen';
import MapScreen from './screens/MapScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import DeckScreen from './screens/DeckScreen';
import SettingScreen from './screens/SettingScreen';
import ReviewScreen from './screens/ReviewScreen';
import stores from './store';
import { PersistGate } from 'redux-persist/integration/react';

// class App extends React.Component{
//   render () {
//     const MainNavigator= 
//       createBottomTabNavigator({
//         Welcome: WelcomeScreen,
//         Auth: AuthScreen
//       })
    
//     return (
//       <View style={styles.container}>
//         <MainNavigator />
//         <StatusBar style="auto" />
//       </View>
//     );
//   }
  
// }



const AppNavigator = createBottomTabNavigator({
  Welcome:{screen:WelcomeScreen},
  Auth:{screen:AuthScreen},
  Main:{
    screen:createBottomTabNavigator({
      Map:{screen:MapScreen},
      Deck:{screen:DeckScreen},
      Review:{
        screen:createStackNavigator({
          Review:{screen:ReviewScreen},
          Setting:{screen:SettingScreen}
         
        })
      }

    },{
      tabBarPosition:'bottom'
    })
  }
},{
  navigationOptions:{
    tabBar:{visible:false}
    
  },

  lazy:true
})

const App =createAppContainer(AppNavigator);
// ReactDOM.render(
//   <Provider store={store}>
//   <AppNavigator />
//   </Provider>
 
//   )
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const { store, persistor} = stores();
export default () => {
return (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
         <App />
    </PersistGate>
  </Provider>
)
}
//export default createAppContainer(AppNavigator);