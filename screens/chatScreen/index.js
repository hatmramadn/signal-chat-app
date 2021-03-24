import React, { useLayoutEffect } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import Avatar from "../../components/Avatar";

const Chat = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: false,
      headerTitle: () => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar
            width={30}
            height={30}
            url="https://pbs.twimg.com/profile_images/1362298505348456448/hWQL8hpr_400x400.jpg"
          />
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
  }, [navigation]);
  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <Text>this is Chat Screen</Text>
    </SafeAreaView>
  );
};

export default Chat;
