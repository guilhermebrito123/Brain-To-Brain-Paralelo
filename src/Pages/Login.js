import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

const Login = ({setStage}) => {
    
  const [text, setText] = useState("");

  return(
    <View style={styles.view1}>
      <View style={{display: 'flex', flexDirection: 'row', marginTop: '20px', width: '354px', alignItems: 'center', justifyContent: 'center'}}>
        <Button style={styles.loginTitle} color='#039BE5' textColor='white' mode="contained" onPress={() => setStage(1)}>
          Login
        </Button>
        <Button style={styles.createTitle} color='#04A9C8' mode="contained" onPress={() => setStage(2)}>
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
        label="Senha"
        value={text}
        onChangeText={text => setText(text)}
        />      
      <Button style={styles.entrarBotao} color='#04A9C8' mode="contained" onPress={() => console.log('Pressed')}>
          Entrar
      </Button>
      <Button style={styles.esqueceuBotao} color='#04A9C8' mode="contained" onPress={() => console.log('Pressed')}>
          Esqueceu a senha?
      </Button>   
      </View>   
    </View>
  )
};

const styles = StyleSheet.create({
  view1: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#039BE5',
    height: '400px',
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
  entrarBotao:{
    width: '100px',
    marginHorizontal: 'auto',
    borderRadius: '33px'
  },
  esqueceuBotao:{
    marginHorizontal: 'auto',
    borderRadius: '33px'
  },
})

export default Login; 