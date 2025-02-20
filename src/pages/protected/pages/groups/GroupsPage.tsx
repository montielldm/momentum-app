import { useAuth } from "@/context/auth.context"
import useGroups from "./hooks/useGroups"

export default function GroupsPage() {
    const { getUser } = useAuth()
    const { refetch, isFetching } = useGroups()
    
    return (
        <div>GroupsPage user:
      
            {isFetching ? "cargando..." : "Nooo"}
            <button onClick={() => refetch()}>refetch</button>
        </div>
    )
}
