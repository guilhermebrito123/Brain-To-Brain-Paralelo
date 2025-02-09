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
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import { useNavigation } from "@react-navigation/native";
import { IconButton, MD3Colors } from "react-native-paper";
import { useSQLiteContext } from "expo-sqlite"; // Importa o contexto

const ProfilePage = () => {
  const db = useSQLiteContext(); // Acessa o banco via contexto
  const [students, setStudents] = useState([]);

  const navigation = useNavigation();

  const [profileImage, setProfileImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.uri);
    }
  };

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

  React.useEffect(() => {
    const fetchStudents = async () => {
      try {
        const result = await db.getAllAsync("SELECT * FROM student");
        setStudents(result);
      } catch (error) {
        console.error("Erro ao buscar students:", error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.avatarContainer}>
          <TouchableOpacity onPress={pickImage} style={styles.avatarButton}>
            {profileImage ? (
              <Image
                source={{ uri: profileImage }}
                style={styles.avatarImage}
              />
            ) : (
              <Ionicons
                name="person-circle-outline"
                size={100}
                color="#039BE5"
              />
            )}
          </TouchableOpacity>
          <Text style={styles.avatarText}>EDITAR AVATAR</Text>
        </View>

        {students.map((aluno, index) => (
          <View key={index} style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={aluno.email}
              placeholderTextColor="#039BE5"
            />
          </View>
        ))}

        <View style={styles.navButton}>
          <IconButton
            icon="arrow-right-circle"
            iconColor="white"
            size={40}
            onPress={() => navigation.navigate("Edit2")}
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
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  avatarButton: {
    borderRadius: 50,
    overflow: "hidden",
    marginBottom: 10,
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarText: {
    color: "#039BE5",
    fontSize: 16,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
    position: "relative",
  },
  input: {
    backgroundColor: "#fff",
    color: "#039BE5",
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  dropdownArrow: {
    position: "absolute",
    right: 15,
    top: 18,
    color: "#039BE5",
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "end",
    width: "100%",
  },
  navButton: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
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

export default ProfilePage;
