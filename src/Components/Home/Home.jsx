import Banner from "../Banner/Banner"
import FaqSection from "../FaqSection/FaqSection"
import MapComponent from "../MapComponent"
import Review from "../Review/Review"
import Slider from "../Slider"
const Home = () => {
  return (
    <div className="space-y-10">
      <Slider />
      <MapComponent />
      <Review />
      <Banner />
      <FaqSection />
    </div>
  )
}

export default Home
