import { useState, useEffect } from 'react';
import { GoogleMap, Marker, InfoWindow, LoadScript, DirectionsRenderer } from '@react-google-maps/api';
import { Link } from 'react-router-dom';
import useShop from '../Hooks/useShop';
import Loading from './Loading/Loading';
import { FaDirections } from "react-icons/fa";

const MapComponent = () => {
  const [search, setSearch] = useState('');
  const [filteredShops, setFilteredShops] = useState([]);
  const [selectedShop, setSelectedShop] = useState(null);
  const [allShop, loading] = useShop();

  // Directions state
  const [from, setFrom] = useState('');
  const [to, setTo] = useState(null);
  const [directions, setDirections] = useState(null);
  const [showDirections, setShowDirections] = useState(false);
  const [distance, setDistance] = useState(''); 
  const [duration, setDuration] = useState(''); // To store time duration

  const apiKey = import.meta.env.VITE_MAPS_API_KEY;
  
  useEffect(() => {
    if (!loading && allShop.length) {
      setFilteredShops(
        allShop.filter((shop) =>
          shop.location.toLowerCase().includes(search.toLowerCase()) ||
          shop.services.some((service) =>
            service.name.toLowerCase().includes(search.toLowerCase())
          )
        )
      );
    }
  }, [search, allShop, loading]);

  const data = filteredShops?.filter((item) => item.status === 'approved');

  const handleGo = () => {
    if (!from || !to) {
      console.log(from, to);
      console.error('Please select a valid "From" location.');
      return;
    }

    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: from,
        destination: to,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);

          const leg = result.routes[0].legs[0];
          setDistance(leg.distance.text);
          setDuration(leg.duration.text);
        } else {
          console.error(`Error fetching directions: ${status}`, result);
        }
      }
    );
  };

  const handleDirectionToggle = () => {
    setShowDirections((prevState) => !prevState);
    setDirections(null);
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="relative h-[100vh] pt-16">
      <div className="flex flex-col-reverse md:flex-row p-4 h-full">
        {/* Search and List Panel */}
        <div className="flex flex-col w-full md:w-1/3 p-4 bg-white shadow-md rounded-md mb-4 md:mb-0 md:mr-4 z-10 overflow-hidden">
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Search salons or services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 overflow-y-auto max-h-96">
            {data?.map((shop) => (
              <div key={shop._id} className="p-4 bg-gray-100 rounded shadow">
                <div className="flex justify-between">
                  <h3 className="font-bold text-lg">{shop.name}</h3>
                  <button className="p-2 bg-slate-50 rounded-full" onClick={handleDirectionToggle}>
                    <FaDirections />
                  </button>
                </div>
                <p className="text-sm text-gray-600">{shop.location}</p>
                <Link to={`/services/${shop._id}`}>
                  <button className="mt-2 p-2 bg-indigo-500 text-white rounded">
                    View Service
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Google Map Panel */}
        <div className="flex-1 h-96 md:h-auto relative">
          <LoadScript googleMapsApiKey={apiKey} loadingElement={<Loading></Loading>}>
            <GoogleMap
              mapContainerStyle={{ height: '100%', width: '100%' }}
              center={{ lat: 25.4052, lng: 55.5136 }}
              zoom={10}
            >
              {filteredShops?.map((shop) => (
                <Marker
                  key={shop._id}
                  position={{
                    lat: Number(shop.position[1]),
                    lng: Number(shop.position[0]),
                  }}
                />
              ))}

              {selectedShop && (
                <InfoWindow
                  position={{
                    lat: Number(selectedShop.position[1]),
                    lng: Number(selectedShop.position[0]),
                  }}
                  onCloseClick={() => setSelectedShop(null)}
                >
                  <div>
                    <div className="flex justify-between">
                      <h3 className="font-bold text-lg">{selectedShop.name}</h3>
                      <button className="p-2 bg-slate-50 rounded-full" onClick={handleDirectionToggle}>
                        <FaDirections />
                      </button>
                    </div>
                    <p className="text-sm">{selectedShop.location}</p>
                    <Link to={`/services/${selectedShop._id}`}>
                      <button className="p-1 bg-indigo-500 text-white rounded">
                        View Service
                      </button>
                    </Link>
                  </div>
                </InfoWindow>
              )}

              {/* Render Directions if available */}
              {directions && <DirectionsRenderer directions={directions} />}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
      {/* Directions Form */}
      {showDirections && (
        <div className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-4 rounded-md z-20 w-80">
          <h3 className="text-lg font-semibold">Get Directions</h3>
          <input
            type="text"
            placeholder="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          {/* Display the shop location in the 'To' field (read-only) */}
          <input
            type="text"
            placeholder="To"
            onChange={(e) => setTo(e.target.value)}
            value={to}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <button onClick={handleGo} className="w-full p-2 bg-indigo-500 text-white rounded">
            Go
          </button>
          {/* Show distance and time */}
          {distance && duration && (
            <div className="mt-2">
              <div>Distance: {distance}</div>
              <div>Time: {duration}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MapComponent;
