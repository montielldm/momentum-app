import { useAuth } from "@/context/auth.context"

export default function GroupsPage() {
    const { getUser } = useAuth()
    const user = getUser()
    
    return (
        <div>GroupsPage user: {JSON.stringify(user)}</div>
    )
}
