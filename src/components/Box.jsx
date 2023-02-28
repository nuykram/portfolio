import { useState } from 'react'
import '../styles/Box.css'

const Box = ({boxType, content}) => {

  return (
    <div className={'box ' + boxType}>
      {content}
    </div>
  )
}

export default Box