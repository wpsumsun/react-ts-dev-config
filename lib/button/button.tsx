import React from 'react';
import './button.scss';
import {completeClass, classnames} from '../utils';

const completeClassByPrefix = completeClass('ying-button')
const cb = completeClassByPrefix

export const tuple = <T extends string[]>(...args: T) => args;
const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'danger', 'link');
export type ButtonType = (typeof ButtonTypes)[number];

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  type?: ButtonType
}
export default class Button extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  render() {
    const { type = 'default', ...restProps } = this.props
    return (
      <button
        className={classnames(['ying-button', cb(type)])}
        { ...restProps }>
        { this.props.children }
        </button>
    )
  }
}