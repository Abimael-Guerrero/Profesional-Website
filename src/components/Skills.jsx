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
        <ul className={style['am-container__skills__content__items']}>
          <li>- {firstSkill}</li>
          <li>- {secondSkill}</li>
          <li>- {thirdSkill}</li>
          <li>- {forthSkill}</li>
          <li>- {fifthSkill}{currentlyLearning}</li>
        </ul>
        <ul className={style['am-container__skills__content__xp']}>
          <li>{firstSkillXp}</li>
          <li>{secondSkillXp}</li>
          <li>{thirdSkillXp}</li>
          <li>{forthSkillXp}</li>
          <li>{fifthSkillXp}</li>
        </ul>
      </div>
    </div>
  )
}

export default Skills