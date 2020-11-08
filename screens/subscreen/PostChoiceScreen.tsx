import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { getChosenRestaurants, setParticipants } from "../utils/globals";
import { postChoiceProp } from "../utils/TypesForNavigation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  headline: {
    fontSize: 32,
    paddingBottom: 80,
  },
  detailsContainer: {
    borderWidth: 2,
    borderColor: "#000000",
    padding: 10,
    width: "96%",
  },
  detailsRowContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "flex-start",
  },
  label: {
    width: 70,
    fontWeight: "bold",
    color: "#ff0000",
  },
  value: {
    width: 300,
  },
});

class PostChoiceScreen extends Component<postChoiceProp> {
  chosenRestuarant = getChosenRestaurants();
  constructor(props: postChoiceProp) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.headline}>Enjoy your meal!</Text>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.detailsRowContainer}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{this.chosenRestuarant.name}</Text>
          </View>
          <View style={styles.detailsRowContainer}>
            <Text style={styles.label}>Cuisine:</Text>
            <Text style={styles.value}>{this.chosenRestuarant.cuisine}</Text>
          </View>
          <View style={styles.detailsRowContainer}>
            <Text style={styles.label}>Price:</Text>
            <Text style={styles.value}>
              {"$".repeat(+this.chosenRestuarant.price)}
            </Text>
          </View>
          <View style={styles.detailsRowContainer}>
            <Text style={styles.label}>Rating:</Text>
            <Text style={styles.value}>
              {"\u2605".repeat(+this.chosenRestuarant.rating)}
            </Text>
          </View>
          <View style={styles.detailsRowContainer}>
            <Text style={styles.label}>Phone:</Text>
            <Text style={styles.value}>{this.chosenRestuarant.phone}</Text>
          </View>
          <View style={styles.detailsRowContainer}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>{this.chosenRestuarant.address}</Text>
          </View>
          <View style={styles.detailsRowContainer}>
            <Text style={styles.label}>Web site:</Text>
            <Text style={styles.value}>{this.chosenRestuarant.webSite}</Text>
          </View>
          <View style={styles.detailsRowContainer}>
            <Text style={styles.label}>Delivery:</Text>
            <Text style={styles.value}>{this.chosenRestuarant.delivery}</Text>
          </View>
        </View>
        <View style={{ paddingTop: 80 }}>
          <Button
            title="All Done"
            onPress={() => {
              setParticipants([]);
              this.props.navigation.navigate("DecisionTimeScreen", {});
            }}
          />
        </View>
      </View>
    );
  }
}

export default PostChoiceScreen;
