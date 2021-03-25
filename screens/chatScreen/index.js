import React, { useLayoutEffect, useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Keyboard,
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import firebase, * as firbase from "firebase";

import Avatar from "../../components/Avatar";
import styles from "./styles";
import colors from "../../constants/colors";
import { db, auth } from "../../config/firebaseConfig";

const Chat = ({ navigation, route }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("chats")
      .doc(route.params.id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setChatMessages(snapshot.docs.map((doc) => doc.data()));
      });
    return unsubscribe;
  });

  const scrollViewRef = useRef();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: false,
      headerTitle: () => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar width={30} height={30} url={chatMessages?.[0]?.photoUrl} />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              color: "white",
            }}
          >
            {route.params.chatName}
          </Text>
        </View>
      ),
      headerRight: () => (
        <View
          style={{ marginRight: 20, flexDirection: "row" }}
          activeOpacity={0.3}
        >
          <TouchableOpacity>
            <FontAwesome
              style={{ marginRight: 20 }}
              name="phone"
              size={24}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="videocam" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation, messages]);
  const sendMessage = () => {
    if (message.length > 0) {
      Keyboard.dismiss();
      db.collection("chats").doc(route.params.id).collection("messages").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message,
        displayName: auth.currentUser.displayName,
        email: auth.currentUser.email,
        photoUrl: auth.currentUser.photoURL,
      });

      setMessage("");
    } else {
      return;
    }
  };

  useLayoutEffect(() => {
    const unsubscribe = db
      .collection("chats")
      .doc(route.params.id)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    return unsubscribe;
  }, [route]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={90}
        style={styles.container}
      >
        <ScrollView
          ref={scrollViewRef}
          style={{ backgroundColor: "white" }}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({ animated: true })
          }
        >
          {messages.map(({ id, data }) =>
            data.email === auth.currentUser.email ? (
              <View key={id} style={styles.reciver}>
                <View style={{ position: "absolute", bottom: -10, right: -15 }}>
                  <Avatar width={40} height={40} url={data.photoUrl} />
                </View>
                <Text style={styles.msgReciver}>{data.message}</Text>
                <View style={{ position: "absolute", top: -20, right: 20 }}>
                  <Text style={{ fontWeight: "bold", color: "#999" }}>
                    {data.displayName}
                  </Text>
                </View>
              </View>
            ) : (
              <View key={id} style={styles.sender}>
                <View style={{ position: "absolute", bottom: -10, left: -15 }}>
                  <Avatar width={40} height={40} url={data.photoUrl} />
                </View>
                <Text style={styles.msgSender}>{data.message}</Text>
                <View style={{ position: "absolute", top: -20, left: 20 }}>
                  <Text style={{ fontWeight: "bold", color: "#999" }}>
                    {data.displayName}
                  </Text>
                </View>
              </View>
            )
          )}
        </ScrollView>
        <View style={styles.footer}>
          <TextInput
            autoFocus
            placeholder="Type your message"
            style={styles.textInput}
            value={message}
            onChangeText={(text) => setMessage(text)}
            onSubmitEditing={sendMessage}
          />
          <TouchableOpacity
            onPress={sendMessage}
            style={styles.button}
            activeOpacity={0.7}
          >
            <FontAwesome name="send" size={24} color={colors.mainColor} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Chat;
