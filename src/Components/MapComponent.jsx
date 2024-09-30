import { useState, useEffect } from 'react';
import {
  GoogleMap,
  MarkerF,
  InfoWindow,
  LoadScript,
  DirectionsRenderer,
  Autocomplete,
  DrawingManager,
  TrafficLayer,
  StreetViewPanorama,
} from '@react-google-maps/api';
import { Link } from 'react-router-dom';
import useShop from '../Hooks/useShop';
import Loading from './Loading/Loading';
import { FaDirections, FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const MapComponent = () => {
  const [search, setSearch] = useState('');
  const [filteredShops, setFilteredShops] = useState([]);
  const [selectedShop, setSelectedShop] = useState(null);
  const [allShop, loading] = useShop();
  const [autocomplete, setAutocomplete] = useState(null);

  // Directions state
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [directions, setDirections] = useState(null);
  const [showDirections, setShowDirections] = useState(false);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [trafficLayerVisible, setTrafficLayerVisible] = useState(false);
  const [streetViewVisible, setStreetViewVisible] = useState(false);
  const [drawingManagerVisible, setDrawingManagerVisible] = useState(false);

  const apiKey = import.meta.env.VITE_MAPS_API_KEY;

  useEffect(() => {
    if (!loading && allShop.length) {
      setFilteredShops(
        allShop.filter(
          (shop) =>
            shop.location.toLowerCase().includes(search.toLowerCase()) ||
            shop.services.some((service) =>
              service.name.toLowerCase().includes(search.toLowerCase())
            )
        )
      );
    }
  }, [search, allShop, loading]);

  const data = filteredShops.filter((item) => item.status === 'approved');
  
  const handleJourneyStart = () =>{

  }

  const handleGo = () => {
    if (!from || !to) {
      toast.error('Please select a valid "From" location.');
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
          console.log(leg)
          setDistance(leg.distance.text);
          setDuration(leg.duration.text);
        } else {
          console.error(`Error fetching directions: ${status}`, result);
        }
      }
    );
  };

  const handleDirectionToggle = (shop) => {
    setShowDirections(true);
    if (shop) {
      setTo(`${shop.location}`);
    }
  };

  const onAutocompleteLoad = (autocompleteInstance) => {
    setAutocomplete(autocompleteInstance);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      setFrom(autocomplete.getPlace().formatted_address);
    } else {
      console.log('Autocomplete is not loaded yet!');
    }
  };

  const resetDirections = () => {
    setFrom('');
    setTo('');
    setDirections(null);
    setDistance('');
    setDuration('');
    setShowDirections(false);
    setDrawingManagerVisible(false)
    setStreetViewVisible(false)
    setTrafficLayerVisible(false)
  };

  if (loading) {
    return <Loading />;
  }

  const mapCenter = allShop.length
    ? {
      lat: Number(allShop[0].position.longitude), // Use the first shop's position
      lng: Number(allShop[0].position.latitude),
    }
    : { lat: 55.5136, lng: 25.4052 };

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
            {data.map((shop) => (
              <div key={shop._id} className="p-4 bg-gray-100 rounded shadow">
                <div className="flex justify-between">
                  <h3 className="font-bold text-lg">{shop.name}</h3>
                  <button
                    className="p-2 bg-slate-50 rounded-full"
                    onClick={() => handleDirectionToggle(shop)}
                  >
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
        <div className="flex-1 w-full h-96 md:h-auto ">
          <LoadScript googleMapsApiKey={apiKey} libraries={['places', 'drawing']}>
            <GoogleMap mapContainerStyle={{ height: '100%', width: '100%' }} center={mapCenter} zoom={10}>
              {filteredShops.map((shop) => {
                const position = {
                  lat: shop.position.longitude,
                  lng: shop.position.latitude,
                };
                return (
                  <MarkerF
                    key={shop._id}
                    position={position}
                    onClick={() => setSelectedShop(shop)}
                  />
                );
              })}

              {selectedShop && (
                <InfoWindow
                  position={{
                    lat: selectedShop.position.longitude,
                    lng: selectedShop.position.latitude,
                  }}
                  onCloseClick={() => setSelectedShop(null)}
                >
                  <div>
                    <div className="flex justify-between">
                      <h3 className="font-bold text-lg">{selectedShop.name}</h3>
                      <button
                        className="p-2 bg-slate-50 rounded-full"
                        onClick={() => handleDirectionToggle(selectedShop)}
                      >
                        <FaDirections />
                      </button>
                    </div>
                    <p className="text-sm">{selectedShop.location}</p>
                    {selectedShop.services.map((service) => (
                      <div key={service.name} className="flex items-center">
                        <span>{service.name} (Rating: {service.rating})</span>
                      </div>
                    ))}
                    <Link to={`/services/${selectedShop._id}`}>
                      <button className="p-1 bg-indigo-500 text-white rounded">View Service</button>
                    </Link>
                  </div>
                </InfoWindow>
              )}
              {directions && <DirectionsRenderer directions={directions} />}

              {drawingManagerVisible && (
                <DrawingManager
                  onLoad={(drawingManager) => console.log(drawingManager)}
                  onPolygonComplete={(polygon) => console.log(polygon)}
                  options={{
                    drawingMode: window.google.maps.drawing.OverlayType.POLYGON,
                    drawingControl: true,
                    drawingControlOptions: {
                      position: window.google.maps.ControlPosition.TOP_CENTER,
                      style: window.google.maps.drawing.DrawingControlStyle.HORIZONTAL_BAR,
                      // Specify which control should appear
                      control: [window.google.maps.drawing.OverlayType.MARKER, window.google.maps.drawing.OverlayType.POLYGON],
                    },
                  }}
                />
              )}

              {/* Traffic Layer */}
              {trafficLayerVisible && <TrafficLayer />}

              {/* Street View */}
              {streetViewVisible && (
                <StreetViewPanorama
                  position={mapCenter}
                  visible={streetViewVisible}
                  options={{ enableCloseButton: true }}
                />
              )}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>

      {/* Directions Form */}
      {showDirections && (
        <div className="fixed top-20 right-0 p-4 bg-white shadow-md rounded-md z-20">
          <h3 className="font-bold text-lg mb-2">Directions</h3>
          <div className="md:flex flex-col space-y-1 mb-2">
            <Autocomplete onLoad={onAutocompleteLoad} onPlaceChanged={onPlaceChanged}>
              <input
                type="text"
                placeholder="From"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="px-2 py-1  border border-gray-300 rounded-md"
              />
            </Autocomplete>

            <input
              type="text"
              placeholder="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="px-2 py-1  border border-gray-300 rounded-md"
            />
            <div className='flex space-x-2'>
              <button className="bg-indigo-500 text-white rounded px-2 py-1" onClick={handleGo}>
                Go
              </button>
              <button className="bg-indigo-500 text-white rounded px-2 py-1" onClick={handleJourneyStart}>
                Start Journey
              </button>
              <button className="  bg-red-500 text-white rounded px-2 py-1" onClick={resetDirections}>
                <FaTrashAlt />
              </button>
            </div>
          </div>
          {directions && (
            <div>
              <p>Distance: {distance}</p>
              <p>Duration: {duration}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MapComponent;
