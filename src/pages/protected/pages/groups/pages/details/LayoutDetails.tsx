import { useParams } from 'react-router-dom'
import SidebarGroup from './components/SidebarGroup'
import { Outlet } from 'react-router-dom'

export default function LayoutDetails() {
    const { id } = useParams<{id: string}>()

    return (
        <div>
            <div className='p-1 border-b'>
                <SidebarGroup id={id!} />
            </div>
            <Outlet />
        </div>
    )
}
