import React from 'react'

function Button() {
  return (
    <div>{ process.env.NODE_ENV }</div> // 语法糖 等同于 React.createElement('div', null, '按钮')
  )

}

export default Button