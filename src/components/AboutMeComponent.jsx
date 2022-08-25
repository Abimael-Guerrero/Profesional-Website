import { Link } from 'react-router-dom'
import InfoText from '../components/InfoText'
import style from '../styles/components/AboutMeComponent.module.scss'

function AboutMeComponent () {
  return (
    <Link
    to='/about_me'
    className={style['hp-container__about-me']}>
      About
      <br />Me
      <InfoText
      infoClass={style['hp-container__about-me__inf']}
      image={true}
      />
    </Link>
  )
}

export default AboutMeComponent