import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cadastro from '../Pages/Cadastro'
import Login from '../Pages/Login'


const LoginStack = createNativeStackNavigator();


const CadastroLogin = () => {

  return(
      <LoginStack.Navigator screenOptions={{headerStyle: {backgroundColor: '#039BE5'}, headerTintColor:"white"}}>
        <LoginStack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      </LoginStack.Navigator>
  )
};

export default CadastroLogin;