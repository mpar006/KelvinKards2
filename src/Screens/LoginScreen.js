import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Form, Item, Label, Input} from 'native-base';
import {LoadingButton} from '../../src/Components';

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
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
        <Input
        onChangeText={(username) => this.setState({username})}
        value={this.state.username}
        />
      </Item>

      <Item floatingLabel last style={styles.textFieldStyle}>
        <Label>Password</Label>
        <Input
        secureTextEntry
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}
        />
      </Item>

      <LoadingButton
      style={styles.buttonStyle}
      loading={false}
      onPress={() => {
        console.log(this.state.password);
        console.log(this.state.username);
      }}>
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