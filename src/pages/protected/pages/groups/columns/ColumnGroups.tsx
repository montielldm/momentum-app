import { ColumnDef } from "@tanstack/react-table"
import { GroupsByUser } from "../models/group.models"

export const columns: ColumnDef<GroupsByUser>[] = [
    {
        accessorKey: "name",
    },
    {
        accessorKey: 'modality'
    }
]