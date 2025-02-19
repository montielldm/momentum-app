import { BrowserRouter } from "react-router-dom"
import './app.css'
import AppRouting from "./routing/AppRouting"

function App() {
  return (
    <BrowserRouter>
      <AppRouting />
    </BrowserRouter>
  )
}

export default App
