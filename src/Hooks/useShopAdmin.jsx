import { useContext } from "react";
import useAxiosPrivate from "./useAxiosPrivate";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useShopAdmin = () => {
    const axiosSecure = useAxiosPrivate();
    const { user, loading } = useContext(AuthContext);
    const { data: isShop, isPending: isLoading } = useQuery({
        queryKey: [user?.email, 'isShop'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/shop/position/${user?.email}`);
            return res?.data?.position;
        }
    });
    return [isShop, isLoading];
};

export default useShopAdmin;