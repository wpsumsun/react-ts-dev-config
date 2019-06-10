import React, {Fragment, ReactElement} from 'react'
import ReactDOM from 'react-dom'
import {completeClass} from '../utils/index'
import Icon from '../icon/icon'
import './dialog.scss'

const completeClassByPrefix = completeClass('ying-dialog')
const cb = completeClassByPrefix

interface Props {
  visible: boolean,
  okText?: string,
  cancelText?: string,
  maskClosable?: boolean,
  footer?: Array<ReactElement>,
  title?: Array<ReactElement>,
  onCancel: React.MouseEventHandler
}

const Dialog: React.FunctionComponent<Props> = (props) => {
  const handleCancel: React.MouseEventHandler = (e) => {
    props.onCancel(e)
  }
  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.maskClosable) {
      props.onCancel(e)
    }
  }
  const dialog = props.visible ?
    <Fragment>
      <div className={cb()}>
        <header className={cb('header')}>
          { props.title ? props.title : '提示' }
          <Icon name="close" onClick={handleCancel}/>
        </header>
        <main className={cb('main')}>{ props.children }</main>
        <footer className={cb('footer')}>
          {
            props.footer ?
              props.footer.map((button) => React.cloneElement(button)) :
              <Fragment>
                <button>{ props.okText ? props.okText : '' }</button>
                <button>{ props.cancelText ? props.cancelText : '' }</button>
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
export default Dialog