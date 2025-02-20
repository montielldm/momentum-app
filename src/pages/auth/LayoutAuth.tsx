import { Outlet } from 'react-router-dom'
import { useAuth } from '@/context/auth.context'
import { Navigate } from 'react-router-dom'

export default function LayoutAuth() {
  const { isAuthenticated } = useAuth()
  return (
    isAuthenticated ? Navigate({ to: "/app/groups"}) : (
      <div className='w-full h-screen p-4'>
        <Outlet />
      </div>
    ) 
  )
}
