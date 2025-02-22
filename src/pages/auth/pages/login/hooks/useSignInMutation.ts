import { useMutation } from "@tanstack/react-query";
import { SignIn } from "../services/login.services";
import { useAuth } from "@/context/auth.context";
import { useNavigate } from "react-router-dom";

export default function useSignInMutation() {
    const { saveUser } = useAuth()
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: SignIn,
        onMutate: () => {
        },
        onSuccess(data){
            saveUser(data)
            navigate("/app/groups")
        },
        onError: (error) => {console.log("NO iniciadoooo: ", error)},
    })

    return mutation
}
