import React, { useState } from "react";
import {
  TextInput,
  View,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "./styles";
import { auth } from "../../config/firebaseConfig";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [imgUrl, setimgUrl] = useState("");

  fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ a: 1, b: "Textual content" }),
  });

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL:
            imgUrl ||
            "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
        });
      })
      .catch((err) => console.warn(err.message));
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        style={{ height: 100, width: 100, borderRadius: 20 }}
        source={{
          uri:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/1200px-Signal-Logo.svg.png",
        }}
      />
      <TextInput
        autoFocus
        placeholder="Enter Full Name"
        style={styles.textInput}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        keyboardType="email-address"
        placeholder="Email"
        style={styles.textInput}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        secureTextEntry
        keyboardType="visible-password"
        placeholder="Password"
        style={styles.textInput}
        value={password}
        onChangeText={(text) => setpassword(text)}
      />
      <TextInput
        placeholder="Profile picture url *optional"
        style={styles.textInput}
        value={imgUrl}
        onChangeText={(text) => setimgUrl(text)}
        onSubmitEditing={register}
      />
      <TouchableOpacity onPress={register} style={styles.button}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
          Register
        </Text>
      </TouchableOpacity>
      <View style={{ height: 100 }}></View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
