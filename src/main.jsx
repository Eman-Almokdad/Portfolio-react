import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Certificates from './pages/Certificates.jsx';
import Projects from './pages/Projects.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/Skills",
        element: <Skills />,
      },
      {
        path: "/Projects",
        element: <Projects />,
      },
      {
        path: "/Certificates",
        element: <Certificates />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }, 
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
