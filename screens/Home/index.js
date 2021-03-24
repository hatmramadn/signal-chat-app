import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

import styles from "./styles";
import ListIteem from "../../components/ListIteem";
import Avatar from "../../components/Avatar";
import { db, auth } from "../../config/firebaseConfig";
import colors from "../../constants/colors";

const Home = ({ navigation }) => {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    const unsubscribe = db.collection("chats").onSnapshot((snapshot) =>
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return unsubscribe;
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "white" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerLeft: () => (
        <TouchableOpacity
          onPress={() =>
            auth
              .signOut()
              .then(() => navigation.replace("Login"))
              .catch((err) => alert(err.message))
          }
          style={{ marginLeft: 20 }}
          activeOpacity={0.3}
        >
          <Avatar height={40} width={40} url={auth?.currentUser?.photoURL} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View
          style={{ marginRight: 20, flexDirection: "row" }}
          activeOpacity={0.3}
        >
          <TouchableOpacity>
            <AntDesign
              style={{ marginRight: 20 }}
              name="camerao"
              size={24}
              color={colors.mainColor}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("AddChat")}>
            <SimpleLineIcons name="pencil" size={24} color={colors.mainColor} />
          </TouchableOpacity>
        </View>
      ),
    });
  });
  const enterChat = (id, chatName) => {
    navigation.navigate("Chat", {
      id,
      chatName,
    });
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        {chats.map(({ id, data: { chatName } }) => (
          <ListIteem
            key={id}
            id={id}
            chatTitle={chatName}
            enterChat={enterChat}
            chatDesc="ent fen ya m3lm"
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
