
import React, { Component } from 'react';
import { LogBox } from 'react-native';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, Dimensions, Image, Share } from 'react-native';

import {connect} from 'react-redux';
import {fetchNewsList} from '../redux/actions/fetch_action';
import styles from '../component/style';

import moment from "moment";

const { width, height } = Dimensions.get('window');

LogBox.disableYellowBox = true


class ShowScreen extends Component {

    state = {
        news: [],
        loading: true,
        
    }

    fetchNews = async () => {
        

        this.setState({

           
            news: this.props.news,
            loading: false,
           
        })


    }
    
    componentDidMount() {
     
        this.props.fetchNewsList()
        this.fetchNews()

    }
    share = async article => {
        try {
            await Share.share({
                message: 'Check Out This Article ' + article
            })
        } catch (error) {
            console.log(error);
        }

    }
    render() {

        if (this.state.loading) {
            return (
                <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#333', justifyContent: 'center' }}>
                    <ActivityIndicator size="large" color="#fff" />
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={{ fontSize: 25, color: '#fff' }}>Top Headlines</Text>
                    </View>
                    <View >
                        <FlatList
                           
                           data={this.props.news}

                            keyExtractor={(item, id) => id.toString()}

                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Details',
                                        
                                        { url: item.url }
                                    )}>
                                        <View style={{ width: width, height: 200, backgroundColor: '#fff', marginBottom: 15, borderRadius: 15 }}>
                                            <Image source={{ uri: item.urlToImage }} style={[StyleSheet.absoluteFill, { borderRadius: 15 }]} />
                                            <View style={styles.gradient}>

                                                <Text style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }}>{item.author}</Text>

                                                <Text style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }}><View >

                                                    <Text style={{ backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }}>{moment(item.publishedAt).format(' MMMM Do YYYY')}</Text>
                                                </View></Text>
                                                <Text style={styles.share} onPress={() => this.share(item.url)}>Share</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.title}>{item.title}</Text>

                                            </View>
                                        </View>
                                    </TouchableOpacity>

                                )

                            }}
                        />
                    </View>
                </View>
            )
        }


    }
}



const mapDispatchToProps = dispatch => {
    return {
        fetchNewsList: () => dispatch(fetchNewsList())
    }
  }

const mapStateToProps = state => ({
    news: state.news.news,
  });


export default connect(mapStateToProps,mapDispatchToProps)(ShowScreen);


