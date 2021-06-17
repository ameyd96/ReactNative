import React, { useEffect } from 'react'
import { View, StyleSheet, Image } from 'react-native'


const Splash = ({navigation}) => {
 useEffect(()=>{
 setTimeout(()=>{
    navigation.navigate('News') 
 }, 3000)
 }, [])
    return (
        <View style={styles.home}>
            <Image source={require('../assets/news.jpeg')} resizeMode='contain' style={
                { width: 500, height: 350 }} />
        </View>

    )
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(230, 249, 255)'

    }
})

export default Splash;