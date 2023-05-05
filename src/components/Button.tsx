/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useState } from 'react'

const buttonStyle = css`
  min-width: 100px;
  min-height: 30px;
`

const Button = () => {
  const [clickCnt, setClickCnt] = useState(0)

  const handleClick = () => {
    setClickCnt(clickCnt + 1)
  }

  return (
    <div>
      <h1>Button</h1>
      <div>버튼 클릭 시 count 증가</div>

      <hr></hr>

      <h1>Examples</h1>
      <div>
        <button css={buttonStyle} onClick={handleClick}>
          버튼
        </button>
        <div style={{ marginTop: 30 }}>clicked state: {clickCnt}</div>
      </div>
    </div>
  )
}

export default Button
