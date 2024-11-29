import React from "react";
import { View, FlatList, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { List, Text, FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Desenvolvimento Web",
    professor: "Guilherme Brito",
    sexo: "masculino",
    data: "27/11/2024",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Full-stack development (CSS)",
    professor: "Natan",
    sexo: "masculino",
    data: "27/11/2024",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Javascript Avançado",
    professor: "Mariana",
    sexo: "feminino",
    data: "27/11/2024",
  },
];

const Item = ({ title, professor, sexo, data }) => (
  <List.Item
    style={styles.item}
    title={title}
    description={
      sexo === "feminino"
        ? "Professora: " + professor
        : "Professor: " + professor
    }
    left={
      sexo === "feminino"
        ? (props) => (
            <List.Icon {...props} color="#d33979" icon="google-classroom" />
          )
        : (props) => (
            <List.Icon {...props} color="blue" icon="google-classroom" />
          )
    }
    right={(props) => (
      <Text {...props} style={{ alignSelf: "start" }}>
        {data}
      </Text>
    )}
  />
);

const List1 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              professor={item.professor}
              sexo={item.sexo}
              data={item.data}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        <FAB
          style={styles.fab}
          color="white"
          rippleColor="white"
          size="small"
          icon="plus"
          onPress={() => navigation.navigate("CursoADD")}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#F2F2F2",
  },
  item: {
    padding: 10,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#039BE5",
  },
});

export default List1;
