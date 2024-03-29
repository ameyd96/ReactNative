import React, {Component} from 'react';
import {View,Text,Platform} from 'react-native';
import {connect} from 'react-redux';
import Swipe from '../components/Swipe';
import MapView from 'react-native-maps';
import {Button,Card} from 'react-native-elements';
import * as actions from '../actions';

class DeckScreen extends Component {
    static navigationOptions ={
    title:'Jobs'
    // tabBar:{
    //     icon:() => {
    //         return <Icon name="my-location" size={30}/>
    //     }
    // }
}
    renderCard(job){
        const initialRegion ={
            longitude:job.longitude,
            latitude:job.latitude,
            longitudeDelta:0.045,
            latitudeDelta:0.02
        }
        return (
           <Card>
               <Card.Title>{job.jobtitle}</Card.Title>
               <View style={{height:300}}>
                        <MapView 
                        scrollEnabled={false}
                        style={{flex:1}}
                        cacheEnabled={Platform.OS === 'android' ? true : false}
                        initialRegion={initialRegion}
                        >
                        
                        
                        </MapView>
               </View>
               <View style={styles.detailWrapper}>
                   <Text>{job.company}</Text>
                   <Text>{job.formattedRelativeTime}</Text>
               </View>
               <Text>{job.snippet.replace(/<b>/g,'').replace(/<\/b>/g,'')}</Text>
           </Card>
        )

    }
    renderNoMoreCards = () => {
        return (
            <Card>
                <Card.Title>No More Jobs</Card.Title>
                <Button title="Back To Map"
                large
                icon={{name:'my-location'}}
                backgroundColor="#03A9F4"
                onPress={() => this.props.navigation.navigate('Map')}
                />
            </Card>
        )
    }
    render() {
        return (
            <View style={{marginTop:10}}>
                
                <Swipe
                data={this.props.jobs}
                renderCard={this.renderCard}
                renderNoMoreCards={this.renderNoMoreCards}
                onSwipeRight={job => this.props.likeJob(job)}
                keyProps="jobkey"
                />

            </View>
        )
    }
}
const styles ={
    detailWrapper:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:10
    }
}
function mapStateToProps({jobs}){
    return {jobs:jobs.results}
}
export default connect(mapStateToProps,actions)(DeckScreen);