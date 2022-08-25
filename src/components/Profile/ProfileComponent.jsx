import style from '../../styles/components/ProfileComponent.module.scss'
import H1 from './H1'

function ProfileComponent () {
  return (
    <div className={style['hp-container__profile']}>
      <div className={style['hp-container__profile__container']}>
        <div className={style['hp-container__profile__img-container']}>
        </div>
        <div className={style['hp-container__profile__text-container']}>
          <H1
          h1Class={style['hp-container__profile__text-container__hi']}
          spanClass={style['hp-container__profile__text-container__hi__text']}
          lineClass={style['hp-container__profile__text-container__hi__line']}
          text={'Hi'}
          />
          <H1
          h1Class={style['hp-container__profile__text-container__i-am']}
          spanClass={style['hp-container__profile__text-container__i-am__text']}
          lineClass={style['hp-container__profile__text-container__i-am__line']}
          text={'I am'}
          />
          <div className={style['hp-container__profile__text-container__abimael-wrapper']}>
            <H1
            h1Class={style['hp-container__profile__text-container__abimael-wrapper__abimael']}
            spanClass={style['hp-container__profile__text-container__abimael-wrapper__abimael__text']}
            lineClass={style['hp-container__profile__text-container__abimael-wrapper__abimael__line']}
            text={'Front-End'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileComponent