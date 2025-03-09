import { getCoreRowModel, useReactTable } from "@tanstack/react-table"
import useGroups from "../hooks/useGroups"
import { columns } from "../columns/ColumnsGroups"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function ContentGroups() {
  const { data:groups, isLoading, isError } = useGroups()

  const table = useReactTable({
    data: groups || [],
    columns: columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <div className="mb-3 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5">
      {
        table.getCoreRowModel().rows.map((item) => {
          const group = item.original
          return (
            <div key={group.id} className="">
                  <div className="border rounded-md bg-white">
                    <div className="p-2">
                      <p className="font-semibold">{group.name}</p>
                      <div className="mt-1">
                          <span className="text-[8px]">{group.program.type}</span>
                          <p className="text-sm text-muted-foreground">{group.program.name}</p>
                      </div>
                      <div className="mt-1">
                          <p className="text-xs text-muted-foreground">{group.description}</p>
                      </div>
                      <div className="mt-2 flex groups-center flex-wrap gap-1"> 
                          <Badge variant="secondary" className="capitalize">{group.amount_apprentinces} {group.amount_apprentinces !== 1 ? "aprendices" : "aprendiz"}</Badge>
                          <Badge variant="secondary" className="capitalize">{group.amount_instructors}  {group.amount_instructors !== 1 ? "instructores" : "instructor"}</Badge>
                          <Badge variant="secondary" className="capitalize">{group.program.duration} {group.program.timing_system}</Badge>
                          <Badge variant="secondary" className="capitalize">{group.modality}</Badge>
                      </div>
                    </div>
                    <Separator />
                    <div className="px-2 py-2">
                      <div className="flex groups-center justify-between w-full">
                          <div className="text-xs">
                              
                          </div>
                          <Link to={`/app/groups/${group.id}/feed`} className={buttonVariants({ variant: "outline", size: "icon_xs"})}>
                              <ArrowUpRight size={12} />
                          </Link>
                      </div>
                    </div>
                  </div>
            </div>
          )
        })
      }
    </div>
  )
}
