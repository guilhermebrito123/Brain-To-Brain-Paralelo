import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native'; 

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>


      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.avatarContainer}>
          <TouchableOpacity onPress={pickImage} style={styles.avatarButton}>
            {profileImage ? (
              <Image source={{ uri: profileImage }} style={styles.avatarImage} />
            ) : (
              <Ionicons name="person-circle-outline" size={100} color="#fff" />
            )}
          </TouchableOpacity>
          <Text style={styles.avatarText}>EDITAR AVATAR</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            placeholder="E-MAIL" 
            placeholderTextColor="#fff" 
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            placeholder="CURSOS POSTADOS" 
            placeholderTextColor="#fff"
          />
          <Text style={styles.dropdownArrow}>▼</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            placeholder="AREAS DE INTERESSE" 
            placeholderTextColor="#fff"
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>ANTERIOR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('CursoADD')} 
          >
            <Text style={styles.navButtonText}>AVANÇAR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Conectando Mentes, Compartilhando Sabedoria.
            Este site foi desenvolvido para fins acadêmicos, para a matéria de Projeto Desenvolvimento de uma Aplicação - Universidade PUC Minas.
          </Text>
          <Text style={styles.footerText}>©2010 - 2024 Privacy-Terms</Text>
        </View>
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#B3E5FC',
  },
  
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  avatarButton: {
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 10,
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
    position: 'relative',
  },
  input: {
    backgroundColor: '#039BE5',
    color: '#fff',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
  },
  dropdownArrow: {
    position: 'absolute',
    right: 15,
    top: 18,
    color: '#fff',
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  navButton: {
    backgroundColor: '#00ACC1',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 40,
    alignItems: 'center',
  },
  footerText: {
    color: '#0077C2',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 5,
  },
  
  
});

export default ProfilePage;
