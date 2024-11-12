import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cadastro from '../Pages/Cadastro'


const CreateStack = createNativeStackNavigator();


const HomeCreate = () => {

  return(
      <CreateStack.Navigator screenOptions={{headerStyle: {backgroundColor: '#039BE5'}, headerTintColor:"white"}}>
        <CreateStack.Screen name="Cadastro" component={Cadastro} />
      </CreateStack.Navigator>
  )
};

export default HomeCreate;