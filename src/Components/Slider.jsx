import { useRef } from 'react';
import './scrollbar.css'
import image1 from '.././assets/slide-images/1.jpg'
import image2 from '.././assets/slide-images/2.jpg'
import image3 from '.././assets/slide-images/3.jpg'
import image4 from '.././assets/slide-images/4.jpg'
import image5 from '.././assets/slide-images/5.jpg'
import image6 from '.././assets/slide-images/6.jpg'
import image7 from '.././assets/slide-images/7.jpg'
import image8 from '.././assets/slide-images/8.jpg'
import image9 from '.././assets/slide-images/9.jpg'
import image10 from '.././assets/slide-images/10.jpg'
import image11 from '.././assets/slide-images/11.jpg'
import image12 from '.././assets/slide-images/12.jpg'
const Slider = () => {
  const scrollRef = useRef(null);

  const images = [
    {
      img: image1,
    },
    {
      img: image2,
    },
    {
      img: image3,
    },
    {
      img: image4,
    },
    {
      img: image5,
    },
    {
      img: image6,
    },
    {
      img: image7,
    },
    {
      img: image8,
    },
    {
      img: image9,
    },
    {
      img: image10,
    },
    {
      img: image11,
    },
    {
      img: image12,
    },
  ];

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <>
      <div className='mx-5 lg:mx-20 bg-white h-full'>
        <div className='text-center'>
          <h1 className='text-indigo-600 text-3xl md:text-5xl lg:text-7xl py-9 slider-h1'>A Peaceful Retreat</h1>
          <p className='lg:text-xl py-3'>
            Step into our peaceful retreat and leave the stress of the outside world behind. Spaajman is your personal escape, designed to refresh and revitalize.
          </p>
        </div>

        <button
          className=""
          onClick={scrollLeft}
        >
          <svg className="absolute text-center text-white left-[15px] transform -translate-y-[-145px] p-2 bg-indigo-600 h-[50px] w-[50px]  rounded-full z-10 text-4xl "
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
            <path d="M3.99982 11.9998L19.9998 11.9998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.99963 17C8.99963 17 3.99968 13.3176 3.99966 12C3.99965 10.6824 8.99966 7 8.99966 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-scroll scrollbar-hide px-4"
        >
          {
            images.map((img, key) => {
              return <img src={img.img} key={key} className='w-[400px] h-[300px] rounded-md' />
            })
          }
        </div>

        <button
          className=""
          onClick={scrollRight}
        ><svg className='absolute text-center text-white right-[15px] transform -translate-y-[180px] p-2 bg-indigo-600 h-[50px] w-[50px]  rounded-full z-10 text-4xl  ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
            <path d="M20.0001 11.9998L4.00012 11.9998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

        </button>
      </div>
    </>
  );
};

export default Slider;
