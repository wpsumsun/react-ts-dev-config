import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'
import { mount } from 'enzyme'

describe('Icon', () => {
  it('是个Icon', () => {
    const json = renderer.create(<Icon name='alipay'/>).toJSON();
    expect(json).toMatchSnapshot()
  });
  it('触发click事件', () => {
    const fn = jest.fn();
    const fn2 = jest.fn();
    const component = mount(<Icon name='alipay' onClick={ fn }/>);
    component.simulate('click');
    expect(fn).toBeCalled()
  })
});