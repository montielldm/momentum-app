import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '@/context/auth.context'
import { SidebarProvider } from '@/components/ui/sidebar'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from './components/AppSidebar'
import UserMenu from './components/UserMenu'

export default function LayoutProtected() {
    const { isAuthenticated } = useAuth()
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className='w-full h-screen'>
                <div className='p-2 border-b flex items-center justify-between'>
                    <SidebarTrigger className='cursor-pointer' />
                    <UserMenu />
                </div>
                <div className='p-4 bg-neutral-50 h-screen-main'>
                    {isAuthenticated ? <Outlet /> : Navigate({to: "/auth/login"})}
                </div>
            </main>
        </SidebarProvider>
    )
}
