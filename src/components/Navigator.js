import React from "react";
import { View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Calculator from "../screens/Calculator";
import Chat from "../screens/Chat";

const Tab = createMaterialBottomTabNavigator();

const Navigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Calculator"
      activeColor="red"
      barStyle={{
        backgroundColor: "black",
        borderTopWidth: 1,
        borderColor: "red",
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Calculator") {
            iconName = focused ? "ios-calculator" : "ios-calculator-outline";
          } else if (route.name === "Chat") {
            iconName = focused ? "ios-chatbubbles" : "ios-chatbubbles-outline";
          }

          return <Ionicons name={iconName} size={20} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Calculator" component={Calculator} />
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
};

export default Navigator;
