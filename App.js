import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {LoginScreen, HomeScreen} from "./src/Screens";
import {AuthConfig} from './src/Config/AuthConfig';
import firebase from 'firebase';

const RootStack = createStackNavigator(
{
  Login: LoginScreen,
  Home: HomeScreen
},
{
  initialRouteName: 'Login'
}
);

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp(AuthConfig);
  }

  render() {
    return (
    <RootStack/>
    );
  }
}
