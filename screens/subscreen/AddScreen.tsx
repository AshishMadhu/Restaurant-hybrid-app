import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Platform,
  Picker,
  AsyncStorage,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";
import { addScreenProps } from "../utils/TypesForNavigation";

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: "white",
  },
  innerContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingTop: 20,
  },
  formContainer: {
    width: "96%",
  },
  fieldLabel: {
    marginLeft: 10,
  },
  pickerContainer: {
    ...Platform.select({
      ios: {},
      android: {
        width: "95%",
        borderRadius: 8,
        borderColor: "#c0c0c0",
        borderWidth: 2,
        marginLeft: 10,
        marginBottom: 20,
        marginTop: 4,
      },
    }),
  },
  picker: {},
  buttonContainer: {
    flexDirection: "row",
  },
});

interface State {
  [key: string]: string;
}

class AddScreen extends Component<addScreenProps, State> {
  screenName = "";
  key = "people";

  constructor(props: addScreenProps) {
    super(props);
    this.screenName = this.props.route.params.screenName;
    this.state = {
      firstName: "",
      lastName: "",
      relationShip: "",
      key: `p_${new Date().getTime()}`,
    };
    if (this.screenName === "RestaurantScreen") this.key = "restaurants";
    this.state = {
      name: "",
      cuisine: "",
      price: "",
      rating: "",
      phone: "",
      address: "",
      webSite: "",
      delivery: "",
      key: `r_${new Date().getTime()}`,
    };
  }

  restaurantsScreenForm() {
    return (
      <View style={styles.innerContainer}>
        <View style={styles.formContainer}>
          {/* ########## Name ########## */}
          <CustomTextInput
            label="Name"
            maxLength={40}
            stateHolder={this}
            stateFieldName="name"
          />
          {/* ########## Cuisine ########## */}
          <Text style={styles.fieldLabel}>Cuisine</Text>
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              prompt="Cuisine"
              selectedValue={this.state.cuisine}
              onValueChange={(inItemValue) =>
                this.setState({ cuisine: inItemValue })
              }
              itemStyle={{
                backgroundColor: "grey",
                color: "blue",
                fontFamily: "Ebrima",
                fontSize: 17,
              }}
            >
              <Picker.Item label="-- select --" value="" />
              <Picker.Item label="Algerian" value="Algerian" />
              <Picker.Item label="American" value="American" />
              <Picker.Item label="BBQ" value="BBQ" />
              <Picker.Item label="Belgian" value="Belgian" />
              <Picker.Item label="Brazilian" value="Brazilian" />
              <Picker.Item label="British" value="British" />
              <Picker.Item label="Cajun" value="Cajun" />
              <Picker.Item label="Canadian" value="Canadian" />
              <Picker.Item label="Chinese" value="Chinese" />
              <Picker.Item label="Cuban" value="Cuban" />
              <Picker.Item label="Egyptian" value="Egyptian" />
              <Picker.Item label="Filipino" value="Filipino" />
              <Picker.Item label="French" value="French" />
              <Picker.Item label="German" value="German" />
              <Picker.Item label="Greek" value="Greek" />
              <Picker.Item label="Haitian" value="Haitian" />
              <Picker.Item label="Hawaiian" value="Hawaiian" />
              <Picker.Item label="Indian" value="Indian" />
              <Picker.Item label="Irish" value="Irish" />
              <Picker.Item label="Italian" value="Italian" />
              <Picker.Item label="Japanese" value="Japanese" />
              <Picker.Item label="Jewish" value="Jewish" />
              <Picker.Item label="Kenyan" value="Kenyan" />
              <Picker.Item label="Korean" value="Korean" />
              <Picker.Item label="Latvian" value="Latvian" />
              <Picker.Item label="Libyan" value="Libyan" />
              <Picker.Item label="Mediterranean" value="Mediterranean" />
              <Picker.Item label="Mexican" value="Mexican" />
              <Picker.Item label="Mormon" value="Mormon" />
              <Picker.Item label="Nigerian" value="Nigerian" />
              <Picker.Item label="Other" value="Other" />
              <Picker.Item label="Peruvian" value="Peruvian" />
              <Picker.Item label="Polish" value="Polish" />
              <Picker.Item label="Portuguese" value="Portuguese" />
              <Picker.Item label="Russian" value="Russian" />
              <Picker.Item label="Salvadorian" value="Salvadorian" />
              <Picker.Item label="Sandwiche Shop" value="Sandwiche Shop" />
              <Picker.Item label="Scottish" value="Scottish" />
              <Picker.Item label="Seafood" value="Seafood" />
              <Picker.Item label="Spanish" value="Spanish" />
              <Picker.Item label="Steak House" value="Steak House" />
              <Picker.Item label="Sushi" value="Sushi" />
              <Picker.Item label="Swedish" value="Swedish" />
              <Picker.Item label="Tahitian" value="Tahitian" />
              <Picker.Item label="Thai" value="Thai" />
              <Picker.Item label="Tibetan" value="Tibetan" />
              <Picker.Item label="Turkish" value="Turkish" />
              <Picker.Item label="Welsh" value="Welsh" />
            </Picker>
          </View>
          {/* ########## Price ########## */}
          <Text style={styles.fieldLabel}>Price</Text>
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              selectedValue={this.state.price}
              prompt="Price"
              onValueChange={(inItemValue) =>
                this.setState({ price: inItemValue })
              }
            >
              <Picker.Item label="-- select --" value="" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
            </Picker>
          </View>
          {/* ########## Rating ########## */}
          <Text style={styles.fieldLabel}>Rating</Text>
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              selectedValue={this.state.rating}
              prompt="Rating"
              onValueChange={(inItemValue) =>
                this.setState({ rating: inItemValue })
              }
            >
              <Picker.Item label="-- select --" value="" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
            </Picker>
          </View>
          {/* ########## Phone ########## */}
          <CustomTextInput
            label="Phone Number"
            maxLength={20}
            stateHolder={this}
            stateFieldName="phone"
          />
          {/* ########## Address ########## */}
          <CustomTextInput
            label="Address"
            maxLength={20}
            stateHolder={this}
            stateFieldName="address"
          />
          {/* ########## Web Site ########## */}
          <CustomTextInput
            label="Web Site"
            maxLength={20}
            stateHolder={this}
            stateFieldName="webSite"
          />
          {/* ########## Delivery ########## */}
          <Text style={styles.fieldLabel}>Delivery?</Text>
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              prompt="Delivery?"
              selectedValue={this.state.delivery}
              onValueChange={(inItemValue) =>
                this.setState({ delivery: inItemValue })
              }
            >
              <Picker.Item label="-- select --" value="" />
              <Picker.Item label="Yes" value="Yes" />
              <Picker.Item label="No" value="No" />
            </Picker>
          </View>
        </View>
        {/* ########## Buttons ########## */}
        <View style={styles.buttonContainer}>
          <CustomButton
            text="Cancel"
            width="44%"
            onPress={() => {
              this.props.navigation.navigate("ListScreen", {
                screenName: this.screenName,
              });
            }}
          />
          <CustomButton 
            text="Save"
            width="44%"
            onPress={() => {
              AsyncStorage.getItem(
                "restaurants",
                function (this: AddScreen, inError: any, inRestaurants: any) {
                  if (inRestaurants === null) {
                    inRestaurants = [];
                  } else {
                    inRestaurants = JSON.parse(inRestaurants);
                  }
                  inRestaurants.push(this.state);
                  AsyncStorage.setItem(
                    "restaurants",
                    JSON.stringify(inRestaurants),
                    function (this: AddScreen) {
                      this.props.navigation.navigate("ListScreen", {
                        screenName: this.screenName,
                      });
                    }.bind(this)
                  );
                }.bind(this)
              );
            }}
          />
        </View>
      </View>
    );
  }

