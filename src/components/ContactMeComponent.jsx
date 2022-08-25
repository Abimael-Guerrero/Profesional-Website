import { Link } from 'react-router-dom'
import style from '../styles/components/ContactMeComponent.module.scss'

function ContactMeDiv () {
  return (
    <Link
    to='/contact_me'
    className={style['hp-container__contact-me']}>
      <div className={style['hp-container__contact-me__text-box']}>
        Contact
        <br />me
        <div className={style['hp-container__contact-me__text-box__inf']}>
        </div>
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