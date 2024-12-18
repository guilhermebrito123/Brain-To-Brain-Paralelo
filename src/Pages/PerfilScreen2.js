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
import { Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
import { useNavigation } from "@react-navigation/native";
import { CheckBox } from "react-native-elements";

const ProfilePage2 = () => {
  const navigation = useNavigation();

  const [checked, setChecked] = React.useState(true);
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  const toggleCheckbox1 = () => setChecked1(!checked1);
  const toggleCheckbox2 = () => setChecked2(!checked2);

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
        <Text style={styles.label}>DISPONIBILIDADE:</Text>
        <View style={styles.checkboxContainer}>
          <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            // Use ThemeProvider to make change for all checkbox
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="red"
          />
          <Text style={styles.label2}>Matutino</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            checked={checked1}
            onPress={toggleCheckbox1}
            // Use ThemeProvider to make change for all checkbox
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="red"
          />
          <Text style={styles.label2}>Vespertino</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            checked={checked2}
            onPress={toggleCheckbox2}
            // Use ThemeProvider to make change for all checkbox
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="red"
          />
          <Text style={styles.label2}>Noturno</Text>
        </View>

        <Text style={styles.label}>ALTERAR SENHA</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="NOVA SENHA"
            placeholderTextColor="#fff"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="NOVA SENHA CONFIRMA"
            placeholderTextColor="#fff"
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.goBack("Edit1")}
          >
            <Text style={styles.navButtonText}>ANTERIOR</Text>
          </TouchableOpacity>
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
    alignItems: "center",
    margin: "auto",
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20,
    position: "relative",
  },
  input: {
    backgroundColor: "#039BE5",
    color: "#fff",
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
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
    width: "80%",
    justifyContent: "start",
  },
  navButton: {
    backgroundColor: "#00ACC1",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  navButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
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
