import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import KioskoProvider from './context/KioskoProvider'
import router from './router'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KioskoProvider>
      <RouterProvider router={router} />
    </KioskoProvider>
  </StrictMode>,
)
