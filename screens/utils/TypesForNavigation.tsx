import { StackScreenProps } from "@react-navigation/stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

// props and routs for  People and restaruant screens subscreens
export type rootStackParamList = {
  ListScreen: { screenName: string };
  AddScreen: { screenName: string };
  DecisionTimeScreen: {};
};
export type listScreenStates = {
  listData: Array<[]>;
};
export type listScreenProps = StackScreenProps<
  rootStackParamList,
  "ListScreen"
>;
export type addScreenProps = StackScreenProps<rootStackParamList, "AddScreen">;

// props and routes for TabNavigator
type rootStackParamListForTabNavigator = {
  PeopleScreen: {};
  RestaruantsScreen: {};
  DecisionTimeScreen: {};
};

export type decisionScreenProps = BottomTabScreenProps<
  rootStackParamListForTabNavigator,
  "DecisionTimeScreen"
>;

// props and state for DecisionScreen's subscreeen
export type rootStackParamListforDecisionScreen = {
  DecisionTimeScreen: {};
  WhosGoingScreen: {};
  PreFiltersScreen: {};
  ChoiceScreen: {};
  PostChoiceScreen: {};
};

export type decisionTimeScreenProp = StackScreenProps<
  rootStackParamListforDecisionScreen,
  "DecisionTimeScreen"
>;
export type whosGoingScreenProp = StackScreenProps<
  rootStackParamListforDecisionScreen,
  "WhosGoingScreen"
>;
export type preFiltersScreenProp = StackScreenProps<
  rootStackParamListforDecisionScreen,
  "PreFiltersScreen"
>;
export type choiceScreenProp = StackScreenProps<
  rootStackParamListforDecisionScreen,
  "ChoiceScreen"
>
export type postChoiceProp = StackScreenProps<
  rootStackParamListforDecisionScreen,
  "PostChoiceScreen"
>
