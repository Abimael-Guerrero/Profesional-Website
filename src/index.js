import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'
import ContactMe from './pages/ContactMe'
import MyProjects from './pages/MyProjects'
import AboutMe from './pages/AboutMe'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/contact_me' element={<ContactMe />} />
        <Route path='/about_me' element={<AboutMe />} />
        <Route path='/my_projects' element={<MyProjects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)