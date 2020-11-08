import React from "react";
import ListScreen from "./subscreen/ListScreen";
import { createStackNavigator } from "@react-navigation/stack";
import AddScreen from "./subscreen/AddScreen";
import { rootStackParamList } from "./utils/TypesForNavigation";

const Stack = createStackNavigator<rootStackParamList>();

export default function PeopleScreen() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="ListScreen">
      <Stack.Screen
        name="ListScreen"
        component={ListScreen}
        initialParams={{
          screenName: "PeopleScreen",
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="AddScreen"
        component={AddScreen}
        initialParams={{
          screenName: "PeopleScreen",
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
