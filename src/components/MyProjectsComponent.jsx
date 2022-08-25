import { Link } from 'react-router-dom'
import style from '../styles/components/MyProjectsComponent.module.scss'

function MyProjectsComponent () {
  return (
    <Link
    to='/my_projects'
    className={style['hp-container__my-projects']}>
      My Projects
    </Link>
  )
}

export default MyProjectsComponent