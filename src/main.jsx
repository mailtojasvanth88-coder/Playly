import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import PlayercomponentProvider, { Playercomponent } from './Components/Context/Playercomponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <PlayercomponentProvider>
    <App />
    </PlayercomponentProvider>
    </BrowserRouter>
  </StrictMode>
  
)
