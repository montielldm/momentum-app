import FormLogin from "./components/FormLogin"
import Header from "../../components/Header"
import Container from "../../components/Container"

export default function LoginPage() {
  return (
    <Container>
      <div className="w-full md:max-w-sm">
        <Header
          title="Bienvenido a Momentum"
          description="Un espacio de trabajo seguro, potente y totalmente privado. Gestiona tu contenido de aprendizaje."
        />
        <FormLogin />
      </div>
    </Container>
  )
}
