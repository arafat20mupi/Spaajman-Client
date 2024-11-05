import axios from "axios";

const axiosPublic = axios.create({
    
    // Arafat
    
    baseURL: "https://spaajman-server.vercel.app"
    // baseURL: "http://localhost:5000"
});
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;