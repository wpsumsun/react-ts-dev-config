import React, {useState} from 'react'
import Dialog, { confirm, alert, model } from './dialog'
import Button from '../button/button'

export default function () {
  const [x, setX] = useState(false)
  const handleClose: React.MouseEventHandler = () => {
    setX(false)
  }
  const handleConfirm = () => {
    confirm({
      title: 'xx',
      content: '您确定要删除吗？',
      onCancel: (e) => { console.log(e) },
      onOk:(e) => { console.log(e) }
    })
  }
  const handleModel = () => {
    model({
      title: 'xx',
      content: '您确定要删除吗？',
      onCancel: (e) => { console.log(e) },
      onOk:(e) => { console.log(e) }
    })
  }
  const handleAlert = () => {
    alert({
      content: 'warning'
    })
  }
  return (
    <div>
      <Button onClick={handleConfirm}>confirm</Button>
      <Button onClick={handleAlert}>alert</Button>
      <Button onClick={handleModel}>model</Button>
      <Button style={{ position:'relative', zIndex:3 }} onClick={() => setX(!x)}>click</Button>
      <Dialog
        visible={x}
        onCancel={handleClose}
        maskClosable
        content={<h1>Hi1</h1>}
        footer={
          [
            <Button key="ok" onClick={() => { setX(false) }}>确认</Button>,
            <Button key="cancel" onClick={() => { setX(false) }}>取消</Button>
          ]
        }
        >
      </Dialog>
    </div>
  )
}