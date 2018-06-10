import React from 'react';
import {Text} from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions =  {
    headerLeft: null
  };

  render() {
    return <Text>You've logged in</Text>
  }
}

export {HomeScreen};