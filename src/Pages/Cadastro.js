import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
} from "react-native";
import { Button } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import CryptoJS from "crypto-js";
import { TextInputMask } from "react-native-masked-text";

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
          onChangeText={(text) => setEmail(text)}
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
          right={
            <TextInput.Icon
              icon={showPassword ? "eye-off" : "eye"}
              color="black"
              onPress={() => setShowPassword(!showPassword)}
            />
          }
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
