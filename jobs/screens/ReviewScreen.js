import React, {Component} from 'react';
import {View,Text,Platform,ScrollView,Linking} from 'react-native';
import {Button,Card} from 'react-native-elements';

import MapView from 'react-native-maps';
import {connect} from 'react-redux';

class ReviewScreen extends Component {
static navigationOptions = ({navigation}) => ({
    title:'Review Jobs',
    headerRight:() => {
        return(
            <Button title="Setting" onPress={() => navigation.navigate('Setting')}
             color="#fff"
           
             />

        )

    }
}
)

renderLikedJobs() {
    return this.props.likedJob.map(job => {
         const {
        company,
        formattedRelativeTime,
        url,
        longitude,
        latitude,
        jobtitle,
        jobkey,
      } = job;
      const initialRegion ={
        longitude,
        latitude,
        longitudeDelta:0.045,
        latitudeDelta:0.02
    }
        return (
            <Card> 
                <Card.Title key={jobkey}>{jobtitle}</Card.Title>
                <View style={{height:200}}>
                    <MapView 
                    scrollEnabled={false}
                    style={{flex:1}}
                    cacheEnabled={Platform.OS === 'android' }
                    initialRegion={initialRegion}
                    />
                    <View style={styles.detailWrapper}>
                        <Text style={styles.italic}>{company}</Text>
                        <Text style={styles.italic}>{formattedRelativeTime}</Text>
                    </View>
                    <Button title="Apply Now"
                    backgroundColor="#03A9F4"
                    onPress={() => Linking.openURL(url)}
                    />

                </View>
            </Card>
        )
    })
}
    render() {
        return (
           
            <ScrollView>
            {this.renderLikedJobs()}
            </ScrollView>
            
        )
    }
}
const styles= {
    detailWrapper:{
        marginBottom:10,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    italic:{
        fontStyle: "italic",
    }
}
function mapStateToProps(state){
    return {likedJob:state.likedJob};
}
export default connect(mapStateToProps)(ReviewScreen);