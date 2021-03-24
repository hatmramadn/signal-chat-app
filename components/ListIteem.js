import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Avatar from "./Avatar";
const ListIteem = ({
  id,
  chatTitle,
  chatDesc,
  avatarUrl,
  avHeight,
  avWidth,
  enterChat,
}) => {
  return (
    <TouchableOpacity
      onPress={() => enterChat(id, chatTitle)}
      style={styles.container}
      activeOpacity={0.5}
    >
      <Avatar
        width={60}
        height={60}
        url="https://pbs.twimg.com/profile_images/1362298505348456448/hWQL8hpr_400x400.jpg"
      />

      <View>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {chatTitle}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail">
          {chatDesc}
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
