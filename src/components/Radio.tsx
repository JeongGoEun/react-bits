/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { ChangeEvent, ChangeEventHandler, EventHandler, useState } from 'react'

const radioStyle = css`
  min-width: 100px;
  min-height: 30px;
`

const radioOptions = [
  { id: 'radio-id-1', name: 'option1', value: '1' },
  { id: 'radio-id-2', name: 'option2', value: '2' },
  { id: 'radio-id-3', name: 'option3', value: '3' },
  { id: 'radio-id-4', name: 'option4', value: '4' },
]

const Radio = () => {
  const [selectedOption, setSelectedOption] = useState<String>('')

  const handleOptionChangeEventType = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value)
  }

  const handleOptionChangeFuncType: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSelectedOption(e.target.value)
  }

  const handleOptionChangeAllType: ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value)
  }

  return (
    <div>
      <h1>Radio</h1>
      <div>현재 선택 된 radio value 값 출력</div>

      <hr></hr>

      <h1>Examples</h1>
      <div style={{ display: 'flex' }}>
        {radioOptions.map((option, idx) => {
          return (
            <div>
              <input
                id={option.id}
                name='radio-group'
                type='radio'
                key={`radio-${idx}`}
                value={option.value}
                onChange={idx < 2 ? handleOptionChangeFuncType : handleOptionChangeEventType}
              />
              <label htmlFor={option.id}>{option.name}</label>
            </div>
          )
        })}
      </div>
      <div>
        <div style={{ marginTop: 30 }}>selected radio: {selectedOption}</div>
      </div>
    </div>
  )
}

export default Radio
