/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect } from 'react'
import { componentBitsList } from '../constants/contents'

const CompBitsTable = () => {
  useEffect(() => {
    console.log(componentBitsList)
  }, [])

  return (
    <table css={tableStyles}>
      <thead>
        <tr>
          <th>Name</th>
          <th>path</th>
          <th>Discription</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        {componentBitsList.map((comp, idx) => {
          return (
            <tr key={`bits-tr-${idx}`}>
              <td>{comp.name}</td>
              <td>{comp?.path}</td>
              <td>{comp?.discription}</td>
              <td>
                <a href={comp.example?.toString()}>{comp?.example}</a>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const tableStyles = css`
  width: 100%;
  height: auto;

  thead {
    height: 40px;
    background: darkseagreen;
  }

  tbody {
    tr {
      height: 30px;
      td {
        padding: 8px;
        background-color: whitesmoke;
      }
    }
  }
`

export default CompBitsTable
