import { api } from "@/helpers/axios.instance";

export const GetAllGroups = async ():Promise<string> => {
    const { data } = await api.get<string>("/auth/groups")
    return data
}