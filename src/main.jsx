import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from 'react-router-dom'
import Aboutus from './Pages/AboutUs/Aboutus.jsx'
import Workshops from './Pages/Workshops/Workshops.jsx'
import Therapy from './Pages/Therapysessions/Therapy.jsx'
import Blogs from './Pages/Blogs/Blogs.jsx'
import Contactus from './Pages/ContactUs/Contactus.jsx'
import Home from './Components/Home.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      
      <Route path='aboutus' element={<Aboutus />} />
      <Route path='workshops' element={<Workshops />} />
      <Route path='therapysessions' element={<Therapy />} />
      <Route path='blogs' element={<Blogs />} />
      <Route path='contactus' element={<Contactus />} />
      <Route path='/' element={<Home />} />
  

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)