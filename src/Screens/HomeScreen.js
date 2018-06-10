import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return (
    <View style={styles.containerStyle}>
      <Text>KelvinKards2.0</Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export {HomeScreen}