import { installLeadAttribution } from './utils/leadAttribution'
import { installOpenAIAdsTracking } from './utils/openaiAdsConversion'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './styles/club-theme.css'

installOpenAIAdsTracking()
installLeadAttribution()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
