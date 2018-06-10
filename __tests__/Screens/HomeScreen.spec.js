import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {HomeScreen} from "../../src/Screens/HomeScreen";
import {Text} from 'react-native';

configure({adapter: new Adapter()});

describe('Guess It App', () => {
  let wrapper;

  describe('onListen', () => {
    it('should render title', () => {
      wrapper = shallow(<HomeScreen/>);
      expect(wrapper.find(Text).props().children).toEqual('KelvinKards2.0');
    })
  });

});