import axios from "axios";

const axiosPublic = axios.create({
    // Rafel
    // baseURL: "https://server-coral-alpha-78.vercel.app"

    // Arafat
    baseURL: "http://localhost:5000"

    // local
    // baseURL: "http://localhost:5000"
});
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;