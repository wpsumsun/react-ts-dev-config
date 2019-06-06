import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'

describe('Icon', () => {
  it('是个Icon', () => {
    const json = renderer.create(<Icon name='alipay'/>).toJSON()
    expect(json).toMatchSnapshot()
  })
})