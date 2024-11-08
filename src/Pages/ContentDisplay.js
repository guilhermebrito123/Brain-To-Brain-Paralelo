import React, { useState } from 'react';
import { View, FlatList, Text, TextInput, Button, StyleSheet } from 'react-native';

const data = [
  { id: '1', title: 'Introdução a instrumentos de medição', author: 'Guilherme', date: '06/10/24' },
  { id: '2', title: 'Descomplicando as Finanças: Intermediário', author: 'Natan', date: '06/10/24' },
  { id: '3', title: 'Mecânica Avançada: Práticas e Teorias', author: 'Mariana', date: '06/10/24' },
  { id: '4', title: 'Matemática Aplicada: Ferramentas e Técnicas', author: 'Lucas', date: '06/10/24' },
  { id: '5', title: 'Corpo em Ação: Treinamento Eficiente', author: 'Robert', date: '06/10/24' },
  { id: '6', title: 'Desenvolvimento Front-End: Da Teoria à Prática', author: 'Mariana', date: '06/10/24' },
];

const ContentDisplay = () => {
  const [searchText, setSearchText] = useState('');

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.author}>por {item.author}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Caixa de busca */}
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar"
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* Lista de itens */}
      <FlatList
        data={data.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()))}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />

      {/* Botões de navegação */}
      <View style={styles.pagination}>
        <Button title="Anterior" onPress={() => console.log('Anterior')} />
        <Button title="Próximo" onPress={() => console.log('Próximo')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  listContainer: {
    paddingBottom: 80,
  },
  itemContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#007bff',  // Azul
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',  // Texto branco para contraste
  },
  author: {
    fontSize: 14,
    color: '#e6e6e6',
  },
  date: {
    fontSize: 12,
    color: '#cccccc',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default ContentDisplay;
