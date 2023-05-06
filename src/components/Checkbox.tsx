/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useState } from 'react'

const checkboxStyle = css``

const Checkbox = () => {
  return (
    <div>
      <h1>Checkbox</h1>
      <div>체크박스 상태</div>

      <hr></hr>

      <h1>Examples</h1>
      <div>
        <input type='checkbox'></input>
        <div style={{ marginTop: 30 }}>checkbox state: {}</div>
      </div>
    </div>
  )
}

export default Checkbox
