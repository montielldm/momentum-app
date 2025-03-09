import { api } from "@/helpers/axios.instance";
import { UserByGroup } from "../models/apprentices.models";

export const GetAllApprenticesByGroup = async(id: string):Promise<UserByGroup[]> => {
    const { data } = await api.get<UserByGroup[]>(`/groups/${id}/apprentices`)
    return data
}