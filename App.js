import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {LoginScreen} from "./src/Screens";

const RootStack = createStackNavigator(
{
  Login: LoginScreen
},
{
  initialRouteName: 'Login'
}
);

export default class App extends React.Component {
  render() {
    return (
    <RootStack/>
    );
  }
}
