import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import UFLayout from './App'
import InjectTest from './inject/InjectTest'

const availableComponents = [{ name: 'test', component: InjectTest }]

ReactDOM.render(
  <React.StrictMode>
    <UFLayout components={availableComponents} id='root' />
  </React.StrictMode>,
  document.getElementById('root')
)
