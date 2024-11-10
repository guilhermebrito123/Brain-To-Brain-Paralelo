import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../Pages/HomePage'
import CursoADD from '../Pages/CursoADD'

const Stack = createNativeStackNavigator();


const Main = () => {

  return(
      <Stack.Navigator initialRouteName="HomePage" screenOptions={{headerStyle: {backgroundColor: '#039BE5'}, headerTintColor:"white"}}>
        <Stack.Screen name="HomePage" component={HomePage} options={{headerShown: false}} />
        <Stack.Screen name="CursoADD" component={CursoADD} options={{title: "Adicionar curso"}} />
      </Stack.Navigator>
  )
};

export default Main;