import React,{useState, useEffect} from 'react';
import {View,StyleSheet, Text, FlatList, Image} from 'react-native';
import forecast from "../API/forecast";
import axios from 'axios';
import searchBar from '../components/SearchBar';

const ForeCastScreen = () => {
    const [forecastData, setForecastData] = useState(null);

    const searchApi = async () => {
        const response = await axios.request(forecast).then(function (response) {
          console.log(response.data);
          setForecastData(response.data);
        }).catch(function (error) {
          console.error(error);
        }); 
    };

    useEffect(() => {
        searchApi('Mumbai');
    }, []);

    if(!forecastData) {
        return (
            <View>
              <Text>No output</Text>
            </View>
        );
    }

    return (
        <>
        <View style={{ marginVertical: 10 , alignItems:'center'}}>
            <FlatList
            ListHeaderComponent={() => {
                return <Text>City : {forecastData.city.name}</Text>;
            }}
            data={forecastData.list}
            keyExtractor={(data) => data.dt + ""}
            renderItem={({ item }) => {
                return (
                <View style={{ marginVertical: 10, borderWidth: 1, padding: 10 }}>
                    <Text>Date : {item.dt_txt}</Text>
                    <Text>Weather : {item.weather[0].main}</Text>
                    <Text>Weather Description : {item.weather[0].description}</Text>
                    <Image style={{ borderRadius: 10, width: 100, height: 100, backgroundColor: "lightgrey",
                        marginVertical: 10 }}
                        source={{ uri: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png` }}
                    />
                </View>
                );
            }}
            />
        </View>
        </>
    );
};

const styles=StyleSheet.create({
    image: {
        height:200,
        width:200
    }
});

export default ForeCastScreen;