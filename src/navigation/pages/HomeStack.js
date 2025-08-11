// HomeStack.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./homePage";
import OverviewPage from "./OverViewPage"

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
      <Stack.Screen name="OverviewPage" component={OverviewPage} options={{ title: "Overview" }} />
    </Stack.Navigator>
  );
}
