import React from 'react'
import './importAllIcons'
import './icon.scss'

interface IconProps {
  name: String
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
      <svg className='guluer-icon'>
        <use xlinkHref={ `#${props.name}` }/>
      </svg>
  )
}

export default Icon