import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {HomeScreen} from "../../src/Screens/HomeScreen";
import {Text} from 'react-native';
import {LoadingButton} from '../../src/Components';

configure({adapter: new Adapter()});

describe('HomeScreen', () => {
  let wrapper;

  it('should render title and button', () => {
    wrapper = shallow(<HomeScreen/>);
    expect(wrapper.find(Text).props().children).toEqual('KelvinKards2.0');
    expect(wrapper.find(LoadingButton).length).toEqual(1);
  });

});