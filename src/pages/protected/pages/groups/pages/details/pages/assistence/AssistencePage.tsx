import Container from '@/components/container/Container'
import TypographyH3 from '@/components/typography/TypographyH3'
import TypographyMuted from '@/components/typography/TypographyMuted'

export default function AssistencePage() {
    return (
        <Container>
            <div>
                <TypographyH3 label="Eventos del Grupo" />
                <TypographyMuted label="Tienes los detalles de grupos a tu disposicion." />
            </div>
        </Container>
    )
}
