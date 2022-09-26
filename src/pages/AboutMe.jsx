import style from '../styles/pages/AboutMe.module.scss'
import Skills from '../components/Skills'

function AboutMe () {
  return (
    <h1 className={style['am-container']}>
      <div className={style['am-container__introduction']}>
        <h1 className={style['am-container__introduction__title']}>About <span>me</span></h1>
        <p className={style['am-container__introduction__subtitle']}>- A little bit about my self</p>
        <p className={style['am-container__introduction__text']}>
        Hi there! <br /><br />
        My name is Abimael Zavala Guerrero I am 26 year old, I am Mexican and I am from Puebla City, Puebla.<br /><br />
        I studied graphic design from 2014 to 2019 but 1 year before finishing college I felt atracted to code so I decided to learn just by self-teaching.</p>
      </div>
      <h2 className={style['am-container__about-my-skills-text']}>About my <span>Skills</span></h2>
      <div>
        <Skills
          orangeText='Key'
          firstSkill='HTML'
          secondSkill='CSS'
          thirdSkill='JavaScript'
          forthSkill='Sass'
          fifthSkill='React.js'
          firstSkillXp='3 years'
          secondSkillXp='3 years'
          thirdSkillXp={'1.3 years'}
          forthSkillXp='1 year'
          fifthSkillXp='4 months'
          currentlyLearning={<span>(Currently Learning)</span>}
        />
          <Skills
            orangeText='Extra'
            firstSkill='CSS Modules'
            secondSkill={'Git & Github'}
            thirdSkill='Eslint'
            forthSkill='NPM'
            fifthSkill='BEM methodology'
            firstSkillXp='4 months'
            secondSkillXp='1 year'
            thirdSkillXp='3 months'
            forthSkillXp='1 year'
            fifthSkillXp='3 months'
          />
        <Skills
          orangeText={<span>Graphic<br />Design</span>}
          firstSkill='Adobe Illustrator'
          secondSkill='Adobe Photoshop'
          thirdSkill='Adobe After Effect'
          forthSkill='Adobe Premiere'
          fifthSkill='Adobe XD'
          firstSkillXp='4 years'
          secondSkillXp='4 years'
          thirdSkillXp='2 years'
          forthSkillXp='1 year'
          fifthSkillXp='1 year'
        />
      </div>
    </h1>
  )
}

export default AboutMe