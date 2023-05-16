/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ChangeEvent, ChangeEventHandler, useState } from 'react'

const Switch = () => {
  const [switchState, setSwitchState] = useState<boolean>(false)

  const toggleSwitch: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSwitchState(!switchState)
  }

  return (
    <div>
      <h1>Switch</h1>
      <div>Toggle Switch</div>

      <hr></hr>

      <h1>Examples</h1>

      <div className='component-box'>
        {/* UI/UX - switch with label */}
        <label css={switchStyle}>
          <input role={'switch'} type={'checkbox'} defaultChecked={switchState} onChange={toggleSwitch}></input>
          <span>스위치</span>
        </label>
      </div>

      <div className='contents-box'>
        <div style={{ marginTop: 30 }}>switch value: {switchState.toString()}</div>
      </div>
    </div>
  )
}

const switchStyle = css`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  [type='checkbox'] {
    appearance: none;
    position: relative;
    border: max(2px, 0.1em) solid gray;
    border-radius: 1.25em;
    width: 2.25em;
    height: 1.25em;
    cursor: pointer;

    ::before {
      content: '';
      position: absolute;
      left: 0;
      width: 1em;
      height: 1em;
      border-radius: 50%;
      transform: scale(0.8);
      background-color: gray;
      transition: left 250ms linear;
    }

    :checked::before {
      background-color: white;
      left: 1em;
    }
    :checked {
      background-color: #2f48ef;
    }
  }
`

export default Switch
