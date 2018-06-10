import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {HomeScreen} from "./src/Screens";

const RootStack = createStackNavigator(
{
  Home: HomeScreen
},
{
  initialRouteName: 'Home'
}
);

export default class App extends React.Component {
  render() {
    return (
    <RootStack/>
    );
  }
}
