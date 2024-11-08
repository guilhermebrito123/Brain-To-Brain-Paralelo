import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CursoADD = () => {

  return (
    <View style={styles.container}>
      

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <Text style={styles.iconText}>ADICIONAR ICONE</Text>
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="NOME DO CURSO" placeholderTextColor="#fff" />
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="CATEGORIA" placeholderTextColor="#fff" />
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="GRAU DE ESPECIALIZAÇÃO" placeholderTextColor="#fff" />
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.videoContainer}>
            <Text style={styles.iconText}>MP4/AVI</Text>
          </TouchableOpacity>
          <TextInput
            style={[styles.input, styles.descriptionInput]}
            placeholder="DESCRIÇÃO"
            placeholderTextColor="#fff"
            multiline
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.navButton} onPress={() => navigation.goBack()}>
            <Text style={styles.navButtonText}>ANTERIOR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>ADICIONAR</Text>
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
  iconContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00ACC1',
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
  },
  iconText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#039BE5',
    color: '#fff',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  videoContainer: {
    height: 100,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00ACC1',
    borderRadius: 10,
  },
  descriptionInput: {
    height: 100,
    width: '45%',
    textAlignVertical: 'top',
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

export default CursoADD;
