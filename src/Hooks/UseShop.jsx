import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
const UseShop = () => {
    const { user } = useContext(AuthContext)
    const axiosCommon = 'http://localhost:5000'
    const { data: isHr, isPending } = useQuery({
        queryKey: ['isHr', user?.email],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/hrmanager/${user?.email}`)
            return data?.hrRole
        }
    })
    return {isHr, isPending}
};

export default UseShop;