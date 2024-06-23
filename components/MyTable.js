import React, { useState } from 'https://esm.sh/react@18.3.1'
import htm from 'https://esm.sh/htm@3.1.1'

const html = htm.bind(React.createElement)


const MyTable = () => {
  const [count, setCount] = useState(0)
  const renderThreeRows = [...Array(3)].map((_, i) => {
    return html`
      <tr>
        <td>Row ${i}</td>
      </tr>`
  })

  return html`
    <table>
      <thead>table head</thead>
      <tbody>${renderThreeRows}</tbody>
    </table>`
}

export default MyTable