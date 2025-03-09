import useApprenticesByGroup from "../hooks/useApprenticesByGroup"
import { useReactTable, getCoreRowModel, ColumnFiltersState, getFilteredRowModel } from "@tanstack/react-table"
import { ColumnsApprentices } from "../columns/ColumnsApprentices"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { IconChartBar, IconDownload, IconId, IconMessage2Share, IconSearch } from "@tabler/icons-react"
import { Input } from "@/components/ui/input"
import { useId, useState } from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge"

interface Props {
    id: string
}

const types_document = [
    {
        id: 1,
        name: "Todos",
        acronyms: "all"
    },
    {
        id: 2,
        name: "Tarjeta de identidad",
        acronyms: "TI"
    },
    {
        id: 3,
        name: "Cédula de ciudadanía",
        acronyms: "CC"
    },
    {
        id: 4,
        name: "Tarjeta de extranjería",
        acronyms: "TE"
    },
    {
        id: 5,
        name: "Cédula de extranjería",
        acronyms: "CE"
    },
    {
        id: 6,
        name: "NIT",
        acronyms: "NIT"
    },
    {
        id: 7,
        name: "Pasaporte",
        acronyms: "PP"
    },
]

export default function ContentApprentices({ id }: Props) {
    const [ columnFilters, setColumnFilters ] = useState<ColumnFiltersState>([])
    const { data } = useApprenticesByGroup(id)
    const inputNameId = useId()
    const inputDocumentId = useId()

    const table = useReactTable({
        data: data || [],
        columns: ColumnsApprentices,
        getCoreRowModel: getCoreRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            columnFilters
        }
    })

    return (
        <div className="mt-10">
            <div className="flex items-center gap-2 flex-wrap justify-between mb-4">
                <div className="flex items-center gap-2 flex-wrap">
                    <div className="relative">
                        <Input
                            id={inputNameId}
                            className="peer ps-8 pe-2"
                            placeholder="Buscar por nombre..."
                            value={(table.getColumn('name')?.getFilterValue() as string) ?? ""}
                            onChange={(event) => 
                                table.getColumn('name')?.setFilterValue(event.target.value)
                            }
                        />
                        <div className="absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                            <IconSearch size={14} />
                        </div>
                    </div>
                    <div className="relative">
                        <Input
                            id={inputDocumentId}
                            className="peer ps-8 pe-2"
                            placeholder="Buscar por documento..."
                            value={(table.getColumn('document')?.getFilterValue() as string) ?? ""}
                            onChange={(event) => {
                                table.getColumn('document')?.setFilterValue(event.target.value)
                            }}
                        />
                        <div className="absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                            <IconId size={14} />
                        </div>
                    </div>
                    <Select
                        onValueChange={(e) => {
                            if(e==="all"){
                                table.getColumn("document_type")?.setFilterValue("")
                            }else{
                                table.getColumn("document_type")?.setFilterValue(e)
                            }
                        }}
                    >
                        <SelectTrigger
                            id={id}
                            className="[&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0"
                            onChange={(e) => {
                                console.log("Err: ", e)
                            }}
                        >
                            <SelectValue placeholder="Tipo de documento" />
                        </SelectTrigger>
                        <SelectContent className="[&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]>span>svg]:shrink-0">
                            {
                                types_document.map((type) => (
                                    <SelectItem key={type.id} value={type.acronyms}>
                                        <span className="flex items-center gap-2">
                                            <span className="truncate">{type.name}</span>
                                        </span>
                                    </SelectItem>
                                ))
                            }
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    table.getRowModel().rows?.length ? table.getCoreRowModel().rows.map((item) => {
                        const apprentice = item.original
                        return (
                            <div key={apprentice.id} className="border rounded-lg bg-white">
                                <div className="flex items-center gap-2 p-2">
                                    <Avatar className="size-10">
                                        <AvatarImage src={apprentice.avatar} alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col -gap-2">
                                        <span className="text-base font-medium">{apprentice.name} {apprentice.lastname}</span>
                                        <span className="text-xs text-muted-foreground">{apprentice.email}</span>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <Badge variant="secondary">
                                        <p className="text-muted-foreground text-xs">{apprentice.document_type} - {apprentice.document}</p>
                                    </Badge>
                                </div>
                                <Separator />
                                <div className="p-2 flex items-center justify-start gap-2">
                                    <Button variant="outline" size="icon_xs" disabled>
                                        <IconChartBar
                                            size={14}
                                        />
                                    </Button>
                                    <Button variant="outline" size="icon_xs" disabled>
                                        <IconMessage2Share
                                            size={14}
                                        />
                                    </Button>
                                </div>
                            </div>
                        )
                    }) : (
                        <div className="col-span-6 w-full h-48">
                            <div className="text-center w-full">
                                <p className="font-semibold text-lg">Ooops!!</p>
                                <span className="text-muted-foreground text-sm">No encontramos resultados de busqueda para <span className="font-semibold">"{table.getColumn("name")?.getFilterValue() as string ?? ""}"</span></span>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
