import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { useNavigation } from "@react-navigation/native";
import { IconButton, MD3Colors } from "react-native-paper";
import { CheckBox, Icon } from "@rneui/themed";

const ProfilePage2 = () => {
  const navigation = useNavigation();

  const [checked, setChecked] = React.useState(false);
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const toggleCheckbox = () => setChecked(!checked);
  const toggleCheckbox1 = () => setChecked1(!checked1);
  const toggleCheckbox2 = () => setChecked2(!checked2);

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  const [text, setText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [documents, setDocuments] = useState([]);

  const pickDocuments = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf", // Especifica que quer apenas PDFs
      multiple: true, // Permite a seleção de vários arquivos
    });

    if (result.type !== "cancel") {
      setDocuments((prevDocs) => [...prevDocs, result]);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text style={styles.label}>DISPONIBILIDADE:</Text>
          <CheckBox
            containerStyle={styles.inputCheckbox}
            textStyle={{ fontSize: 16, color: '#039BE5' }}
            start
            title="Matutino"
            checked={check1}
            onPress={() => setCheck1(!check1)}
          />
          <CheckBox
            containerStyle={styles.inputCheckbox}
            textStyle={{ fontSize: 16, color: '#039BE5' }}
            start
            title="Vespertino"
            checked={check2}
            onPress={() => setCheck2(!check2)}
          />
          <CheckBox
            containerStyle={styles.inputCheckbox}
            textStyle={{ fontSize: 16, color: '#039BE5' }}
            start
            title="Noturno"
            checked={check3}
            onPress={() => setCheck3(!check3)}
          />
        </View>
        <View style={styles.inputSenha}>
          <Text style={styles.label}>ALTERAR SENHA</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="NOVA SENHA"
              placeholderTextColor="#039BE5"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="NOVA SENHA CONFIRMA"
              placeholderTextColor="#039BE5"
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>EDITAR</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.navIcon}>
          <IconButton
            icon="arrow-left-circle"
            iconColor="white"
            size={40}
            onPress={() => navigation.goBack("Edit1")}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Conectando Mentes, Compartilhando Sabedoria. Este site foi
            desenvolvido para fins acadêmicos, para a matéria de Projeto
            Desenvolvimento de uma Aplicação - Universidade PUC Minas.
          </Text>
          <Text style={styles.footerText}>©2010 - 2024 Privacy-Terms</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B3E5FC",
  },

  contentContainer: {
    margin: "auto",
    gap: 0
  },
  inputSenha: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20,
    position: "relative",
  },
  inputCheckbox: {
    width: "80%",
    padding: 15,
    borderRadius: 10,
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: 'bold'
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    width: "80%",
    backgroundColor: "#039BE5",
    position: "relative",
    padding: 10,
    borderRadius: 10,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
    fontSize: 25,
    color: "#039BE5",
    fontWeight: "bold",
  },
  label2: {
    margin: 8,
    fontSize: 16,
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  navButton: {
    backgroundColor: "#00ACC1",
    paddingVertical: 15,
    width: 120,
    borderRadius: 10,
  },
  navIcon: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  navButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  footer: {
    marginTop: 40,
    alignItems: "center",
  },
  footerText: {
    color: "#0077C2",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 5,
  },
});

export default ProfilePage2;
