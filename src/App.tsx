import { BrowserRouter } from "react-router-dom"
import './app.css'
import AppRouting from "./routing/AppRouting"
import { AuthProvider } from "./context/auth.context"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <AppRouting />
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
