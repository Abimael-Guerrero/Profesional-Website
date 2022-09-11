import { Link } from 'react-router-dom'
import InfoText from '../components/InfoText'
import style from '../styles/components/ContactMeComponent.module.scss'
import ContactMe from '../img/contact-me-inf.png'

function ContactMeDiv () {
  return (
    <Link
    to='/contact_me'
    className={style['hp-container__contact-me']}>
      <div className={style['hp-container__contact-me__text-box']}>
        Contact
        <br />me
        <InfoText
        infoClass={style['hp-container__contact-me__text-box__inf']}
        image={ContactMe} />
      </div>
      <div className={style['hp-container__contact-me__arrow-section']}>
        <img
        className={style['hp-container__contact-me__arrow-section__arrow']}
        src={require('../img/contact-me-arrow.png')}
        alt=''
        />
      </div>
    </Link>
  )
}

export default ContactMeDiv