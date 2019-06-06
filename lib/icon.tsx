import React from 'react'
import './importAllIcons'
import { classnames } from './utils'
import './icon.scss'

interface IconProps extends React.SVGAttributes<SVGElement>{
  name: string
}

const Icon: React.FunctionComponent<IconProps> =
    ({
      name,
      className,
      ...restProps
    }) => {
    return (
      <svg
        className={ classnames(['guluer-icon', className]) }
        { ...restProps }
      >
        <use xlinkHref={ `#${name}` }/>
      </svg>
  )
}

export default Icon