import React, {useState} from 'react'
import Dialog from './dialog'

export default function () {
  const [x, setX] = useState(false)
  const handleClose: React.MouseEventHandler = () => {
    setX(false)
  }
  return (
    <div>
      <button style={{ position:'relative', zIndex:3 }} onClick={() => setX(!x)}>click</button>
      <Dialog
        visible={x}
        onCancel={handleClose}
        maskClosable
        footer={
          [
            <button key="ok" onClick={() => {  }}>确认</button>,
            <button key="cancel" onClick={() => { setX(false) }}>取消</button>
          ]
        }
        >
        <h1>Hi</h1>
      </Dialog>
    </div>
  )
}