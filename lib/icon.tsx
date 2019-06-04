import React from 'react'

interface IconProps {
  name: String
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return <span>{ props.name }</span>
}

export default Icon