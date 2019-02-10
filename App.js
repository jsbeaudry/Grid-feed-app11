import React from "react";
import { View, Text, Platform } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import App11 from "./app11/home";

import { Ionicons } from "@expo/vector-icons";

const A11 = createStackNavigator({
  home: {
    screen: App11,
    navigationOptions: ({ navigation }) => ({
      title: "",
      header: null,
      gesturesEnabled: false
    })
  }
});

export default createAppContainer(A11);
