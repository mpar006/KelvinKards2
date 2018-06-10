import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {LoginScreen, HomeScreen} from "./src/Screens";

const RootStack = createStackNavigator(
{
  Login: LoginScreen,
  Home: HomeScreen
},
{
  initialRouteName: 'Login',
  navigationOptions: {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
}
);

export default class App extends React.Component {
  render() {
    return (
    <RootStack/>
    );
  }
}
