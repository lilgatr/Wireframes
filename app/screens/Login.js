import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  Text,
  Button,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";

const Login = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleShowModal = () => setModalVisible(!modalVisible);

  return (
    <View>
      <Image
        source={require("../../assets/icon.png")}
        style={{ width: 150, height: 150 }}
      />
      <TouchableOpacity>
        <Text style={styles.apple_button_text}> Sign in with Apple</Text>
      </TouchableOpacity>
      <Button title="Sign in with Email" onPress={handleShowModal} />
      <Button title="Forgot Password" />
      <Modal visible={modalVisible}>
        <View style={styles.modal_style}>
          <TextInput placeholder="Email"></TextInput>
          <TextInput placeholder="Password"></TextInput>
          <TouchableOpacity>
            <Text>Login</Text>
          </TouchableOpacity>

          <Button title="Close" onPress={handleShowModal} />
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  apple_button: {
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 15,
    marginBottom: 10,
  },
  apple_button_text: {
    color: "#fff",
    backgroundColor: "black",
    fontSize: 20,
  },
  modal_style: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;
