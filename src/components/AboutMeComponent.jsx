import { Link } from 'react-router-dom'
import style from '../styles/components/AboutMeComponent.module.scss'

function AboutMeComponent () {
  return (
    <Link
    to='/about_me'
    className={style['hp-container__about-me']}>
      About
      <br />Me
      <div className={style['hp-container__about-me__inf']}></div>
    </Link>
  )
}

export default AboutMeComponent