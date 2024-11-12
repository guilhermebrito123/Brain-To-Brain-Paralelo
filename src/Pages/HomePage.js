import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button, FAB, IconButton, MD3Colors } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const navigation = useNavigation();

  const asset1 = require('../Assets/Home1.png');
  const asset2 = require('../Assets/Media.png');

  return (
    <View style={styles.view}>
      <Image source={asset1} style={styles.image1} />
      <View style={styles.view1}>
        <Text style={styles.title1}>Não sabe por onde começar? </Text>
        <Text>
          Seja{' '}
          <View
            style={{
              fontFamily: 'cursive',
              fontWeight: 'bold',
              fontStyle: 'italic',
            }}>
            {' '}
            premium{' '}
          </View>
          e tenha um especialista para te ajudar nessa jornada{' '}
        </Text>
      </View>
      <View style={styles.view2}>
        <Image source={asset2} style={styles.image2} />
        <View style={styles.view21}>
          <Text style={styles.texto21}>
            Conheça mais sobre o desenvolvimento de aplicativos móveis
          </Text>
          <Button
            style={{ marginTop: '10px' }}
            color="white"
            mode="contained"
            onPress={() => navigation.navigate('HomeCreate')}>
            Cadastre-se
          </Button>
        </View>
      </View>
      <View style={styles.view3}>
        <View style={styles.view31}>
          <Text style={styles.texto31}>
            Conheça mais sobre o desenvolvimento Front-end
          </Text>
          <Text style={styles.texto312}>
            Desenvolva sites e webapps com HTML, CSS e Javascript
          </Text>
          <Button
            style={{ width: '70%' }}
            color="transparent"
            mode="contained"
            onPress={() => navigation.navigate('List1Add')}>
            Saiba mais
          </Button>
        </View>
        <View style={styles.view32}>
          <Text style={styles.texto32}>
            Conheça mais sobre o desenvolvimento Back-end
          </Text>
          <Text style={styles.texto322}>
            Conhece as funcionalidades do Github?{' '}
          </Text>
          <Button
            style={{ width: '70%' }}
            color="transparent"
            mode="contained"
            onPress={() => navigation.navigate('List1Add')}>
            Leia mais
          </Button>
        </View>
      </View>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomButton}>
          <IconButton
            color='white'
            icon="home"
            size={30}
            onPress={() => navigation.navigate('HomeEdit')}
            />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <IconButton
            color='white'
            icon="account"
            size={30}
            onPress={() => navigation.navigate('PerfilEdit')}
            />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <IconButton
            color='white'
            icon="table-of-contents"
            size={30}
            onPress={() => navigation.navigate('HomeContent')}
            />
        </TouchableOpacity>        
      </View>
      <FAB
          style={styles.fab}
          small
          icon="plus"
          onPress={() => navigation.navigate('CursoADD')}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  image1: {
    width: '100%',
  },
  view1: {
    backgroundColor: '#F2F2F2',
    padding: '10px',
  },
  title1: {
    fontSize: '15px',
    fontFamily: 'roboto',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  view2: {
    backgroundColor: '#000',
    height: '176px',
    display: 'flex',
    flexDirection: 'row',
  },
  image2: {
    height: '176px',
    width: '40%',
  },
  view21: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto21: {
    color: 'white',
    fontFamily: 'roboto',
    fontSize: '20px',
    textAlign: 'center',
  },
  view3: {
    backgroundColor: '#F2F2F2',
    height: '200px',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '70px',
  },
  view31: {
    width: '50%',
    paddingStart: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto31: {
    paddingTop: '10px',
    width: '90%',
    height: '50%',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '16px',
  },
  texto312: {
    width: '90%',
    textAlign: 'center',
    fontSize: '13px',
    marginBottom: '8px',
  },
  view32: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto32: {
    paddingTop: '10px',
    width: '90%',
    height: '50%',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '16px',
  },
  texto322: {
    width: '90%',
    textAlign: 'center',
    fontSize: '13px',
    marginBottom: '8px',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    bottom: 68,
    right: 0,
    backgroundColor: '#039BE5',
  },
  bottomBar: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#039BE5',
    paddingVertical: 10,
    bottom: 0,
    width: '100%',
    height: '70px'
  },
  bottomButton: {
    alignItems: 'center',
  },
  bottomButtonText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default HomePage;
