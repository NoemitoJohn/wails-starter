import React from 'react'
import {createRoot} from 'react-dom/client'
import './style.css'
import App from './App'
import { routeTree } from './routeTree.gen'
import { createRouter, RouterProvider } from '@tanstack/react-router'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
    interface Register {
      router: typeof router
    }
}


const container = document.getElementById('root')

const root = createRoot(container!)
// "typescript": "^4.6.4",
root.render(
    <React.StrictMode>
        {/* <App/> */}
        <RouterProvider router={router} />
    </React.StrictMode>
)
