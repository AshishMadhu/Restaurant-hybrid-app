import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Modal,
  Text,
  Platform,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { choiceScreenProp } from "../utils/TypesForNavigation";
import {
  getParticipants,
  getChosenRestaurants,
  setChosenRestaurants,
  getFilteredRestaurants,
  getRandome,
} from "../utils/globals";
import CustomButton from "../../components/CustomButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      android: {},
      ios: {
        paddingTop: 20,
      },
    }),
  },
  selectedContainer: {
    flex: 1,
    justifyContent: "center",
  },
  selectedInnerContainer: {
    alignItems: "center",
  },
  selectedName: {
    fontSize: 32,
  },
  selectedDetails: {
    paddingTop: 80,
    paddingBottom: 80,
    alignItems: "center",
  },
  selectedDetailsLine: {
    fontSize: 18,
  },
  listContainer: {
    width: "94%",
  },
  listItem: {
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
  headline: {
    fontSize: 32,
    alignItems: "center",
    paddingBottom: 10,
  },
  vetoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  vetoInnerContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  vetoHeadlineContainer: {
    paddingBottom: 40,
  },
  vetoHeadline: {
    fontSize: 32,
    fontWeight: "bold",
  },
  vetoScrollViewContainer: {
    height: "50%",
  },
  vetoParticipantContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  vetoParticipantName: {
    fontSize: 24,
  },
  vetoButtonContainer: {
    width: "100%",
    alignItems: "center",
    paddingTop: 40,
  },
});

type State = {
  participantsList: any;
  participantsListRefresh: boolean;
  selectedVisible: boolean;
  vetoDisabled: boolean;
  vetoVisible: boolean;
  vetoText: string;
};

class ChoiceScreen extends Component<choiceScreenProp, State> {
  chosenRestaurants: any = getChosenRestaurants();
  participants: any = getParticipants();
  filteredRestaurants: any = getFilteredRestaurants();
  constructor(props: choiceScreenProp) {
    super(props);
    this.state = {
      participantsList: getParticipants(),
      participantsListRefresh: false,
      selectedVisible: false,
      vetoDisabled: false,
      vetoVisible: false,
      vetoText: "Veto",
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Modal
          presentationStyle="formSheet"
          visible={this.state.selectedVisible}
          animationType="slide"
          onRequestClose={() => {}}
        >
          <View style={styles.selectedContainer}>
            <View style={styles.selectedInnerContainer}>
              <Text style={styles.selectedName}>
                {this.chosenRestaurants.name}
              </Text>
              <View style={styles.selectedDetails}>
                <Text style={styles.selectedDetailsLine}>
                  This is a {"\u2605".repeat(this.chosenRestaurants.rating)}{" "}
                  rating
                </Text>
                <Text style={styles.selectedDetailsLine}>
                  {this.chosenRestaurants.cuisine} restaurant
                </Text>
                <Text style={styles.selectedDetailsLine}>
                  with a price rating of{" "}
                  {"$".repeat(this.chosenRestaurants.price)}
                </Text>
                <Text style={styles.selectedDetailsLine}>
                  that{" "}
                  {this.chosenRestaurants.delivery === "Yes"
                    ? "Does"
                    : "Does not"}{" "}
                  deliver.
                </Text>
              </View>
              <CustomButton
                width="96%"
                text="Accept"
                onPress={() => {
                  this.setState({
                    selectedVisible: false,
                    vetoVisible: false,
                  });
                  this.props.navigation.navigate("PostChoiceScreen", {});
                }}
              />
              <CustomButton
                width="96%"
                text={this.state.vetoText}
                disabled={this.state.vetoDisabled ? true : false}
                onPress={() => {
                  this.setState({
                    selectedVisible: false,
                    vetoVisible: true,
                  });
                }}
              />
            </View>
          </View>
        </Modal>
        <Modal
          presentationStyle="formSheet"
          visible={this.state.vetoVisible}
          animationType="slide"
          onRequestClose={() => {}}
        >
          <View style={styles.vetoContainer}>
            <View style={styles.vetoInnerContainer}>
              <Text style={styles.vetoHeadline}>Who's vetoing?</Text>
              <ScrollView style={styles.vetoScrollViewContainer}>
                {this.participants.map((inValue: any) => {
                  if (inValue.vetoed === "no") {
                    return (
                      <TouchableOpacity
                        key={inValue.key}
                        style={styles.vetoParticipantContainer}
                        onPress={() => {
                          for (const participant of this.participants) {
                            if (participant.key === inValue) {
                              participant.vetoed = "yes";
                              break;
                            }
                          }
                          let vetoStillAvailable = false;
                          let buttonLabel = "No Vetoes Left";
                          for (const participant of this.participants) {
                            if (participant.vetod === "no") {
                              vetoStillAvailable = true;
                              buttonLabel = "Veto";
                              break;
                            }
                          }
                          for (let i = 0; i < this.filteredRestaurants; i++) {
                            if (
                              this.filteredRestaurants[i].key ===
                              this.chosenRestaurants.key
                            ) {
                              this.filteredRestaurants.splice(i, 1);
                              break;
                            }
                          }
                          this.setState({
                            selectedVisible: false,
                            vetoVisible: false,
                            vetoText: buttonLabel,
                            vetoDisabled: !vetoStillAvailable,
                            participantsListRefresh: !this.state
                              .participantsListRefresh,
                          });
                          if (this.filteredRestaurants.length === 1)
                            this.props.navigation.navigate(
                              "PostChoiceScreen",
                              {}
                            );
                        }}
                      >
                        <Text style={styles.vetoParticipantName}>
                          {inValue.firstName + " " + inValue.lastName}
                        </Text>
                      </TouchableOpacity>
                    );
                  }
                })}
              </ScrollView>
              <View style={styles.vetoButtonContainer}>
                <CustomButton
                  text="Never Mind"
                  width="94%"
                  onPress={() => {
                    this.setState({
                      selectedVisible: true,
                      vetoVisible: false,
                    });
                  }}
                ></CustomButton>
              </View>
            </View>
          </View>
        </Modal>
        <Text style={styles.headline}>Choice Screen</Text>
        <FlatList
          style={styles.listContainer}
          data={this.state.participantsList}
          extraData={this.state.participantsListRefresh}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text style={styles.listItemName}>
                {item.firstName} {item.lastName} ({item.relationship})
              </Text>
              <Text>Vetod: {item.vetoed}</Text>
            </View>
          )}
        />
        <CustomButton
          text="Randomly Choose"
          width="94%"
          onPress={() => {
            const selectedNumber = getRandome(
              0,
              this.filteredRestaurants.length - 1
            );
            console.log(selectedNumber, this.filteredRestaurants.length - 1);
            this.chosenRestaurants = this.filteredRestaurants[selectedNumber];
            setChosenRestaurants(this.chosenRestaurants);
            this.setState({
              selectedVisible: true,
            });
          }}
        />
      </View>
    );
  }
}

export default ChoiceScreen;
