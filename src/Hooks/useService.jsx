import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useShop = () => {
    const axiosPublic = useAxiosPublic();
    const { data: allShop = [], isPending: loading } = useQuery({
        queryKey: 'allClass',
        queryFn: async () => {
            const res = await axiosPublic.get('/shop');
            return res.data;
        }
    });
    return [allShop, loading];
};

export default useShop;