import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Responsibilities from './pages/Responsibilities';
import MetalInspection from './pages/MetalInspection';
import MetalImport from './pages/MetalImport';

//import Clients from './pages/Clients';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about-us',
        element: <AboutUs/>,
      },
      {
        path: '/services',
        element: <Services/>,
      },
      {
        path: '/responsibilities',
        element: <Responsibilities/>,
      },
      {
        path: '/metal-inspection',
        element: <MetalInspection/>,
      },
      {
        path: '/metal-import',
        element: <MetalImport/>,
      },
      {
        path: '/contact-us',
        element: <ContactUs/>,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
