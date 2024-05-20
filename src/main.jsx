import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import { router } from './Routes/AllRoutes';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './AuthProvider/AuthProvider';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='max-w-7xl mx-auto'>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </div>
    </AuthProvider>
  </React.StrictMode>,
)