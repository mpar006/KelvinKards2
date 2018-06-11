import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {Provider} from 'react-redux';
import firebase from 'firebase';
import {LoginScreen, HomeScreen} from "./src/Screens";
import {AuthConfig} from './src/Config/AuthConfig';
import configureStore from './src/Config/StoreConfig';

const store = configureStore();

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
    <Provider store={store}>
      <RootStack/>
    </Provider>
    );
  }
}
