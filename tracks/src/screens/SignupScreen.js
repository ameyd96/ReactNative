import React,{ useState, useContext,useEffect} from 'react';
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import {Text,Input,Button} from 'react-native-elements';
import {NavigationEvents} from 'react-navigation';
import Spacer from '../component/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../component/AuthForm';
import NavLink from '../component/NavLink';


const SignupScreen = ({navigation}) => {

    const {state,signup,clearErrorMessage,tryLocalSignIn} =useContext(AuthContext);
    // const [email,setEmail]=useState('');
    // const [password,setPassword] =useState('');

    // useEffect (() => {
    //     tryLocalSignIn();   ===> to LoadingScreen
    // },[])
    return <View style={styles.container}>
        { /* <Spacer>
        <Text h3>Signup For Tracker</Text>
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
       {state.errorMesaage ?<Text style={styles.errorMesaage}>{state.errorMesaage}</Text> :null}
       <Spacer>
        <Button title="Sign Up" onPress={() => signup({email,password})}/>
        </Spacer> */ }
        <NavigationEvents onWillBlur={clearErrorMessage}/>
        <AuthForm 
        headerText="Sign Up For Tracker"
        errorMesaage={state.errorMesaage}
        submitButtonText="Sign Up"
        onSubmit={signup}
        />
        {/* <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Spacer>
        <Text style={styles.link}>Already Have Account ? Sign in Instead</Text>
        </Spacer>
        </TouchableOpacity> */}
        <NavLink
        routeName="Signin"
        text="Already Have Account ? Sign in Instead"
        />

    </View>
}
// onChangeText={(newEmail) => setEmail(newEmail)}/> OR
//onChangeText={setEmail}
//onSubmit={({email,password}) => signup({email,password})} OR
//onSubmit={signup}
SignupScreen.navigationOptions = () => {
    return {
        headerShown:false
    }
}

const styles = StyleSheet.create({
    container:{
        
        flex:1,
        justifyContent:'center',
        marginBottom:250
    },
    errorMesaage:{
        fontSize:16,
        color:'red',
        marginLeft:15,
        marginTop:15
    },
    link:{
        color:'blue'
    }
})

export default SignupScreen;