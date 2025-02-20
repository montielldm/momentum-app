import { useQuery } from "@tanstack/react-query";
import { GetAllGroups } from "../services/groups.services";

export default function useGroups() {
    const queryResult = useQuery({
        queryKey: ["groups"],
        queryFn: GetAllGroups
    })

    return queryResult
}
