import Container from "@/components/container/Container"
import ContentApprentices from "./components/ContentApprentices"
import { useParams } from "react-router-dom"
import TypographyH3 from "@/components/typography/TypographyH3"
import TypographyMuted from "@/components/typography/TypographyMuted"

export default function ApprentincesGroupPage() {
  const { id } = useParams<{id: string}>()
  
  return (
    <Container>
      <div className="space-y-2">
        <div>
          <TypographyH3 label="Aprendices" />
          <TypographyMuted label="Tienes los detalles de grupos a tu disposicion." />
        </div>
        <div>
          <ContentApprentices id={id!} />
        </div>
      </div>
    </Container>
  )
}