  peopleScreenForm() {
    return (
      <View style={styles.innerContainer}>
        <View style={styles.formContainer}>
          <CustomTextInput
            label="First Name"
            maxLength={100}
            stateHolder={this}
            stateFieldName="firstName"
          />
          <CustomTextInput
            label="Last Name"
            maxLength={100}
            stateHolder={this}
            stateFieldName="lastName"
          />
          <Text style={styles.fieldLabel}>Relationship</Text>
          <View style={styles.pickerContainer}>
            <Picker
              onValueChange={(itemValue) =>
                this.setState({ relationShip: itemValue })
              }
              style={styles.picker}
              prompt="RelationShip"
              selectedValue={this.state.relationShip}
            >
              <Picker.Item label="-- select --" value="" />
              <Picker.Item label="Me" value="Me" />
              <Picker.Item label="Family" value="Family" />
              <Picker.Item label="Friend" value="Friend" />
              <Picker.Item label="Coworker" value="Coworker" />
              <Picker.Item label="Other" value="Other" />
            </Picker>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            text="Cancel"
            width="44%"
            onPress={() => {
              this.props.navigation.navigate("ListScreen", {
                screenName: this.screenName,
              });
            }}
          />
          <CustomButton
            text="Save"
            width="44%"
            onPress={() => {
              AsyncStorage.getItem(
                this.key,
                function (this: AddScreen, inError: any, values: any) {
                  if (values === null) values = [];
                  else values = JSON.parse(values);
                  values.push(this.state);
                  AsyncStorage.setItem(
                    this.key,
                    JSON.stringify(values),
                    function (this: AddScreen) {
                      this.props.navigation.navigate("ListScreen", {
                        screenName: this.screenName,
                      });
                    }.bind(this)
                  );
                }.bind(this)
              );
            }}
          />
        </View>
      </View>
    );
  }

  createScreen() {
    if (this.screenName === "PeopleScreen") {
      return this.peopleScreenForm();
    }
    return this.restaurantsScreenForm();
  }

  render() {
    const form = this.createScreen();
    return <ScrollView style={styles.container}>{form}</ScrollView>;
  }
}

export default AddScreen;
