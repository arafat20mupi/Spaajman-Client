import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useShop = () => {
    const axiosPublic = useAxiosPublic();
    const { data: allShop = [] } = useQuery({
        queryKey: 'allClass',
        queryFn: async () => {
            const res = await axiosPublic.get('/shop');
            return res.data;
        }
    });
    return [allShop];
};

export default useShop;