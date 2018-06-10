import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Text, ActivityIndicator} from 'react-native';
import {LoadingButton} from '../../src/Components';

configure({adapter: new Adapter()});

describe('LoadingButton', () => {
  let wrapper;

  it('should render a button with the text from props', () => {
    wrapper = shallow(
    <LoadingButton
    loading={false}
    onPress={undefined}>
      Login
    </LoadingButton>
    );

    expect(wrapper.find(Text).props().children).toEqual('Login');
  });

  it('should render a loading indicator when pass true for loading state', () => {
    wrapper = shallow(
    <LoadingButton
    loading={true}
    onPress={undefined}>
      Login
    </LoadingButton>
    );

    expect(wrapper.find(ActivityIndicator).length).toEqual(1);
  });

});