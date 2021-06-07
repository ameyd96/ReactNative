import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';


const SearchBar=({term, onTermChange, onTermSubmit})=>{
    return(
        <View style={styles.bar}>
            <Feather name="search" style={styles.IconStyle}/>
            <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            styles={styles.InputStyle}
            placeholder="Enter City name"
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}/>
        </View>
    );
};

const styles=StyleSheet.create({

    bar:{
    backgroundColor:'#F0EEEE',
    height:50,
    borderRadius:5,
    marginHorizontal:15,
    flexDirection:'row',
    marginTop:15

    },
    IconStyle:{
        alignSelf:'center',
        fontSize:35,
        marginHorizontal:15
    },
    InputStyle:{
        fontSize:25,
        flex:1,
        marginHorizontal:15,
        
    }

});

export default SearchBar;