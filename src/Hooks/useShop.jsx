import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useShop = () => {
    const axiosPublic = useAxiosPublic();
    
    const { data: allShop = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['allShop'], // Changed to an array
        queryFn: async () => {
            const res = await axiosPublic.get('/shop');
            return res.data;
        }
    });
    
    return [allShop, loading, refetch];
};

export default useShop;
