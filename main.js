import React from 'https://esm.sh/react@18.3.1'
import ReactDOM from 'https://esm.sh/react-dom@18.3.1'
import htm from 'https://esm.sh/htm@3.1.1'

const html = htm.bind(React.createElement)


import MyComponent from './MyComponent.js'
import MyTable from './components/MyTable.js'

const App = (props) => {
  return html`
    <div><b>Hello World! </b><i>Foo: ${props.foo}</i><br />
      <${MyComponent} />
      <${MyTable} />
    </div>`
}

ReactDOM.render(
  html`
    <${App} foo=${'bar'}/>`,
  document.getElementById('root'),
)