import { Link } from 'react-router-dom';
import useJobs from '../Hooks/useJobs';

const Gallery = () => {
  const [jobs] = useJobs()
  console.log(jobs);
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
<<<<<<< HEAD
          {images.map((image, index) => (
            <div key={index} className='relative group' data-aos="fade-up" data-aos-duration="700">
              <img 
                src={image.img}
=======
          {jobs.map((image, index) => (
            <div key={index} className='relative group'>
              <img
                src={image.images || 'https://i.ibb.co/SXfF8yH/7.jpg'}
>>>>>>> dd2349d0dca3d962eb5a32dbd442cb42a3119670
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
        </div>
      </div>
    </div>
  );
}

export default Gallery;
