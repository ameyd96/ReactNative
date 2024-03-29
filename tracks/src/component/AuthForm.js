import React,{useState} from 'react';
import {View,StyleSheet} from 'react-native';
import {Text,Button,Input} from 'react-native-elements';
import Spacer from './Spacer';
const AuthForm = ({headerText,errorMesaage,onSubmit,submitButtonText}) => {
    const [email,setEmail]=useState('');
    const [password,setPassword] =useState('');
    return (
        <>
            <Spacer>
        <Text h3>{headerText}</Text>
        </Spacer>
        <Input label="Email" value={email}
         onChangeText={(newEmail) => setEmail(newEmail)}
         autoCapitalize='none'
         autoCorrect={false}
         />
          
        <Input label="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'
         autoCorrect={false}
        />
       {errorMesaage ?<Text style={styles.errorMesaage}>{errorMesaage}</Text> :null}
       <Spacer>
        <Button title={submitButtonText} onPress={() => onSubmit({email,password})}/>
        </Spacer> 
    
        </>
    )
        
    


}

const styles = StyleSheet.create({
    errorMesaage:{
        fontSize:16,
        color:'red',
        marginLeft:15,
        marginTop:15
    }
})

export default AuthForm;