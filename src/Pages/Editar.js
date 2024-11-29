import React, { useState } from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';

const Editar = () => {
  const [text, setText] = useState('');
  const [selectedImage] = useState(null);
  const [documents, setDocuments] = useState([]);

  const asset1 = require('../Assets/profile.png')


  const pickDocuments = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: 'application/pdf', // Especifica que quer apenas PDFs
      multiple: true, // Permite a seleção de vários arquivos
    });

    if (result.type !== 'cancel') {
      setDocuments((prevDocs) => [...prevDocs, result]);
    }
  };
  return (
    <View style={styles.view1}>
      <View style={{ height: '40%', alignItems: 'center', marginBottom: '0' }}>
        <Button title="Selecionar Imagem" />
        {selectedImage && (
          <Image
            source={{ uri: selectedImage }}
            style={{ width: 150, height: 150 }}
          />
        )}
        {!selectedImage && (
          <Image
          style={styles.logo}
          source={asset1}          
      />
        )}
      </View>
      <View
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'start',
          marginHorizontal: 'auto',
        }}>
        <TextInput
          style={styles.input}
          label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TextInput
          style={styles.input}
          label="Telefone"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Button style={styles.certificados} mode="contained" onPress={pickDocuments}>+  Certificados </Button>          
        <Button
          style={styles.editarBotao}
          buttonColor="#04A9C8"
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Editar
        </Button>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view1: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#039BE5',
    height: 500,
    width: 354,
    margin: 'auto',
    borderRadius: 33,
  },
  logo: {
    width: 150,
    height: 150,
  },
  input: {
    width: 250,
    backgroundColor: 'white'
  },
  certificados:{
    width: 250,
    height: 30,
    textAlign: 'start'
  },
  editarBotao: {
    width: 150,
    marginHorizontal: 'auto',
    borderRadius: 33,
  },
});

export default Editar;
