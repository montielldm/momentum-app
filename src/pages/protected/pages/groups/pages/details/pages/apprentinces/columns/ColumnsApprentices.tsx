import { ColumnDef } from "@tanstack/react-table";
import { UserByGroup } from "../models/apprentices.models";

export const ColumnsApprentices:ColumnDef<UserByGroup>[] = [
    {
        accessorKey: "name",
        header: "Nombre"
    },
    {
        accessorKey: "document",
        header: "Documento"
    },
    {
        accessorKey: "document_type",
        header: "Tipo de documento"
    }
]