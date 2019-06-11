import React, {useState} from 'react'
import Dialog, { confirm, alert, model } from './dialog'

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
      <button onClick={handleConfirm}>confirm</button>
      <button onClick={handleAlert}>alert</button>
      <button onClick={handleModel}>model</button>
      <button style={{ position:'relative', zIndex:3 }} onClick={() => setX(!x)}>click</button>
      <Dialog
        visible={x}
        onCancel={handleClose}
        maskClosable
        content={<h1>Hi1</h1>}
        footer={
          [
            <button key="ok" onClick={() => { setX(false) }}>确认</button>,
            <button key="cancel" onClick={() => { setX(false) }}>取消</button>
          ]
        }
        >
      </Dialog>
    </div>
  )
}