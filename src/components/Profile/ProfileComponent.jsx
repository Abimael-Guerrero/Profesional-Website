import H1 from './H1'
import { useState } from 'react'
import style from '../../styles/components/ProfileComponent.module.scss'

function ProfileComponent () {
  const texts = ['Abimael', 'Mexican', 'Front-End']
  let [text, setText] = useState('Abimael')
  let [n, setN] = useState(0)

  const changeText = () => {
    if (n < 2) {
      setN(n += 1)
      setText(text = texts[n])
    } else {
      setN(n = 0)
      setText(text = texts[n])
    }
  }

  return (
    <div className={style['hp-container__profile']}>
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
        <div
        className={style['hp-container__profile__text-container__abimael-wrapper']}
        onClick={changeText}>
          <H1
            h1Class={style['hp-container__profile__text-container__abimael-wrapper__abimael']}
            spanClass={'hp-container__profile__text-container__abimael-wrapper__abimael__text'}
            lineClass={style['hp-container__profile__text-container__abimael-wrapper__abimael__line']}
            text={text}
          />
        </div>
      </div>
    </div>
  )
}

export default ProfileComponent