import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text } from "react-native";
import ChatList from "./ChatList";
import Chatting from "./Chatting";
import Login from "./Login";

const Stack = createStackNavigator();

const Chat = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chats"
        component={ChatList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chatting"
        component={Chatting}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    // <View>
    //   <Text>a</Text>
    // </View>
  );
};

export default Chat;
