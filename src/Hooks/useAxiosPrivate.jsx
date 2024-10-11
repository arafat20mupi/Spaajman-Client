import axios from "axios";

const axiosPrivate = axios.create({
    

    // Arafat
    baseURL: 'https://spaajman-server.vercel.app'
});
const useAxiosPrivate = () => {
    return axiosPrivate;
};

export default useAxiosPrivate;