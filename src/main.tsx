import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './router'
import CurrentUserProvider from './contexts/currentUserProvider'
import '@/index.css'

createRoot(document.getElementById('root')!).render(
  <CurrentUserProvider>
    <StrictMode>
      <AppRoutes />
    </StrictMode>
  </CurrentUserProvider>
)
