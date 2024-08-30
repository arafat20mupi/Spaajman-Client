import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {   FaDirections } from 'react-icons/fa';
import { fetchShops } from '../Data/FetchData';
import { useNavigate } from 'react-router-dom';

const MapComponent = () => {
  const [search, setSearch] = useState('');
  const [shops, setShops] = useState([]);
  const [filteredShops, setFilteredShops] = useState([]);
  const [selectedShop, setSelectedShop] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
 
    const fetchShopData = async () => {
      try {
        const fetchedShops = fetchShops().map((shop, index) => ({
          ...shop,
          position: [
            23.8103 + ((index * 0.01) % 0.05),
            90.4125 + ((index * 0.01) % 0.05),
          ],
        }));
        setShops(fetchedShops);
        setFilteredShops(fetchedShops);
      } catch (error) {
        console.error('Error fetching shops:', error);
      }
    };

    fetchShopData();
  }, []);

  useEffect(() => {
    setFilteredShops(
      shops.filter((shop) =>
        shop.name.toLowerCase().includes(search.toLowerCase()) ||
        shop.services.some((service) =>
          service.name.toLowerCase().includes(search.toLowerCase())
        )
      )
    );
  }, [search, shops]);

  const handleMarkerClick = (shop) => {
    setSelectedShop(shop);
  };

  const handleViewService = (shopId) => {
    navigate(`/services/${shopId}`);
  };

  return (
    <div className="relative h-screen pt-16">
      <div className="flex flex-col-reverse md:flex-row p-4 h-full">
      
        <div className="flex flex-col w-full md:w-1/3 p-4 bg-white shadow-md rounded-md mb-4 md:mb-0 md:mr-4 z-10 overflow-hidden">
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Search salons or services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-2 border rounded flex-grow"
            />
         <FaDirections className=' text-3xl text-indigo-700 ml-4 cursor-pointer ' />
          </div>

        
          <div className="grid grid-cols-1  gap-4 overflow-y-auto max-h-96">
            {filteredShops.map((shop) => (
              <div key={shop.id} className="p-4    bg-gray-100 rounded shadow">
                <h3 className="font-bold text-lg">{shop.name}</h3>
                <p className="text-sm text-gray-600">{shop.location}</p>
                <button
                  onClick={() => handleViewService(shop.id)}
                  className="mt-2 p-2 bg-blue-500 text-white rounded"
                >
                  View Service
                </button>
              </div>
            ))}
          </div>
        </div>

 
        <div className="flex-1 h-96 md:h-auto relative">
          <MapContainer
            center={[23.8103, 90.4125]}
            zoom={12}
            style={{ height: '100%', width: '100%', zIndex: 0 }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {filteredShops.map((shop) => (
              <Marker
                key={shop.id}
                position={shop.position}
                eventHandlers={{
                  click: () => handleMarkerClick(shop),
                }}
              >
                <Popup>
                  <div>
                    <h3 className="font-bold">{shop.name}</h3>
                    <p className="text-sm">{shop.location}</p>
                    <button
                      onClick={() => handleViewService(shop.id)}
                      className="mt-2 p-1 bg-blue-500 text-white rounded"
                    >
                      View Service
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

 
      {selectedShop && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-4 rounded-md z-20 w-80">
          <h2 className="text-lg font-semibold">{selectedShop.name}</h2>
          <p className="text-gray-600">Address: {selectedShop.location}</p>
          <button
            onClick={() => handleViewService(selectedShop.id)}
            className="mt-4 p-2 bg-blue-500 text-white rounded w-full"
          >
            View Service
          </button>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
