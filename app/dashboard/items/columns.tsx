import type { ColumnDef } from "@tanstack/react-table";
import { EyeClosedIcon, EyeIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export type Item = {
    id: string;
    name: string;
    room: string;
    visibility: string;
    location: string;
};

export const columns: ColumnDef<Item>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "room",
        header: "Room",
    },
    {
        accessorKey: "location",
        header: "Location",
    },
    {
        accessorKey: "visibility",
        header: "Visibility",
        cell: ({ row }) => {
            const visibility = row.original.visibility;

            return (
                <Badge variant="secondary">
                    {visibility === "hidden" ? <EyeClosedIcon /> : <EyeIcon />}
                    {visibility}
                </Badge>
            );
        },
    },
];
