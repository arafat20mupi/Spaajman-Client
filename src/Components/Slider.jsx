import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import Loading from './Loading/Loading';
import useJobs from '../Hooks/useJobs';

const Slider = () => {
  const [jobs] = useJobs();

  return (
    <div className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 p-5  mt-20 rounded-lg shadow-xl">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Navigation,  Autoplay]}
        className="w-full mx-auto relative"
      >
        {jobs.length > 0 ? (
          jobs.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-white rounded-xl shadow-lg overflow-hidden h-44 md:h-60 transition transform hover:-translate-y-2  hover:shadow-xl p-1  md:p-4 border border-gray-200">
                <img
                  src={img?.image}
                  alt={`Job image ${index}`}
                  className="rounded-md w-full h-40 md:h-48 object-cover transition transform hover:scale-105 duration-300"
                />
              </div>
            </SwiperSlide>
          ))
        ) : (
            <Loading />    
        )}
      </Swiper>
    </div>
  );
};

export default Slider;
