import { useMutation } from "@tanstack/react-query";
import { SignIn } from "../services/login.services";
import { useAuth } from "@/context/auth.context";
import { useNavigate } from "react-router-dom";

export default function useSignInMutation() {
    const { saveUser, getUser } = useAuth()
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: SignIn,
        onMutate: () => {
            console.log("Iniciando sesion...")
        },
        onSuccess(data){
            console.log("Iniciadooo", data)
            saveUser(data)
            navigate("/app/groups")
            console.log("datos guardados..")
        },
        onError: (error) => {console.log("NO iniciadoooo: ", error)},
        onSettled: () => {
            console.log("user: ", getUser())
        }
    })

    return mutation
}
