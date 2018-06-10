import React from 'react';
import {Text, StyleSheet, TextInput} from 'react-native';
import {Form, Item, Label} from 'native-base';
import {LoadingButton} from '../../src/Components';

class LoginScreen extends React.Component {
  static navigationOptions =  {
    header: null,
  };

  render() {
    return (
    <Form style={styles.formStyle}>
      <Text
      adjustsFontSizeToFit
      numberOfLines={1}
      style={styles.titleStyle}>
        KelvinKards2.0
      </Text>

      <Item floatingLabel last style={styles.textFieldStyle}>
        <Label>Username</Label>
        <TextInput />
      </Item>

      <Item floatingLabel last style={styles.textFieldStyle}>
        <Label>Password</Label>
        <TextInput />
      </Item>

      <LoadingButton
      style={styles.buttonStyle}
      loading={false}
      onPress={() => {this.props.navigation.navigate('Home')}}>
        Login
      </LoadingButton>
    </Form>
    )
  }
}

const styles = StyleSheet.create({
  formStyle: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 140
  },

  titleStyle: {
    fontSize: 50,
    fontWeight: 'bold',
    paddingBottom: 60,
  },

  buttonStyle: {
    alignItems: 'center'
  },

  textFieldStyle: {
    marginBottom: 10
  },
});

export {LoginScreen}