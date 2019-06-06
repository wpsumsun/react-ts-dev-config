import React from 'react'
import ReactDOM from 'react-dom'
import Icon from './icon'

const fn: React.MouseEventHandler = (e) => { console.log(e) }

ReactDOM.render(<div>
      <Icon name="alipay" className='alipay' onClick={ fn } onMouseEnter={()=>{console.log('enter')}}/>
    </div>,
    document.querySelector('#root'))
if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
}