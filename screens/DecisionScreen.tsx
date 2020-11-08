import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { rootStackParamListforDecisionScreen } from "./utils/TypesForNavigation";
import { createStackNavigator } from "@react-navigation/stack";
import WhosGoingScreen from "./subscreen/WhosGoingScreen";
import PreFilterScreen from "./subscreen/PreFilterScreen";
import ChoiceScreen from "./subscreen/ChoiceScreen";
import PostChoiceScreen from "./subscreen/PostChoiceScreen";
import DecisionTimeScreen from "./subscreen/DecisionTimeScreen";

const styles = StyleSheet.create({
  decisionTimeScreenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  decisionTimeScreenTouchable: {
    alignItems: "center",
    justifyContent: "center",
  },
});

const Stack = createStackNavigator<rootStackParamListforDecisionScreen>();

export default function DecisionScreen() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="DecisionTimeScreen">
      <Stack.Screen
        name="DecisionTimeScreen"
        component={DecisionTimeScreen}
      ></Stack.Screen>
      <Stack.Screen
        name="WhosGoingScreen"
        component={WhosGoingScreen}
      ></Stack.Screen>
      <Stack.Screen
        name="PreFiltersScreen"
        component={PreFilterScreen}
      ></Stack.Screen>
      <Stack.Screen name="ChoiceScreen" component={ChoiceScreen}></Stack.Screen>
      <Stack.Screen
        name="PostChoiceScreen"
        component={PostChoiceScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
