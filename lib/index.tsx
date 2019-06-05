import React from 'react'
import ReactDOM from 'react-dom'
import Icon from './icon'

ReactDOM.render(<div>
      <Icon name="alipay"/>
      <Icon name="wechat"/>
      <Icon name="QQ"/>
    </div>,
    document.querySelector('#root'))
if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
}