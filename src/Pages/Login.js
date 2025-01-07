import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  const [text, setText] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
          buttonColor="#039BE5"
          textColor="white"
          mode="contained"
        >
          Login
        </Button>
        <Button
          style={styles.createTitle}
          buttonColor="#04A9C8"
          mode="contained"
          onPress={() => navigation.goBack()}
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
          label="Senha"
          secureTextEntry={!showPassword}
          right={<TextInput.Icon icon={showPassword ? "eye-off" : "eye"} onPress={() => setShowPassword(!showPassword)} />}
        />
        <Button
          style={styles.entrarBotao}
          buttonColor="#04A9C8"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Entrar
        </Button>
        <Button
          style={styles.esqueceuBotao}
          buttonColor="#04A9C8"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Esqueceu a senha?
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view1: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#039BE5",
    height: 400,
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
  entrarBotao: {
    width: 100,
    marginHorizontal: "auto",
    borderRadius: 33,
  },
  esqueceuBotao: {
    marginHorizontal: "auto",
    borderRadius: 33,
  },
});

export default Login;
