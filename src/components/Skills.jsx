import style from '../styles/components/Skills.module.scss'

function Skills ({ orangeText, firstSkill, secondSkill, thirdSkill, forthSkill, fifthSkill, firstSkillXp, secondSkillXp, thirdSkillXp, forthSkillXp, fifthSkillXp, currentlyLearning }) {
  return (
    <div className={style['am-container__skills']}>

      <div className={style['am-container__skills__titles']}>
        <h1 className={style['am-container__skills__titles__main-title']}><span>{orangeText}</span> Skills</h1>
        <p className={style['am-container__skills__titles__xp-title']}>
          Time of<br />
          Experience
        </p>
      </div>

      <div className={style['am-container__skills__content']}>
        <div className={style['am-container__skills__content__items']}>

          <div className={style['am-container__skills__content__items__container']}>
            <div className={style['am-container__skills__content__items__container__text']}>
              - {firstSkill}
            </div>
            <div className={style['am-container__skills__content__items__container__line']}></div>
            <div className={style['am-container__skills__content__items__container__xp']}>
              {firstSkillXp}
            </div>
          </div>

          <div className={style['am-container__skills__content__items__container']}>
            <div className={style['am-container__skills__content__items__container__text']}>
              - {secondSkill}
            </div>
            <div className={style['am-container__skills__content__items__container__line']}></div>
            <div className={style['am-container__skills__content__items__container__xp']}>
              {secondSkillXp}
            </div>
          </div>

          <div className={style['am-container__skills__content__items__container']}>
            <div className={style['am-container__skills__content__items__container__text']}>
              - {thirdSkill}
            </div>
            <div className={style['am-container__skills__content__items__container__line']}></div>
            <div className={style['am-container__skills__content__items__container__xp']}>
              {thirdSkillXp}
            </div>
          </div>

          <div className={style['am-container__skills__content__items__container']}>
            <div className={style['am-container__skills__content__items__container__text']}>
              - {forthSkill}
            </div>
            <div className={style['am-container__skills__content__items__container__line']}></div>
            <div className={style['am-container__skills__content__items__container__xp']}>
              {forthSkillXp}
            </div>
          </div>

          <div className={style['am-container__skills__content__items__container']}>
            <div className={style['am-container__skills__content__items__container__text']}>
              - {fifthSkill}{currentlyLearning}
            </div>
            <div className={style['am-container__skills__content__items__container__line']}></div>
            <div className={style['am-container__skills__content__items__container__xp']}>
              {fifthSkillXp}
            </div>
          </div>

          {/* <li>- {fifthSkill}{currentlyLearning}</li> */}
        </div>
        {/* <ul className={style['am-container__skills__content__xp']}>
          <li>{forthSkillXp}</li>
          <li>{fifthSkillXp}</li>
        </ul> */}
      </div>
    </div>
  )
}

export default Skills