// 1. expo install expo-notifications
//2 .import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Notifications,Permissions} from 'expo-notifications';


export default async() => {
    let previousToken= await AsyncStorage.getItem('pushtoken');
    if(previousToken){
        return;

    }else{
       let {status}=await Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS)

    }

}