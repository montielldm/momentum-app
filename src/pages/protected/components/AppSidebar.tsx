import { Settings, LibraryBig } from "lucide-react"
import Logo from '@/assets/momentum-logo.svg'
import { Separator } from "@/components/ui/separator"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"

// Menu items.
const items = [
    {
        title: "Grupos",
        url: "/app/groups",
        icon: LibraryBig,
    },
]

const footer_items = [
    {
        title: "Settings",
        url: "/app/settings",
        icon: Settings,
    },
]

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarContent className="bg-white">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem className="p-1 flex items-center gap-2.5">
                                <div className="flex aspect-square size-6 items-center justify-start rounded-lg">
                                    <img src={Logo} alt="logo-momentum" />
                                </div>
                                <span className="font-medium text-md">Momentum</span>
                            </SidebarMenuItem>
                            <Separator orientation="horizontal" />
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton tooltip={item.title} asChild>
                                        <Link to={item.url}>
                                            <item.icon className='dark:text-white text-neutral-500' />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>

                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="bg-white">
                <SidebarMenu>
                    {footer_items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton tooltip={item.title} asChild>
                                <Link to={item.url}>
                                    <item.icon />
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>

            </SidebarFooter>
        </Sidebar>
    )
}