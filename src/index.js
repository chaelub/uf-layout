import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import UFLayout from './App'
import InjectTest from './inject/InjectTest'

const inject = [{ name: 'test', element: InjectTest }]

ReactDOM.render(
  <React.StrictMode>
    <UFLayout inject={inject} />
  </React.StrictMode>,
  document.getElementById('root')
)
