/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ChangeEvent, ChangeEventHandler, useState } from 'react'

const RangeSlider = () => {
  const [sliderValue, setSliderValue] = useState(50)

  const onChnageSlider: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value))
  }

  return (
    <div>
      <h1>Slider</h1>
      <div>슬라이더 조절</div>

      <hr></hr>

      <h1>Examples</h1>
      <div className='component-box'>
        <div className='slider-container' style={{ width: '100%' }}>
          <input onChange={onChnageSlider} type={'range'} min={1} max={100} defaultValue={sliderValue} className='slider' css={sliderStyle} />
        </div>
      </div>

      <div className='contents-box'>
        <div style={{ marginTop: 30 }}>slider value: {sliderValue}</div>
      </div>
    </div>
  )
}

const sliderStyle = css`
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  width: 50%;
  height: 15px;
  background: #d3d3d3;
  border-radius: 100px;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
  transition: opacity 0.2s;

  /* hover effects */
  :hover {
    opacity: 1;
  }

  /* slider thumb style for based webkit browser (chrome, safari, opera) */
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #5715b4;
    cursor: pointer;
  }
`

export default RangeSlider
