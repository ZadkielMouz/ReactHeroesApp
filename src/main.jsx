import React from 'react'
import ReactDOM from 'react-dom/client'
import { HeroesApp } from './HeroesApp'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <RouterProvider router={router} /> */}
        <HeroesApp />
    </React.StrictMode>
)
