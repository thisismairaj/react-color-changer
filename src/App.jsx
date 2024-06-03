import { useState } from "react"
import Input from "./Input"
import Square from "./Square"

function App() {
  const [colorValue, setColorValue] = useState("")
  const [isDarkText, setIsDarkText] = useState(false)

  return (
    <div className="App">
      <Square colorValue={colorValue} isDarkText={isDarkText} />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  )
}

export default App
