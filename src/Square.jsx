const Square = ({ colorValue, isDarkText }) => {
  return (
    <section className="square" style={{ backgroundColor: colorValue }}>
      <p style={{ color: isDarkText ? "#000" : "#FFF" }}>
        {colorValue ? colorValue : "Empty color Value"}
      </p>
    </section>
  )
}

export default Square
