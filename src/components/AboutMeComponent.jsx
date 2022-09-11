import { Link } from 'react-router-dom'
import InfoText from '../components/InfoText'
import style from '../styles/components/AboutMeComponent.module.scss'
import AboutMeInf from '../img/about-me-inf.png'

function AboutMeComponent () {
  return (
    <Link
    to='/about_me'
    className={style['hp-container__about-me']}>
      About
      <br />Me
      <InfoText
      infoClass={style['hp-container__about-me__inf']}
      image={AboutMeInf}
      />
    </Link>
  )
}

export default AboutMeComponent