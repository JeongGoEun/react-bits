/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { ChangeEvent, useState } from 'react'

const inputStyle = css`
  min-width: 200px;
  min-height: 20px;
`

const Input = () => {
  const [inputValue, setInputValue] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <h1>Input</h1>
      <div>input 예시</div>

      <hr></hr>

      <h1>Examples</h1>
      <div>format options(string, number, phone, mail... 추가 예정)</div>
      <input css={inputStyle} onChange={handleChange}></input>
      <div>
        <div style={{ marginTop: 30 }}>input value: {inputValue}</div>
      </div>
    </div>
  )
}

export default Input
