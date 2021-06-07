import React, {Component} from 'react';
import {View,Text,Dimensions,StyleSheet,ActivityIndicator} from 'react-native';
import { Button,Icon } from 'react-native-elements';
import MapView from 'react-native-maps';
import {connect} from 'react-redux';

import * as actions from '../actions';

class MapScreen extends Component {
// static navigationOptions ={
//     title:"Map",
//     tabBar:{
//         icon:() => {
//             return <Icon name="my-location" size={30}/>
//         }
//     }
// }

    state={
        mapLoaded:false,
        region:{
            longitude:-122,
            latitude:37,
            longitudeDelta:0.04,
            latitudeDelta:0.09
        }
    }

    componentDidMount(){
        this.setState({mapLoaded:true})
    }
    onRegionChangeComplete = (region) => {
      //  console.log(region)
        this.setState({region});
    }

    onButtonPress= () => {
        this.props.fetchJobs(this.state.region,() =>{
            this.props.navigation.navigate('Deck');    //whenever user presees button it goes to deck scr its callback fun
        })
    }
    render() {
        if(!this.state.mapLoaded){
            return (
                <View style={{flex:1,justifyContent:'center'}}>
                    <ActivityIndicator size="large">

                    </ActivityIndicator>

                </View>
            )
        }
        return (
            <View style={styles.container}>
                 <MapView 
                 region={this.state.region}
                 style={styles.map} 
                 onRegionChangeComplete={this.onRegionChangeComplete}
                 />
                 <View style={styles.buttonContainer}>
                     <Button
                     large
                     title="Search This Area"
                     backgroundColor="#0288D1"
                     icon={{name:'search'}}
                     onPress={this.onButtonPress}
                      />
                 </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    buttonContainer :{
        position:'absolute',
        bottom:20,
        left:0,
        right:0
    }
  });
export default connect(null,actions)(MapScreen);