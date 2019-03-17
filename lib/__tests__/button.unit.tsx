import Renderer from 'react-test-renderer'
import React from 'react'
import Button from '../button'

describe('button', () => {
  it('是个div', () => {
    const json = Renderer.create(<Button/>).toJSON()
    expect(json).toMatchSnapshot()
  })
})