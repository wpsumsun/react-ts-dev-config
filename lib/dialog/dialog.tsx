import React, {Fragment, ReactElement, ReactNode} from 'react'
import ReactDOM from 'react-dom'
import {completeClass} from '../utils/index'
import Icon from '../icon/icon'
import './dialog.scss'

const completeClassByPrefix = completeClass('ying-dialog')
const cb = completeClassByPrefix

interface Props {
  visible: boolean,
  maskClosable?: boolean,
  okText?: string,
  cancelText?: string,
  footer?: Array<ReactElement>,
  title?: String,
  onOk?: React.MouseEventHandler,
  onCancel?: React.MouseEventHandler,
  content?: string | ReactNode
}

const Dialog: React.FunctionComponent<Props> = (props) => {
  const handleCancel: React.MouseEventHandler = (e) => {
    props.onCancel && props.onCancel(e)
  }
  const handleOk: React.MouseEventHandler = (e) => {
    props.onOk && props.onOk(e)
  }
  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.maskClosable) {
      props.onCancel && props.onCancel(e)
    }
  }
  const dialog = props.visible ?
    <Fragment>
      <div className={cb()}>
        <header className={cb('header')}>
          {props.title ? props.title : '提示'}
          <Icon name="close" onClick={handleCancel}/>
        </header>
        <main className={cb('main')}>{props.content ? props.content : props.children}</main>
        <footer className={cb('footer')}>
          {
            props.footer ?
            props.footer.map((button) => React.cloneElement(button)) :
            <Fragment>
              <button onClick={ handleOk }>{props.okText ? props.okText : '确定'}</button>
              <button onClick={ handleCancel }>{props.cancelText ? props.cancelText : '取消'}</button>
            </Fragment>
          }
        </footer>
      </div>
      <div className={cb('mask')} onClick={onClickMask}/>
    </Fragment> :
    null
  return (
    ReactDOM.createPortal(dialog, document.body)
  )
}

interface ModelProps {
  maskClosable?: boolean,
  okText?: string,
  cancelText?: string,
  footer?: Array<ReactElement>,
  title?: String,
  onOk?: React.MouseEventHandler,
  onCancel?: React.MouseEventHandler,
  content?: string | ReactNode
}

export const confirm = (props: ModelProps) => {
  const { onOk, onCancel, ...restProps } = props
  const onClose: React.MouseEventHandler = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }
  const handleOk: React.MouseEventHandler = (e) => {
    onOk && onOk(e)
    onClose(e)
  }
  const handleCancel: React.MouseEventHandler = (e) => {
    onCancel && onCancel(e)
    onClose(e)
  }
  const component = <Dialog
    { ...restProps }
    onOk={ handleOk }
    onCancel={ handleCancel }
    visible={true}
  />
  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(component, div)
}

export const model = (props: ModelProps) => {
  const { onOk, onCancel, ...restProps } = props
  const onClose: React.MouseEventHandler = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }
  const handleOk: React.MouseEventHandler = (e) => {
    onOk && onOk(e)
    onClose(e)
  }
  const handleCancel: React.MouseEventHandler = (e) => {
    onCancel && onCancel(e)
    onClose(e)
  }
  const component = <Dialog
    { ...restProps }
    onOk={ handleOk }
    onCancel={ handleCancel }
    visible={true}
  />
  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(component, div)
}

export const alert = (props: ModelProps) => {
  const { onOk, onCancel,...restProps } = props
  const onClose: React.MouseEventHandler = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }
  const handleOk: React.MouseEventHandler = (e) => {
    onOk && onOk(e)
    onClose(e)
  }
  const handleCancel: React.MouseEventHandler = (e) => {
    onCancel && onCancel(e)
    onClose(e)
  }
  const component = <Dialog
    { ...restProps }
    onOk={ handleOk }
    onCancel={ handleCancel }
    footer={
      [ <button key="ok" onClick={onClose}>确认</button> ]
    }
    visible={true}
  />
  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(component, div)
}

export default Dialog