import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Button, Checkbox, Input, Radio, RangeSlider } from './components'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/components/button',
    element: <Button />,
  },
  {
    path: '/components/checkbox',
    element: <Checkbox />,
  },
  {
    path: '/components/input',
    element: <Input />,
  },
  {
    path: '/components/radio',
    element: <Radio />,
  },
  {
    path: '/components/range-slider',
    element: <RangeSlider />,
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
