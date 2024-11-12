import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import HomeMain from './Navigations/HomeMain'

export default function App() {
  return (
        <NavigationContainer>
          <HomeMain />
        </NavigationContainer>
  );
}


