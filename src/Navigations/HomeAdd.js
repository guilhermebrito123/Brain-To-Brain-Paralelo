import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../Pages/HomePage'
import CursoADD from '../Pages/CursoADD'


const HomeStack = createNativeStackNavigator();


const HomeAdd = () => {

  return(
      <HomeStack.Navigator initialRouteName="HomePage" screenOptions={{headerStyle: {backgroundColor: '#039BE5'}, headerTintColor:"white"}}>
        <HomeStack.Screen name="HomePage" component={HomePage} options={{headerShown: false}} />
        <HomeStack.Screen name="CursoADD" component={CursoADD} options={{title: "Adicione curso"}} />
      </HomeStack.Navigator>
  )
};

export default HomeAdd;