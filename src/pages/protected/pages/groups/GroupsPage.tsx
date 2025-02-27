import TypographyH3 from "@/components/typography/TypographyH3"
import Container from "@/components/container/Container"
import TypographyMuted from "@/components/typography/TypographyMuted"
import ContentGroups from "./components/ContentGroups"

export default function GroupsPage() {

    return ( 
        <Container>
            <div className="mb-6">
                <div>
                    <TypographyH3 label="Grupos Asignados" />
                    <TypographyMuted label="Listado de los grupos que tienes asignados." />
                </div>
                <div>
                    <ContentGroups />
                </div>
            </div>            
        </Container>
    )
}
