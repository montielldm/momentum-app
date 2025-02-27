import { useParams } from 'react-router-dom'
import Container from '@/components/container/Container'
import TypographyH3 from '@/components/typography/TypographyH3'
import TypographyMuted from '@/components/typography/TypographyMuted'

export default function SettingsPage() {
    const { id } = useParams<{id: string}>()
    
    return (
        <Container>
            <div>
                <TypographyH3 label="Configuracion del Grupo" />
                <TypographyMuted label="Tienes los detalles de grupos a tu disposicion." />
            </div>
        </Container>
    )
}
