/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useState } from 'react'

const checkboxStyle = css`
  width: 20px;
  height: 20px;

  // * Set checkbox checked style
  :checked {
    accent-color: #5451af;
  }
`

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false)
  const handleCheckbox = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div>
      <h1>Checkbox</h1>
      <div>체크박스 토글 예제</div>

      <hr></hr>

      <h1>Examples</h1>
      <div>
        <input type='checkbox' onChange={handleCheckbox} checked={isChecked} css={checkboxStyle}></input>
        <div style={{ marginTop: 30 }}>checkbox state: {isChecked.toString()}</div>
      </div>
    </div>
  )
}

export default Checkbox
