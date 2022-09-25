import style from '../styles/pages/AboutMe.module.scss'
import Skills from '../components/Skills'

function AboutMe () {
  return (
    <h1 className={style['am-container']}>
      <div className={style['am-container_introduction']}>
        <h1 className={style['am-container_introduction_title']}>About <span>me</span></h1>
        <p className={style['am-container_introduction_subtitle']}>- A little bit about my self</p>
        <p className={style['am-container_introduction_text']}>
        Hi there! <br /><br />
        My name is Abimael Zavala Guerrero I am 26 year old, I am Mexican and I am from Puebla City, Puebla.<br /><br />
        I studied graphic design from 2014 to 2019 but 1 year before finishing college I felt atracted to code so I decided to learn just by self-teaching.</p>
      </div>
      <h2>About my Skills</h2>
      <div>
        <Skills />
        <Skills />
        <Skills />
      </div>
    </h1>
  )
}

export default AboutMe