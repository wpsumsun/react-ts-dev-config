import React from 'react'
import ReactDOM from 'react-dom'
import Icon from './icon'

ReactDOM.render(<Icon name="wechat"/>, document.body)
if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
}