import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Cadastro = ({ setStage }) => {
  const [text, setText] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.view1}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "20px",
          width: "354px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          style={styles.loginTitle}
          buttonColor="#04A9C8"
          textColor="white"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Button>
        <Button
          style={styles.createTitle}
          buttonColor="#039BE5"
          mode="contained"
          onPress={() => setStage(2)}
        >
          Cadastro
        </Button>
      </View>
      <View
        style={{
          marginHorizontal: "auto",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
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
        <TextInput
          style={styles.input}
          label="Data de nascimento"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TextInput
          style={styles.input}
          label="Senha"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TextInput
          style={styles.input}
          label="Confirmar senha"
          value={text}
          onChangeText={(text) => setText(text)}
        />
      </View>
      <Button
        style={styles.cadastroBotao}
        buttonColor="#04A9C8"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Cadastrar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  view1: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#039BE5",
    height: 500,
    width: 354,
    marginVertical: "auto",
    marginHorizontal: "auto",
    borderRadius: 33,
  },
  loginTitle: {
    padding: 10,
    fontSize: 24,
    fontFamily: "Inter",
    borderRadius: 33,
  },
  createTitle: {
    padding: 10,
    fontSize: 24,
    fontFamily: "Inter",
    borderRadius: 33,
  },
  input: {
    width: 250,
    backgroundColor: "white",
  },
  cadastroBotao: {
    width: 150,
    marginHorizontal: "auto",
    borderRadius: 33,
    marginBottom: 20,
  },
});

export default Cadastro;
