function H1 ({ text, h1Class, spanClass, lineClass, changeText }) {
  return (
    <h1
      className={h1Class}
      onClick={changeText}>
      <span className={spanClass}>{text}</span>
      <div className={lineClass}></div>
    </h1>
  )
}

export default H1