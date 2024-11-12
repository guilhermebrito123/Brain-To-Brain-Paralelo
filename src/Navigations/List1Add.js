import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import List1 from '../Pages/List1'
import CursoADD from '../Pages/CursoADD'

import HomeAdd from './HomeAdd'

const List1Stack = createNativeStackNavigator();


const List1Add = () => {

  return(
      <List1Stack.Navigator initialRouteName="List1" screenOptions={{headerStyle: {backgroundColor: '#039BE5'}, headerTintColor:"white"}}>
        <List1Stack.Screen name="HomeAdd" component={HomeAdd} options={{headerShown: false}} />
        <List1Stack.Screen name="List1" component={List1} options={{title: "Cursos Front e Back-end"}} />
        <List1Stack.Screen name="CursoADD" component={CursoADD} options={{title: "Adicione curso"}}/>
      </List1Stack.Navigator>
  )
};

export default List1Add;