import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/assets/Tailwind.css'
import App from '/src/pages/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
