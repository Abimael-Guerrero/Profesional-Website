import PropTypes from 'prop-types'

function H1 ({ text, h1Class, spanClass, lineClass }) {
  return (
    <h1 className={h1Class}>
      <span className={spanClass}>{text}</span>
      <div className={lineClass}></div>
    </h1>
  )
}

export default H1

H1.propTypes = {
  text: PropTypes.string,
  h1Class: PropTypes.string,
  spanClass: PropTypes.string,
  lineClass: PropTypes.string
}