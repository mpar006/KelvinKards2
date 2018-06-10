import React from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {Button} from 'native-base';
import Colors from '../Constants/Colors';

const LoadingButton = ({loading, onPress, children}) => {
  if (loading) {
    return (
    <Button rounded style={styles.buttonStyle}>
      <ActivityIndicator size="small" color={Colors.whiteColor}/>
    </Button>
    );
  }
  return (
  <Button style={styles.buttonStyle} onPress={onPress}>
    <Text
    style={styles.textStyle}>
      {children}
    </Text>
  </Button>
  )
};

const styles = {
  buttonStyle: {
    width: '100%',
    justifyContent: 'center',
    marginTop: 20
  },

  textStyle: {
    fontWeight: 'bold',
    color: Colors.whiteColor,
    fontSize: 18,
  }
};

export {LoadingButton};