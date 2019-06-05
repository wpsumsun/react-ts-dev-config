import React from 'react'
import './importAllIcons'
import './icon.scss'

interface IconProps {
  name: String,
  onClick?: React.MouseEventHandler<SVGElement>
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
      <svg className='guluer-icon' onClick={ props.onClick }>
        <use xlinkHref={ `#${props.name}` }/>
      </svg>
  )
}

export default Icon