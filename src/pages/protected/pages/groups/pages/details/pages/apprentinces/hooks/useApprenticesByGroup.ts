import { useQuery } from "@tanstack/react-query";
import { GetAllApprenticesByGroup } from "../services/apprentince.services";


export default function useApprenticesByGroup(id: string) {
    const queryApprentices = useQuery({
        queryKey: ["group/apprentices", id],
        queryFn: () => GetAllApprenticesByGroup(id)
    })

    return queryApprentices
}
