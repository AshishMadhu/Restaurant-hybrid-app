import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListScreen from './subscreen/ListScreen';
import AddScreen from './subscreen/AddScreen';
import {rootStackParamList} from './utils/TypesForNavigation';

interface dataInterface {
  name: string;
  cuisione: string;
  price: string;
  rating: string;
  phone: string;
  address: string;
  webSite: string;
  delivery: string;
  key: string;
}

interface RestaurantInterface {
  data: Array<dataInterface>;
}

const Stack = createStackNavigator<rootStackParamList>();

export default function RestaurantsScreen() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="ListScreen">
      <Stack.Screen
        name="ListScreen"
        component={ListScreen}
        options={{
          title: "List of Restaurants",
        }}
        initialParams={{
          screenName: "RestaurantScreen",
        }}
      />
      <Stack.Screen
        name="AddScreen"
        component={AddScreen}
        options={{
          title: "Add Restaurant ",
        }}
      />
    </Stack.Navigator>
  );
}
