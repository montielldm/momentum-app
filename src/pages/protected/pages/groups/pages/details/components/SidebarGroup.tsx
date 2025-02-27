import { cn } from "@/lib/utils"
import { MessageSquareQuote, LayoutList, BookPlus, SlidersVertical, Users, UserRoundCog, RowsIcon } from "lucide-react"
import { NavLink } from "react-router-dom"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const routes = [
    {
        id: 1,
        name: "Muro",
        path: "/feed",
        icon: MessageSquareQuote,
        disabled: false
    },
    {
        id: 2,
        name: "Asistencias",
        path: "/assistence",
        icon: LayoutList,
        disabled: false
    },
    {
        id: 3,
        name: "Evidencias",
        path: "/evidences",
        icon: BookPlus,
        disabled: true
    },
    {
        id: 4,
        name: "Aprendices",
        path: "/apprentices",
        icon: Users,
        disabled: true
    },
    {
        id: 5,
        name: "Instructores",
        path: "/instructors",
        icon: UserRoundCog,
        disabled: true
    },
    {
        id: 6,
        name: "Configuración",
        path: "/settings",
        icon: SlidersVertical,
        disabled: false
    },
]

interface Props {
    id: string
}

export default function SidebarGroup({ id }:Props) {
  return (
    <ScrollArea>
        <div className="flex gap-1 w-full">
            {
                routes.map((router) => (
                    <NavLink key={router.id} to={!router.disabled ? `/app/groups/${id}${router.path}` : '#'} className={({ isActive }) => cn("flex items-center gap-2 rounded-md px-2 py-1 hover:bg-muted", {
                        "bg-muted": isActive && !router.disabled,
                        "text-neutral-300": router.disabled 
                    })}>
                        <router.icon size={14} />
                        <span className="text-sm">{router.name}</span>
                    </NavLink>
                ))
            }
        </div>
        <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
