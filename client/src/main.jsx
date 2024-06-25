import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'

import './i18n.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="dark text-foreground bg-background font-notosans">
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>,
)
