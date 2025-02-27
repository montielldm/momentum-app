import { api } from "@/helpers/axios.instance";
import { GroupsByUser } from "../models/group.models";

export const GetAllGroups = async ():Promise<GroupsByUser[]> => {
    const { data } = await api.get<GroupsByUser[]>("/groups")
    return data
}