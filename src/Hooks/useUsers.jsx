import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "./useAxiosPrivate";


const useUsers = () => {
    const axiosPrivate = useAxiosPrivate();
    const { data: users = [], isPending: loading } = useQuery({
        queryKey: "users",
        queryFn: async () => {
            const response = await axiosPrivate.get("/users");
            return response.data;
        }
    })
    return [users, loading];
};

export default useUsers;