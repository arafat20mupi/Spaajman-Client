import { useLoaderData, useParams } from 'react-router-dom';
import { fetchShops } from '../Data/FetchData';
import { FaDirections } from 'react-icons/fa';

const ServicesPage = () => {
// single data load
const data = useLoaderData();
console.log(data);


  const { shopId } = useParams();
  const shop = fetchShops().find((shop) => shop.id === parseInt(shopId));
  if (!shop) {
    return <div className="p-4">Shop not found</div>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-md mt-20">
      <div className=' flex justify-between'>
        <h2 className="text-2xl font-bold mb-4">{shop.name}</h2>
        <FaDirections className=' text-3xl text-indigo-700 ml-4 cursor-pointer ' />
      </div>

      <p className="text-gray-600 mb-6">{shop.location}</p>
      <img
        src={`https://via.placeholder.com/600x400?text=${shop.name}`} // Placeholder image, can replace with real images if available
        alt={`${shop.name}`}
        className="w-full h-60 object-cover rounded mb-6"
      />
      <div className="space-y-4">
        {shop.services.map((service, index) => (
          <div key={index} className="flex justify-between items-center p-4 bg-gray-100 rounded shadow">
            <div>
              <h3 className="text-lg font-semibold">{service.name}</h3>
              <p className="text-sm text-gray-500">Rating: {service.rating} ⭐</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
