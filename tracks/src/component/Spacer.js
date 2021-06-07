//For giving margin to Text.button
//job is to apply margin to child compnennt

import React from 'react';
import {View,StyleSheet} from 'react-native';

const Spacer = ({children}) => {
    return <View style={styles.spacer}>{children}</View>;
   
       
}

const styles =StyleSheet.create({
    spacer:{
        margin:15
    }
})

export default Spacer;