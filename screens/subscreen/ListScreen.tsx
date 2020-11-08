import React, { Component } from "react";
import { Root, Toast } from "native-base";
import {
  View,
  StyleSheet,
  Platform,
  Text,
  FlatList,
  Alert,
  AsyncStorage,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import { listScreenProps, listScreenStates } from "../utils/TypesForNavigation";

export const styles = StyleSheet.create({
  listViewContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        paddingTop: 10,
      },
      android: {},
    }),
  },
  listStyle: {
    width: "96%",
  },
  listItemContainer: {
    flexDirection: "row",
    marginTop: 4,
    marginBottom: 4,
    borderColor: "#e0e0e0",
    borderBottomWidth: 2,
    alignItems: "center",
  },
  listItemName: {
    flex: 1,
  },
});

class ListScreen extends Component<listScreenProps, listScreenStates> {
  listener: any;
  key = "";
  screenName = "";
  constructor(props: listScreenProps) {
    super(props);
    this.screenName = this.props.route.params.screenName;
    this.state = {
      listData: [],
    };
  }

  render() {
    var buttonName = "Add restaurant";
    this.key = "restaurants";
    var toastText = "Restaurant deleted";
    if (this.screenName === "PeopleScreen") {
      buttonName = "Add People";
      this.key = "people";
      toastText = "Person deleted";
    }

    return (
      <Root>
        <View style={styles.listViewContainer}>
          <CustomButton
            text={buttonName}
            width="96%"
            onPress={() =>
              this.props.navigation.navigate("AddScreen", {
                screenName: this.screenName,
              })
            }
            // backgroundColor="#349747"
          />
          <FlatList
            style={styles.listStyle}
            data={this.state.listData}
            renderItem={({ item }: any) => (
              <View style={styles.listItemContainer}>
                {this.screenName === "PeopleScreen" ? (
                  <Text style={styles.listItemName}>
                    {item.firstName} {item.lastName}
                  </Text>
                ) : (
                  <Text style={styles.listItemName}>{item.name}</Text>
                )}
                <CustomButton
                  text="Delete"
                  onPress={() => {
                    Alert.alert(
                      "Please confirm",
                      "Are you sure you want to delete this restaurant?",
                      [
                        {
                          text: "Yes",
                          onPress: () => {
                            AsyncStorage.getItem(
                              this.key,
                              function (
                                this: ListScreen,
                                inError: any,
                                values: Array<[]> | any
                              ) {
                                if (values === null) values = [];
                                else values = JSON.parse(values);
                                for (let i = 0; i < values.length; i++) {
                                  const restaurant = values[i];
                                  if (restaurant.key === item.key) {
                                    values.splice(i, 1);
                                    break;
                                  }
                                }
                                AsyncStorage.setItem(
                                  this.key,
                                  JSON.stringify(values),
                                  function (this: ListScreen) {
                                    this.setState({
                                      listData: values,
                                    });
                                    Toast.show({
                                      text: toastText,
                                      position: "bottom",
                                      type: "danger",
                                      duration: 2000,
                                    });
                                  }.bind(this)
                                );
                              }.bind(this)
                            );
                          },
                        },
                        {
                          text: "No",
                        },
                        {
                          text: "Cancel",
                          style: "cancel",
                        },
                      ],
                      {
                        cancelable: true,
                      }
                    );
                  }}
                />
              </View>
            )}
          />
        </View>
      </Root>
    );
  }

  componentDidMount() {
    this.listener = this.props.navigation.addListener("focus", () => {
      AsyncStorage.getItem(
        this.key,
        function (this: ListScreen, inError: any, values: any) {
          if (values === null) values = [];
          else {
            if (values != JSON.stringify(this.state.listData)) {
              values = JSON.parse(values);
              this.setState({ listData: values });
            }
          }
        }.bind(this)
      );
    });
  }

  componentWillUnmount() {
    this.listener();
  }
}

export default ListScreen;
