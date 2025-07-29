import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Alert from './components/Alerts/Alerts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* props */}
    <Alert msg="ALERTA!!"/>
    <Alert msg="ALERTA!!"/>
    <App />
  </StrictMode>,
)
