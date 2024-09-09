import { Link } from 'react-router-dom';
import image1 from '../assets/slide-images/1.jpg';
import image2 from '../assets/slide-images/2.jpg';
import image3 from '../assets/slide-images/3.jpg';
import image4 from '../assets/slide-images/4.jpg';
import image5 from '../assets/slide-images/5.jpg';
import image6 from '../assets/slide-images/6.jpg';
import image7 from '../assets/slide-images/7.jpg';
import image8 from '../assets/slide-images/8.jpg';
import image9 from '../assets/slide-images/9.jpg';
import image10 from '../assets/slide-images/10.jpg';
import image11 from '../assets/slide-images/11.jpg';
import image12 from '../assets/slide-images/12.jpg';

const Gallery = () => {
  const images = [
    { img: image1 },
    { img: image2 },
    { img: image3 },
    { img: image4 },
    { img: image5 },
    { img: image6 },
    { img: image7 },
    { img: image8 },
    { img: image9 },
    { img: image10 },
    { img: image11 },
    { img: image12 },
  ];

  return (
    <div className='py-5 mt-10'>
      <h1 data-aos="fade-up" data-aos-duration="700" className='text-indigo-600 text-center text-5xl md:text-5xl lg:text-7xl py-9'>
        Moments of Relaxation
      </h1>
      <p data-aos="fade-up" data-aos-duration="760" className='lg:text-xl py-3 text-center'>
        Our gallery showcases the essence of relaxation. From our inviting lounge areas to the carefully curated treatment rooms, every corner of our spa is dedicated to helping you unwind. Browse through and let the images transport you to a place of peace.
      </p>
      <div className='py-14'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 container mx-auto place-items-center'>
          {images.map((image, index) => (
            <div key={index} className='relative group' data-aos="fade-up" data-aos-duration="700">
              <img 
                src={image.img}
                alt={`Relaxation moment ${index + 1}`}
                className='w-[400px] h-[400px] my-3 rounded-md transition-opacity duration-300 ease-in-out group-hover:opacity-80'
              />
              <div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 bg-black bg-opacity-50 rounded-md'>
                <Link to='#'>
                  <button className='shadow-lg text-white bg-indigo-500 px-4 py-2 rounded hover:bg-indigo-600 focus:outline-none'>
                    View More
                  </button>
                </Link>
              </div>
            </div>
          ))}

          {/* Pagination start */}
          <div className='flex justify-center space-x-1 dark:text-gray-800'>
            <button title='Previous' type='button' className='inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100'>
              <svg viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' fill='none' strokeLinecap='round' strokeLinejoin='round' className='w-4'>
                <polyline points='15 18 9 12 15 6'></polyline>
              </svg>
            </button>
            <button type='button' title='Page 1' className='inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-50 dark:text-violet-600 dark:border-violet-600'>1</button>
            <button type='button' className='inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-50 dark:border-gray-100' title='Page 2'>2</button>
            <button type='button' className='inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-50 dark:border-gray-100' title='Page 3'>3</button>
            <button type='button' className='inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-50 dark:border-gray-100' title='Page 4'>4</button>
            <button title='Next' type='button' className='inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100'>
              <svg viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' fill='none' strokeLinecap='round' strokeLinejoin='round' className='w-4'>
                <polyline points='9 18 15 12 9 6'></polyline>
              </svg>
            </button>
          </div>
          {/* Pagination end */}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
