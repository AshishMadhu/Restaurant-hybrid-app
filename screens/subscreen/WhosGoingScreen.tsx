import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  FlatList,
  TouchableOpacity,
  Alert,
  BackHandler,
  AsyncStorage,
} from "react-native";
import {CheckBox} from 'native-base';
import { whosGoingScreenProp } from "../utils/TypesForNavigation";
import CustomButton from "../../components/CustomButton";
import {setParticipants, getParticipants} from '../utils/globals';

type people = {
  firstName: string;
  lastName: string;
  relationShip: string;
  key: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        paddingTop: 20,
      },
      android: {},
    }),
  },
  heading: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  touchable: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
  checkBox: {
    marginRight: 20
  },
  name: {
    flex: 1,
  },
});

type State = {
  people: people[];
  selected: {
    [key: string]: boolean
  };
};

class WhosGoingScreen extends Component<whosGoingScreenProp, State> {
  constructor(props: whosGoingScreenProp) {
    super(props);
    this.state = {
      people: [],
      selected: {},
    };
  }

  toggleSelected(item:people) {
    const selected = this.state.selected;
    selected[item.key] = !selected[item.key];
    this.setState({selected: selected});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Who's Going Screen</Text>
        <FlatList
          style={{ width: "94%" }}
          data={this.state.people}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => this.toggleSelected(item)}>
              <CheckBox 
                style={styles.checkBox}
                checked={this.state.selected[item.key]}
                onPress={() => this.toggleSelected(item)}
              />
              <Text style={styles.name}>
                {item.firstName} {item.lastName} ({item.relationShip})
              </Text>
            </TouchableOpacity>
          )}
        />
        <CustomButton 
          text = "Next"
          width = "96%"
          onPress = {() => {
           const participants = getParticipants();
            for(const person of this.state.people) {
              if(this.state.selected[person.key]) {
                const participant:any = Object.assign({}, person);
                participant.vetoed = "no";
                participants.push(participant)
                setParticipants(participants);
              }
            }
            if(participants.length === 0) {
              Alert.alert(
                "Uhh, you awake?",
                "You didn't select any one to go. Wanna give it another try?",
                [{
                  text: "OK",
                },
              ], {cancelable: false}
              )
            } else {
              this.props.navigation.navigate("PreFiltersScreen", {});
            }
          }}
        />
      </View>
    );
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
    AsyncStorage.getItem("people", (inError, inPeople: any ) => {
      if(inPeople === null) {
        inPeople = [];
      } else {
        inPeople = JSON.parse(inPeople);
      }
      const selected:any = {};
      for(const person of inPeople) {
        selected[person.key] = false;
      }
      this.setState({people: inPeople, selected: selected});
    });
  }
}

export default WhosGoingScreen;