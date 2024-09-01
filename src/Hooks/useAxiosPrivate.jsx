import axios from "axios";

const axiosPrivate = axios.create({
    baseURL: "https://server-coral-alpha-78.vercel.app"
    // baseURL: "http://localhost:5000"
});
const useAxiosPrivate = () => {
    return axiosPrivate;
};

export default useAxiosPrivate;