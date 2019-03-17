import React from 'react'
import ReactDOM from 'react-dom'
import Button from './button'

ReactDOM.render(<Button></Button>, document.body)
if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
}