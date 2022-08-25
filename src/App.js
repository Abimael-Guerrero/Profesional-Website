import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactMe from './pages/ContactMe'
import MyProjects from './pages/MyProjects'
import AboutMe from './pages/AboutMe'

import './App.css'

function App () {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/contact_me' element={<ContactMe />} />
      <Route path='/about_me' element={<AboutMe />} />
      <Route path='/my_projects' element={<MyProjects />} />
    </Routes>
  )
}

export default App