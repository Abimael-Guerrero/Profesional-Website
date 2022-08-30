import AboutMeInf from '../img/about-me-inf.png'
import ContactMeInf from '../img/contact-me-inf.png'

function InfoText ({ image, infoClass }) {
  return (
    <div
    className={infoClass}
    style={{ backgroundImage: `url('${(image === true) ? AboutMeInf : ContactMeInf}')` }}>
    </div>
  )
}
// style['hp-container__inf']
export default InfoText