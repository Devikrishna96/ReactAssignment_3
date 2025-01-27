import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles/index.css'
import App from './pages/App.jsx'
import ProductDetails from './pages/ProductDetails'
const router = createBrowserRouter([
  
  {
    path: "/",
    element: <App />
    ,
    
  },
  {
    path: "/product-details/:id",
    element: <ProductDetails  />
    ,
  },
  
  
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>
)
