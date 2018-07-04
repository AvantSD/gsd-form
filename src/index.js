import React from 'react'
import { render } from 'react-dom'
import { TextInput } from './lib'

const App = () => (
  <TextInput label="Email Address" placeholder="name@example.com" />
)

render(<App />, document.getElementById('root'))
