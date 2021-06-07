import React,{useContext} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import AuthForm from '../component/AuthForm';
import NavLink from '../component/NavLink';
import {Context} from '../context/AuthContext';


const SigninScreen = () => {
    const {state,signin,clearErrorMessage} =useContext(Context);

    return <View style={styles.container}>
        <NavigationEvents  
        onWillBlur={clearErrorMessage}
        />
      <AuthForm 
      headerText="Sign In To Your Account"
      errorMesaage={state.errorMesaage}
      onSubmit={signin}
      submitButtonText="Sign In"
      />
      <NavLink 
      routeName="Signup"
      text="Dont Have Account ? Sign Up Instead"
      />
    </View>
}

SigninScreen.navigationOptions = () => {
    return {
        headerShown:false
    }
}

const styles = StyleSheet.create({
    container:{
        
        flex:1,
        justifyContent:'center',
        marginBottom:250
    }
})

export default SigninScreen;