import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '@/context/auth.context'
import { SidebarProvider } from '@/components/ui/sidebar'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from './components/AppSidebar'
import UserMenu from './components/UserMenu'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Inbox } from 'lucide-react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function LayoutProtected() {
    const navigate = useNavigate()    
    const { isAuthenticated } = useAuth()

    useEffect(() => {
        if (!isAuthenticated) {
          navigate("/auth/login");
        }
    }, [isAuthenticated, navigate]);

    return (
        <SidebarProvider>
            <AppSidebar />
            <main className='w-full h-screen'>
                <div className='py-2 pl-2 pr-4 border-b flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                <BreadcrumbLink href='/app/groups'>
                                    Inicio
                                </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                <BreadcrumbLink href='/app/groups'>
                                    Grupos
                                </BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-2'>
                            <Button variant="outline" size="icon_sm">
                                <Inbox className='dark:text-white text-neutral-500' size={12} />
                            </Button>
                        </div>
                        <UserMenu />
                    </div>
                </div>
                <div className='bg-neutral-50 h-screen-main'>
                    <Outlet />
                </div>
            </main>
        </SidebarProvider>
    )
}
