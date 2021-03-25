import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { db } from "../config/firebaseConfig";
import Avatar from "./Avatar";
const ListIteem = ({ id, chatTitle, chatDesc, enterChat }) => {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setChatMessages(snapshot.docs.map((doc) => doc.data()));
      });
    return unsubscribe;
  });

  return (
    <TouchableOpacity
      key={id}
      onPress={() => enterChat(id, chatTitle)}
      style={styles.container}
      activeOpacity={0.5}
    >
      <Avatar
        width={60}
        height={60}
        url={
          chatMessages?.[0]?.photoUrl ||
          "https://cdn.dribbble.com/users/267404/screenshots/3713416/talkup.png"
        }
      />

      <View>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {chatTitle}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail">
          {chatMessages?.[0]?.displayName}: {chatMessages?.[0]?.message}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListIteem;

const styles = StyleSheet.create({
  title: {
    fontWeight: "800",
    fontSize: 16,
    marginBottom: 10,
  },

  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    padding: 12,
    borderBottomColor: "#d6d4eb",
    borderBottomWidth: 1,
    borderTopColor: "#d6d4eb",
    borderTopWidth: 1,
  },
});
