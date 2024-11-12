import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import List1Add from './List1Add'
import HomeAdd from './HomeAdd'
import HomeCreate from './HomeCreate'
import CadastroLogin from './CadLogin'
import PerfilEdit from './PerfilEdit'
import HomeContent from './HomeContent'
import Cadastro from '../Pages/Cadastro'

const MainStack = createNativeStackNavigator();


const HomeMain = () => {

  return(
      <MainStack.Navigator initialRouteName="HomeAdd" screenOptions={{headerStyle: {backgroundColor: '#039BE5'}, headerTintColor:"white"}}>
        <MainStack.Screen name="List1Add" component={List1Add} options={{headerShown: false}}/>
        <MainStack.Screen name="HomeAdd" component={HomeAdd} options={{headerShown: false}} />
        <MainStack.Screen name="HomeCreate" component={HomeCreate} options={{headerShown: false}} />
        <MainStack.Screen name="Login" component={CadastroLogin} />
        <MainStack.Screen name="PerfilEdit" component={PerfilEdit} options={{headerShown: false}} />
        <MainStack.Screen name="HomeContent" component={HomeContent} options={{headerShown: false}} />
        <MainStack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}} />
      </MainStack.Navigator>
  )
};

export default HomeMain;