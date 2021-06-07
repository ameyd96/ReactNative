import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import MainScreen from './src/screens/mainScreen';
import ForeCastScreen from './src/screens/ForeCast';

const navigator=createStackNavigator({
Home:HomeScreen,
Main:MainScreen,
Forecast:ForeCastScreen,
},
{
  initialRouteName:'Main',
  defaultNavigationOptions:{
    title:'Weather App'
  }
});

export default createAppContainer(navigator);
