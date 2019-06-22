import React, {Fragment} from 'react'
import Button from './button'

export default function () {
  // const onClick = () => {
  //   alert('clicked')
  // }
  // const onMouseEnter = () => {
  //   console.log('moused')
  // }
  return (
    <Fragment>
      <Button>Default</Button>
      <Button type='primary'>Primary</Button>
      <Button type='dashed'>Dashed</Button>
      <Button type='danger'>Danger</Button>
      <Button type='link'>Link</Button>
    </Fragment>
  )
}