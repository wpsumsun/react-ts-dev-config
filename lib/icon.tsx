import React from 'react'
import './importAllIcons'

interface IconProps {
  name: String
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
      <svg>
        <use xlinkHref={ `#${props.name}` }/>
      </svg>
  )
}

export default Icon