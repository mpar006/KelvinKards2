import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Form, Item, Container} from 'native-base';
import {LoadingButton} from '../../src/Components';

class HomeScreen extends React.Component {
  render() {
    return (
    <Form style={styles.formStyle}>
      <Text
      adjustsFontSizeToFit
      numberOfLines={1}
      style={styles.titleStyle}>
        KelvinKards2.0
      </Text>

      <LoadingButton
      style={styles.buttonStyle}
      loading={false}
      onPress={undefined}>
        Login
      </LoadingButton>
    </Form>
    )
  }
}

const styles = StyleSheet.create({
  formStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingLeft: 40,
    paddingRight: 40
  },

  titleStyle: {
    fontSize: 50,
    fontWeight: 'bold',
    paddingBottom: 60,
  },

  buttonStyle: {
    alignItems: 'center'
  }
});

export {HomeScreen}