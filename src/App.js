import style from './styles/pages/HomePage.module.scss'
import ProfileComponent from './components/Profile/ProfileComponent'
import ContactMeComponent from './components/ContactMeComponent'
import AboutMeComponent from './components/AboutMeComponent'
import MyProjectsComponent from './components/MyProjectsComponent'

// import { Route, Routes } from 'react-router-dom'
// import ContactMe from './pages/ContactMe.jsx'
// import MyProjects from './pages/MyProjects'
// import AboutMe from './pages/AboutMe'
// import HomePage from './pages/HomePage'

import './App.css'

function App () {
  return (
    <div className={style['hp-container']}>
      <ProfileComponent />
      <ContactMeComponent />
      <AboutMeComponent />
      <MyProjectsComponent />
    </div>
  )
}

export default App