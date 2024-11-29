import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ContentDisplay from '../Pages/ContentDisplay'


const ContentStack = createNativeStackNavigator();


const HomeContent = () => {

  return(
      <ContentStack.Navigator screenOptions={{headerStyle: {backgroundColor: '#007bff'}, headerTintColor:"white"}}>
        <ContentStack.Screen name="ContentDisplay" component={ContentDisplay} options={{title: "CURSOS DISPONÍVEIS"}} />
      </ContentStack.Navigator>
  )
};

export default HomeContent;