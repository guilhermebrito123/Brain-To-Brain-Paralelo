import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Home from './components/Home'

export default function App() {
  return (
        <NavigationContainer>
          <Home />
        </NavigationContainer>
  );
}


