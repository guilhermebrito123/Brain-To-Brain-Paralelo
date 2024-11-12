import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FAB } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Container = ({children}) => {

  const navigation = useNavigation()

  return(
    <View style={styles.container}>
      {children}
      <View style={styles.bottomBar}> 
        <TouchableOpacity style={styles.bottomButton} onPress={() => navigation.navigate('HomeAdd')}>
          <Ionicons name="home-outline" size={24} color="#fff" />
          <Text style={styles.bottomButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <Ionicons name="person-outline" size={24} color="#fff" />
          <Text style={styles.bottomButtonText}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <Ionicons name="settings-outline" size={24} color="#fff" />
          <Text style={styles.bottomButtonText}>Configurações</Text>
        </TouchableOpacity>
        <FAB
          style={styles.fab}
          small
          icon="plus"
          onPress={() => navigation.navigate('CursoADD')}
        />
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#039BE5',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerButton: {
    padding: 5,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomBar: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#039BE5',
    paddingVertical: 10,
    bottom: 0,
    width: '100%'
  },
  bottomButton: {
    alignItems: 'center',
  },
  bottomButtonText: {
    color: '#fff',
    fontSize: 12,
  },
})

export default Container;