import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
  Alert
} from "react-native";
import { Button, TextInput, List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import CryptoJS from "crypto-js";
import { TextInputMask } from "react-native-masked-text";
import * as SQLite from "expo-sqlite";
import { useSQLiteContext } from "expo-sqlite"; // Importa o contexto

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [filterValue, setFilterValue] = useState("1"); // Valor do filtro para intValue
  const [data, setData] = useState([]);

  const db = useSQLiteContext(); // Acessa o banco de dados via contexto
  const navigation = useNavigation();

  //date time picker usage:
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [formattedDate, setFormattedDate] = useState("");

  const onChange = (event, selectedDate) => {
    if (event.type == "set" && selectedDate) {
      setDate(selectedDate);
      setFormattedDate(moment(selectedDate).format("DD/MM/YYYY"));
      setShow(false);
    } else {
      setShow(false);
    }
  };

  const showMode = (currentMode) => {
    setMode(currentMode);
    setShow(true);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const toggleDatePicker = () => {
    setShow(true);
  };

  const createTable = async () => {
    try {
      const db = await SQLite.openDatabaseAsync("braintobrain");

      await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS student (student_Id INTEGER PRIMARY KEY NOT NULL, email TEXT NOT NULL, telefone TEXT NOT NULL, dataNasc text NOT NULL, senha TEXT NOT NULL);
        `);
      console.log("Tabela criada!");
    } catch (error) {
      console.log(error);
    }
  };

  const insertStudent = async () => {
    createTable();
    const statement = await db.prepareAsync(
      "INSERT INTO student (email, telefone, dataNasc, senha) VALUES ($email, $telefone, $dataNasc, $senha)"
    );
    if (
      email !== "" &&
      telefone !== "" &&
      formattedDate !== "" &&
      password !== ""
    ) {
      try {
        let result = await statement.executeAsync({
          $email: email,
          $telefone: telefone,
          $dataNasc: formattedDate,
          $senha: password,
        });
        console.log(result.lastInsertRowId, result.changes);
        navigation.navigate("PerfilEdit");
        setEmail("");
        setTelefone("");
        setFormattedDate("");
        setPassword("");
      } finally {
        await statement.finalizeAsync();
      }
    } else {
      return (Alert.alert('Cadastro incompleto', 'Preencha todos os campos!', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]));
    }
  };

  const selectStudent = async () => {
    try {
      const db = await SQLite.openDatabaseAsync("braintobrain");

      const statement2 = await db.prepareAsync(
        "SELECT * FROM student WHERE student_Id >= $fV"
      );
      const result = await statement2.executeAsync({
        $fV: parseInt(filterValue, 10),
      });
      const allRows = await result.getAllAsync();
      console.log("Dados recuperados:", allRows); // Verifique no console os dados recuperados

      setData(allRows);
    } finally {
      await statement2.finalizeAsync();
    }
  };

  const deleteStudent = async () => {
    try {
      const db = await SQLite.openDatabaseAsync("braintobrain");
      await db.runAsync("DELETE FROM student WHERE student_Id = $value", {
        $value: 1,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateStudent = async () => {
    try {
      const db = await SQLite.openDatabaseAsync("braintobrain");
      await db.runAsync("UPDATE student SET email = ? WHERE student_Id = ?", [
        "guilherme@gmail.com",
        1,
      ]); // Binding unnamed parameters from variadic arguments
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    createTable();
  }, []);

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
          value={email}
          onChangeText={setEmail}
        />

        <TextInputMask
          type={"cel-phone"}
          options={{
            maskType: "BRL",
            withDDD: true,
            dddMask: "(99) ",
          }}
          value={telefone}
          onChangeText={setTelefone}
          placeholder="(XX) XXXXX-XXXX"
          style={{
            width: 250,
            backgroundColor: "white",
            color: "black",
            padding: 15,
          }}
        />

        {show && (
          <DateTimePicker
            onChange={onChange}
            testID="dateTimePicker"
            mode={mode}
            value={date}
            is24Hour={true}
          />
        )}
        <TouchableOpacity onPress={toggleDatePicker}>
          <TextInput
            style={styles.input}
            label="Data de nascimento"
            editable={false}
            value={formattedDate}
          />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          label="Senha"
          secureTextEntry={!showPassword}
          value={password}
          right={
            <TextInput.Icon
              icon={showPassword ? "eye-off" : "eye"}
              color="black"
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />
      </View>
      <View>
        <Button
          style={styles.cadastroBotao}
          buttonColor="#04A9C8"
          mode="contained"
          onPress={() => insertStudent()}
        >
          Cadastrar
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
    color: "black",
  },
  cadastroBotao: {
    width: 150,
    marginHorizontal: "auto",
    borderRadius: 33,
    marginBottom: 20,
  },
});

export default Cadastro;
