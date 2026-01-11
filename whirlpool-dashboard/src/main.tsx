import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

window.addEventListener('error', (event) => {
  console.error('Global Error Captured:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled Promise Rejection:', event.reason);
});

import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
