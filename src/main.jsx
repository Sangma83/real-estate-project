import React from 'react'
import ReactDOM from 'react-dom/client'


import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './routes/Route'
import AuthProvider from './providers/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HelmetProvider><AuthProvider><RouterProvider router={route}></RouterProvider></AuthProvider></HelmetProvider>
  </React.StrictMode>,
)
