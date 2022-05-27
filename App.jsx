// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Router from "./src/router";
import { CartProvider } from "./src/context/cartContext";

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </CartProvider>
  );
}
