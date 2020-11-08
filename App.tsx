import "react-native-gesture-handler";
import * as React from "react";
import { Image, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import DecisionScreen from "./screens/DecisionScreen";
import PeopleScreen from "./screens/PeopleScreen";
import RestaurantsScreen from "./screens/RestaurantsScreen";

const platformOS = Platform.OS.toLowerCase();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="DecisionScreen"
        backBehavior="history"
        lazy={true}
        tabBarOptions={{
          activeTintColor: "#226600", // tab text color
          inactiveTintColor: "#F5F4F4",
          activeBackgroundColor: "#8BC540",
          inactiveBackgroundColor: "#349746",
          tabStyle: {
            paddingTop: 5,
          },
          style: {
            height: 55,
          },
          labelPosition: "below-icon",
          labelStyle: {
            marginBottom: 6,
          },
        }}
      >
        <Tab.Screen
          name="PeopleScreen"
          component={PeopleScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require("./assets/images/icon-people.png")}
                style={{ width: 32, height: 32, tintColor: color }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="DecisionScreen"
          component={DecisionScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("./assets/images/icon-decision.png")}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: color,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="RestaurantsScreen"
          component={RestaurantsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("./assets/images/icon-restaurants.png")}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: color,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
