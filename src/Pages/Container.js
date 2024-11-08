import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { BottomNavigation  } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const Container = ({children}) => {
  return(
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="home-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Perfil</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="menu-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      {children}
      <View style={styles.bottomBar}> 
        <TouchableOpacity style={styles.bottomButton}>
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#039BE5',
    paddingVertical: 10,
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