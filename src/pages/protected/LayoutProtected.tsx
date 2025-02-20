import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '@/context/auth.context'

export default function LayoutProtected() {
    const { isAuthenticated } = useAuth()
    return (
        <div>
            {isAuthenticated ? <Outlet /> : Navigate({to: "/auth/login"})}
        </div>
    )
}
