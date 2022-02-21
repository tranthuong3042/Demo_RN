import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, TextInput, Image } from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "./Home";

const Stack = createStackNavigator();
const App = ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={Home}
        />
        <Stack.Screen
          name={"SignIn"}
          component={SignIn}
        />
        <Stack.Screen
          name={"SignUp"}
          component={SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const style = StyleSheet.create({

});
export default App;
