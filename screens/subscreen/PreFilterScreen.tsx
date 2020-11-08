import React, { Component } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Picker,
  Platform,
  AsyncStorage,
  Alert,
} from "react-native";
import { preFiltersScreenProp } from "../utils/TypesForNavigation";
import CustomButton from "../../components/CustomButton";
import { setFilteredRestaurants } from "../utils/globals";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
    width: "100%",
  },
  formContainer: {
    width: "96%",
  },
  headingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20,
  },
  fieldLabel: {
    marginLeft: 10,
  },
  pickerContainer: {
    ...Platform.select({
      ios: {},
      android: {
        width: "96%",
        borderRadius: 8,
        borderColor: "#c0c0c0",
        borderWidth: 2,
        marginLeft: 10,
        marginBottom: 20,
        marginTop: 4,
      },
    }),
  },
  picker: {
    ...Platform.select({
      ios: {
        width: "96%",
        borderRadius: 8,
        borderColor: "#c0c0c0",
        borderWidth: 2,
        marginLeft: 10,
        marginBottom: 20,
        marginTop: 4,
      },
      android: {},
    }),
  },
});

type State = {
  cuisine: string;
  price: string;
  rating: string;
  delivery: string;
};

class PreFilterScreen extends Component<preFiltersScreenProp, State> {
  constructor(props: preFiltersScreenProp) {
    super(props);
    this.state = {
      cuisine: "",
      price: "",
      rating: "",
      delivery: "",
    };
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.formContainer}>
            <View style={styles.headingContainer}>
              <Text style={styles.heading}>Pre-Filter</Text>
            </View>
            <Text style={styles.fieldLabel}>Cuisine</Text>
            <View style={styles.pickerContainer}>
              <Picker
                style={styles.picker}
                selectedValue={this.state.cuisine}
                prompt="Cuisine"
                onValueChange={(value) => this.setState({ cuisine: value })}
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

            <Text style={styles.fieldLabel}>Price &lt;=</Text>
            <View style={styles.pickerContainer}>
              <Picker
                style={styles.picker}
                selectedValue={this.state.price}
                prompt="price <="
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

            <Text style={styles.fieldLabel}>Rating &gt;=</Text>
            <View style={styles.pickerContainer}>
              <Picker
                style={styles.picker}
                selectedValue={this.state.rating}
                prompt="Rating >="
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
            <CustomButton
              text="Next"
              width="96%"
              onPress={() => {
                AsyncStorage.getItem(
                  "restaurants",
                  (error, inRestaurants: any) => {
                    if (inRestaurants === null) inRestaurants = [];
                    else inRestaurants = JSON.parse(inRestaurants);
                    var filteredRestaurants = [];
                    for (const restaurant of inRestaurants) {
                      let passTests = false;
                      if (this.state.cuisine !== "") {
                        if (Object.keys(this.state.cuisine).length > 0) {
                          if (restaurant.cuisine !== this.state.cuisine) {
                            passTests = true;
                          }
                        }
                      }
                      if (this.state.price !== "") {
                        if (restaurant.price > this.state.price)
                          passTests = true;
                      }
                      if (this.state.rating !== "") {
                        if (restaurant.rating < this.state.rating)
                          passTests = true;
                      }
                      if (this.state.delivery !== "") {
                        if (restaurant.delivery !== this.state.delivery)
                          passTests = true;
                      }
                      if (passTests) {
                        filteredRestaurants.push(restaurant);
                        setFilteredRestaurants(filteredRestaurants);
                      }
                    }
                    if (filteredRestaurants.length === 0) {
                      Alert.alert(
                        "Well, that's an easy choice",
                        "None of the restaurants match these criteria. Maybe try loosening them up a bit?",
                        [
                          {
                            text: "OK",
                          },
                        ],
                        {
                          cancelable: false,
                        }
                      );
                    } else {
                      this.props.navigation.navigate("ChoiceScreen", {});
                    }
                  }
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default PreFilterScreen;
