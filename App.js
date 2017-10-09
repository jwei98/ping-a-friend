import React from 'react';
import StatusBarPaddingIOS from 'react-native-ios-status-bar-padding';
import { FormLabel, FormInput, List, ListItem } from 'react-native-elements'
import { TextInput, Alert, StyleSheet, Text, View, Button, FlatList, TouchableHighlight } from 'react-native';
import { NavigationActions, StackNavigator, TabNavigator } from 'react-navigation';

var activitiesList = [{key: 'Lunch'}, {key: 'Gym'}, {key: 'Soccer'},{key: 'Ski'},{key: 'Code'},
          {key: 'Play'}, {key: 'Snappa'}, {key: 'Pong'}, {key: 'Justin'}, {key: 'Video Games'},
          {key: 'Shooters'}, {key: 'Devines'}, {key: 'Dinner'},];

// Friends Screen
class FriendsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
      return {
        title: 'Friends',
        headerRight: <Button title="Add"
          onPress={() => navigation.navigate('AddFriend')}/>,
      };
  };

  render() {
    return (
      <View>

      </View>
    );
  }
}


// ActivtiesScreen
class ActivitiesScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
      return {
        title: 'Activities',
        headerRight: <Button title="Add"
          onPress={() => navigation.navigate('AddActivity')}/>,
      };
  };
  render() {
    return (
      <View>
        <List>
          <FlatList
            data = {activitiesList}
            renderItem = {({ item }) => (
              <ListItem
                title={`${item.key}`}
                />
            )}
          />
        </List>
      </View>
    );
  }
}


// GroupsScreen
class GroupsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
      return {
        title: 'Groups',
        headerRight: <Button title="Add"
          onPress={() => navigation.navigate('AddGroup')}/>,
      };
  };

  render() {
    return (
      <View>
      </View>
    );
  }
}

class AddActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }
  static navigationOptions = {
    title: 'Add Activity'
  };
  _handlePress() {
    const { navigate } = this.props.navigation;
    activitiesList.concat([{key: `${this.state.name}`}])
    this.props.navigation.dispatch(NavigationActions.back())
  }
  render() {

    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({name:text})}
        />
        <Button title="Add Activity" onPress={() => this._handlePress()}/>
      </View>

    );
  }
}

class AddFriendScreen extends React.Component {
  static navigationOptions = {
    title: 'Add Friend'
  };
  render() {
    return (
      <Text>Add Friend </Text>
    );
  }
}

class AddGroupScreen extends React.Component {
  static navigationOptions = {
    title: 'Add Group'
  };
  render() {
    return (
      <Text>Add Group </Text>
    );
  }
}

// APP RUNNER
const TabsNavigator = TabNavigator({
  Friends: {screen: FriendsScreen },
  Activities: { screen: ActivitiesScreen },
  Groups: { screen: GroupsScreen },
  
  },
  
  {
    initialRouteName: 'Activities',
    tabBarPosition: 'bottom',
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    },
  }
);

const AppRunner = StackNavigator({
  Home: { screen: TabsNavigator,
          navigationOptions: {
          },
        },
  AddGroup: { screen: AddGroupScreen },
  AddFriend: { screen: AddFriendScreen },
  AddActivity: { screen: AddActivity },
});



export default class App extends React.Component {
  render() {
    return <AppRunner />;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
  padding: 10,
  fontSize: 30,
  height: 60,
  },
});
