import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Kalkulator from "./src/screens/Kalkulator";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={() => ({
        headerShown: false
      })}>
        <Stack.Screen name="kalkulator" component={Kalkulator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}