import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import './main.css'


const container = document.getElementById('root'); 
if (container) {
  createRoot(container).render(
    <StrictMode>
      <App/>
    </StrictMode>
  )
} else {
  throw new Error("No se encontró el elemento con id ");
  
}
