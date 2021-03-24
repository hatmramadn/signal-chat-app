import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./screens/login";
import RegisterScreen from "./screens/register";
import HomeScreen from "./screens/Home";
import AddChat from "./screens/addChat";
import ChatScreen from "./screens/chatScreen";

const Stack = createStackNavigator();
const globalScreenOptions = {
  headerStyle: { backgroundColor: "#3182e3" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddChat" component={AddChat} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
