import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello programmer..!!</div>,
  },
  // create multiple route
  {
    path: '/Home',
    element: <div>This a home page</div>,
  },
  {
    path: '/about',
    element: <div>This is a about page</div>
  },

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
