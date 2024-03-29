import React,{useContext} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Button} from 'react-native-elements';
import Spacer from '../component/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const AccountScreen = () => {
    const {signout} =useContext(AuthContext);
    return <SafeAreaView forceInset={{ top : 'always' }}>
        <Text style={{fontSize:48}}>AccountScreen</Text>
        <Spacer>
        <Button title="Sign Out" onPress={signout} />
        </Spacer>
    </SafeAreaView>
}
AccountScreen.navigationOptions ={
    tabBarIcon :<MaterialCommunityIcons name="account-alert-outline" size={24} color="black" />
}
const styles = StyleSheet.create({

})

export default AccountScreen;