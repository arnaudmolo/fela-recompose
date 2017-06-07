import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-fela'
import App from './app'
import createRenderer from './renderer'

const renderer = createRenderer()
const node = document.getElementById('stylesheet')

render(
  <Provider renderer={renderer} mountNode={node}>
    <App />
  </Provider>,
  document.getElementById('app')
)
