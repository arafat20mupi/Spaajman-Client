import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBlogs = () => {
    const axiosPublic = useAxiosPublic();
    const { data: salon = [], isPending: loading } = useQuery({
        queryKey: 'salon',
        queryFn: async () => {
            const res = await axiosPublic.get("/blogs");
            return res.data;
        }
    });
    return [salon, loading]
};

export default useBlogs;