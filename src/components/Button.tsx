/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MouseEvent, MouseEventHandler, useState } from 'react'

const buttonStyle = css`
  min-width: 100px;
  min-height: 30px;
`

const Button = () => {
  const [clickCnt, setClickCnt] = useState(0)

  // * Define handler type
  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setClickCnt(clickCnt + 1)
  }

  // * Define event type
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setClickCnt(clickCnt - 1)
  }

  return (
    <div>
      <h1>Button</h1>
      <div>버튼 클릭 시 count 증가</div>

      <hr></hr>

      <h1>Examples</h1>
      <div>
        <button css={buttonStyle} onClick={handleButtonClick}>
          +
        </button>
        <button css={buttonStyle} onClick={handleClick}>
          -
        </button>
        <div style={{ marginTop: 30 }}>clicked state: {clickCnt}</div>
      </div>
    </div>
  )
}

export default Button
