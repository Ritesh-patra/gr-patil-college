import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { defineElement } from '@lordicon/element'
import './index.css'
import App from './App.jsx'

try {
  if (typeof customElements !== 'undefined' && !customElements.get('lord-icon')) {
    defineElement()
  }
} catch {
  /* lord-icon optional if CDN/custom element fails */
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
