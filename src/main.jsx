import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/sass/main.scss'
import './assets/sass/global/_normalize.scss'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.querySelector('.wrapper')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
