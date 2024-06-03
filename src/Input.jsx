const Input = ({ colorValue, setColorValue, isDarkText, setIsDarkText }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={colorValue}
        autoFocus
        onChange={(e) => setColorValue(e.target.value)}
        placeholder="Enter Color Value"
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text Color
      </button>
    </form>
  )
}
export default Input
