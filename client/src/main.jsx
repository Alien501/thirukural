import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { BrowserRouter } from 'react-router-dom'
import './i18n.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <main className="dark text-foreground bg-background font-notosans">
          <App />
        </main>
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>,
)
