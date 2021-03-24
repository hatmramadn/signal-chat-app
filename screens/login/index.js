import React, { useState, useEffect } from "react";
import {
  TextInput,
  View,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import colors from "../../constants/colors";
import styles from "./styles";
import { auth } from "../../config/firebaseConfig";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authedUser) => {
        navigation.replace("Home");
      })
      .catch((err) => console.warn(err.message));
  };
  useEffect(() => {
    console.log(auth);
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);
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
        keyboardType="email-address"
        placeholder="Email"
        style={styles.textInput}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        secureTextEntry
        autoFocus
        keyboardType="visible-password"
        placeholder="Password"
        style={styles.textInput}
        value={password}
        onChangeText={(text) => setpassword(text)}
        onSubmitEditing={signIn}
      />
      <TouchableOpacity onPress={signIn} style={styles.button}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
        style={styles.buttonBordered}
      >
        <Text
          style={{ color: colors.mainColor, fontWeight: "bold", fontSize: 16 }}
        >
          Register
        </Text>
      </TouchableOpacity>
      <View style={{ height: 100 }}></View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
