import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

const ServicesPage = () => {
  // single data load
  const shop = useLoaderData();
  
  // Local state for services to manage updates
  const [services, setServices] = useState(shop.services);

  const handleRating = async (serviceIndex, rating) => {
    // Update the rating of the service at serviceIndex
    const updatedServices = [...services];
    updatedServices[serviceIndex].rating = rating; 
    
    // Call API to save the updated rating
    try {
      const response = await fetch(`https://spaajman-server.vercel.app/shop/${shop._id}`, { 
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ services: updatedServices }), // Include updated services in the body
      });

      if (response.ok) {
          setServices(updatedServices); // Update local state with new ratings
          alert('Thank you for your rating!');
      } else {
          alert('Failed to submit rating. Please try again.');
      }
    } catch (error) {
      console.error("Error submitting rating:", error);
      alert('Error submitting rating');
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-md mt-20">
      <div className='flex justify-between'>
        <h2 className="text-2xl font-bold mb-4">{shop.name}</h2>
      </div>

      <p className="text-gray-600 mb-6">{shop.location}</p>
      <img
        src={shop.img}
        alt={`${shop.name}`}
        className="w-[60%] mx-auto h-full object-cover rounded mb-6"
      />
      <div className="space-y-4">
        {services.map((service, index) => (
          <div key={index} className="flex justify-between items-center p-4 bg-gray-100 rounded shadow">
            <div>
              <h3 className="text-lg font-semibold">{service.name}</h3>
              <p className="text-sm text-gray-500">Average Rating: {service.rating} </p>
            </div>
            <div className="rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <input
                  key={star}
                  type="radio"
                  name={`rating-${index}`}
                  className="mask mask-star-2 bg-orange-400"
                  onClick={() => handleRating(index, star)} // Call handleRating with the service index and star rating
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Link to={'/'}>
        <button className="relative mt-5 inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
          <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
          <span className="relative">Back now</span>
        </button>
      </Link>
    </div>
  );
};

export default ServicesPage;
