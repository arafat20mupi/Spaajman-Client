import { useContext, useEffect, useState } from "react"
import Banner from "../Banner/Banner"
import FaqSection from "../FaqSection/FaqSection"
import MapComponent from "../MapComponent"
import Review from "../Review/Review"
import Slider from "../Slider"
import useAxiosPublic from "../../Hooks/useAxiosPublic"
import { AuthContext } from "../../Provider/AuthProvider"
import ShopContent from "./ShopContent"
const Home = () => {
  const axios = useAxiosPublic()
  const [userData, setUserData] = useState(null)
  const { user } = useContext(AuthContext)
  console.log(userData);

  useEffect(() => {
    if (user?.email) {
      const fetchUser = async () => {
        try {
          const response = await axios.get(`https://spaajman-server.vercel.app/shopData/${user?.email}`);
          setUserData(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
      fetchUser();
    }
  }, [user?.email, setUserData, axios]);
  return (
    <div className="space-y-10">
      <Slider />
      {
        userData?.positionAs === "shop" ? (
          <ShopContent/>
        ) 
        : (
      <MapComponent />
      )
      }
      <Review />
      <Banner />
      <FaqSection />
    </div>
  )
}

export default Home
