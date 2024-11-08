import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

const Cadastro = ({setStage}) => {
    
  const [text, setText] = useState("");

  return(
    <View style={styles.view1}>
      <View style={{display: 'flex', flexDirection: 'row', marginTop: '20px', width: '354px', alignItems: 'center', justifyContent: 'center'}}>
        <Button style={styles.loginTitle} color='#04A9C8' textColor='white' mode="contained" onPress={() => setStage(1)}>
          Login
        </Button>
        <Button style={styles.createTitle} color='#039BE5' mode="contained" onPress={() => setStage(2)}>
          Cadastro
        </Button>
      </View>
      <View style={{marginHorizontal: 'auto', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
        <TextInput
        style={styles.input}
        label="Email"
        value={text}
        onChangeText={text => setText(text)}
        />
        <TextInput
        style={styles.input}
        label="Telefone"
        value={text}
        onChangeText={text => setText(text)}
        />
        <TextInput
        style={styles.input}
        label="Senha"
        value={text}
        onChangeText={text => setText(text)}
        />
        <TextInput
        style={styles.input}
        label="Confirmar senha"
        value={text}
        onChangeText={text => setText(text)}
        />
      </View>
      <Button style={styles.cadastroBotao} color='#04A9C8' mode="contained" onPress={() => console.log('Pressed')}>
          Cadastrar
      </Button>
    </View>
  )
};

const styles = StyleSheet.create({
  view1: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#039BE5',
    height: '450px',
    width: '354px',
    marginVertical: 'auto',
    marginHorizontal: 'auto',
    borderRadius: '33px'
  },
  loginTitle: {
    padding: '10px',
    fontSize: '24px',
    fontFamily: 'Inter',
    borderRadius: '33px'
  },
  createTitle: {
    padding: '10px',
    fontSize: '24px',
    fontFamily: 'Inter',
    borderRadius: '33px'
  },
  input: {
    width: '250px',
    backgroundColor: 'white'
  },
  cadastroBotao:{
    width: '150px',
    marginHorizontal: 'auto',
    borderRadius: '33px',
    marginBottom: '20px'
  }
})

export default Cadastro; 