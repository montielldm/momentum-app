import { ThemeProvider, BaseStyles } from "@primer/react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './app.css'

// Import routes
import LoginPage from "./pages/login/LoginPage"

function App() {
  return (
    <ThemeProvider dayScheme="light" nightScheme="dark_dimmed">
        <BaseStyles>
            <BrowserRouter>
              <Routes>
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </BrowserRouter>
        </BaseStyles>
    </ThemeProvider>
  )
}

export default App
