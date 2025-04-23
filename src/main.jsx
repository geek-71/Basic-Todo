import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeProvider from './context/ThemeProvider.jsx'
import { FeatureContextProvider } from './context/themeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <FeatureContextProvider>
        <App />
      </FeatureContextProvider>
    </ThemeProvider>
  </StrictMode>
)
