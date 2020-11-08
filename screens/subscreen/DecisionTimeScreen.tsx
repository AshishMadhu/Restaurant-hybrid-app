import React, { Component } from "react";
import {
  AsyncStorage,
  Alert,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  View
} from "react-native";
import { decisionTimeScreenProp } from "../utils/TypesForNavigation";

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

class DecisionTimeScreen extends Component<decisionTimeScreenProp, any> {
  render() {
    return (
      <View style={styles.decisionTimeScreenContainer}>
        <TouchableOpacity
          style={styles.decisionTimeScreenTouchable}
          onPress={() => {
            AsyncStorage.getItem("people", (inError, data: any) => {
              if (data === null) data = [];
              else data = JSON.parse(data);
              if (data.length === 0) {
                Alert.alert(
                  "That ain't gonna work, Cheif,",
                  "You should probably do that first, no?",
                  [
                    {
                      text: "OK",
                    },
                    {
                      text: "Add a user",
                    },
                  ],
                  {
                    cancelable: false,
                  }
                );
              } else {
                AsyncStorage.getItem(
                  "restaurants",
                  (inError: any, rdata: any) => {
                    if (rdata === null) rdata = [];
                    else rdata = JSON.parse(rdata);
                    if (rdata.length === 0) {
                      Alert.alert(
                        "That ain't gonna work, Cheif!",
                        "You haven't added any restaurants. You should do that first.",
                        [
                          {
                            text: "Ok",
                          },
                        ],
                        { cancelable: false }
                      );
                    } else {
                      this.props.navigation.navigate("WhosGoingScreen", {});
                    }
                  }
                );
              }
            });
          }}
        >
          <Image
            source={require("../../assets/images/its-decision-time.android.png")}
          />
          <Text style={{ paddingTop: 20 }}>(click the food to get going)</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DecisionTimeScreen;
