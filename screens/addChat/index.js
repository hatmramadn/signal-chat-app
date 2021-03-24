import React, { useLayoutEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";
import { db } from "../../config/firebaseConfig";
import { StatusBar } from "expo-status-bar";
const AddChat = ({ navigation }) => {
  const addChat = async () => {
    await db
      .collection("chats")
      .add({
        chatName,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((err) => alert(err.message));
  };
  const [chatName, setChatName] = useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Chats",
      headerTitle: "Create a new Chat",
    });
  }, [navigation]);

  return (
    <View>
      <StatusBar style="light" />
      <View style={{ margin: 20 }}>
        <TextInput
          placeholder="Enter Chat name"
          style={styles.textInput}
          value={chatName}
          onChangeText={(text) => setChatName(text)}
          onSubmitEditing={addChat}
        />
        <TouchableOpacity onPress={addChat} style={styles.button}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            Create
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddChat;
