import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PerfilScreen from '../Pages/PerfilScreen'
import PerfilScreen2 from '../Pages/PerfilScreen2'

const EditStack = createNativeStackNavigator();


const PerfilEdit = () => {

  return(
      <EditStack.Navigator screenOptions={{headerStyle: {backgroundColor: '#039BE5'}, headerTintColor:"white"}}>
        <EditStack.Screen name="Edit1" component={PerfilScreen} options={{headerShown: false}}  />
        <EditStack.Screen name="Edit2" component={PerfilScreen2} options={{title: "Perfil"}}  />
      </EditStack.Navigator>
  )
};

export default PerfilEdit;