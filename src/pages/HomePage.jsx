import style from '../styles/pages/HomePage.module.scss'

import ProfileComponent from '../components/Profile/ProfileComponent'
import ContactMeComponent from '../components/ContactMeComponent'
import AboutMeComponent from '../components/AboutMeComponent'
import MyProjectsComponent from '../components/MyProjectsComponent'

function HomePage () {
  return (
    <div className={style['hp-container']}>
      <ProfileComponent />
      <ContactMeComponent />
      <AboutMeComponent />
      <MyProjectsComponent />
    </div>
  )
}

export default HomePage