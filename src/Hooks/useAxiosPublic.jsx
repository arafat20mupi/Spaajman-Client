import axios from "axios";

const axiosPublic = axios.create({
    // baseURL: "https://server-coral-alpha-78.vercel.app"
    baseURL: "https://server-coral-alpha-78.vercel.app"
});
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;