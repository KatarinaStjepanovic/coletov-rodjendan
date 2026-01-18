import React from 'react'
import MainPage from './assets/MainPage'
import Letter from './assets/Letter'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    {path: "/",
        element: <MainPage/>
    },
    {
        path: "/letter",
        element: <Letter/>
    }
])

function App() {
  return (
    <RouterProvider router = {router}/>
  )
}

export default App


