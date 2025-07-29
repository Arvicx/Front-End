import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Alert from './components/Alerts/Alerts.jsx'
import Catalogo from './components/catalogo/catalogo.jsx'
import Header from './components/Header/header.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"


const router = createBrowserRouter([
  {
    path :"/" ,
    element : <App/> ,

  },
  {
    path : "/catalogo",
    element : <Catalogo/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    {/* props */}
    <Alert msg="ALERTA!!"/>
    <Alert msg="ALERTA!!"/>
    <App />
    <Catalogo/>
  </StrictMode>,
)
