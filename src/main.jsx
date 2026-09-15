import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContentProvider } from './ContentContext.jsx'
import { AlignmentProvider } from './AlignmentContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContentProvider>
      <AlignmentProvider>
        <App />
      </AlignmentProvider>
    </ContentProvider>
  </StrictMode>,
)
