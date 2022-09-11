function InfoText ({ image, infoClass }) {
  return (
    <div
    className={infoClass}
    style={{ backgroundImage: `url('${image}')` }}>
    {/* style={{ backgroundImage: `url('${(image === true) ? AboutMeInf : ContactMeInf}')` }}> */}
    </div>
  )
}
// style['hp-container__inf']
export default InfoText