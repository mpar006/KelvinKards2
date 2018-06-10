import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Text, TextInput} from 'react-native';
import {LoginScreen} from "../../src/Screens/LoginScreen";
import {LoadingButton} from '../../src/Components';

configure({adapter: new Adapter()});

describe('LoginScreen', () => {
  let wrapper;

  it('should render title and button', () => {
    wrapper = shallow(<LoginScreen/>);
    expect(wrapper.find(Text).props().children).toEqual('KelvinKards2.0');
    expect(wrapper.find(LoadingButton).length).toEqual(1);
    expect(wrapper.find(TextInput).length).toEqual(2);
  });

});