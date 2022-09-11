import { Link } from 'react-router-dom'
import style from '../styles/components/MyProjectsComponent.module.scss'
import InfoText from '../components/InfoText'
import MyProjectsInfo from '../img/my-projects-inf.png'

function MyProjectsComponent () {
  return (
    <Link
    to='/my_projects'
    className={style['hp-container__my-projects']}>
      My
      <br />Projects
      <br />
      <span className={style['hp-container__my-projects__brackets']}>{'{'}</span>
      <span className={style['hp-container__my-projects__dev-word']}>dev</span>
      <span className={style['hp-container__my-projects__brackets']}>{'}'}</span>
      <InfoText
        infoClass={style['hp-container__my-projects__inf']}
        image={MyProjectsInfo}
      />
    </Link>
  )
}

export default MyProjectsComponent