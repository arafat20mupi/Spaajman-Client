import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import gradienBg from "../assets/g.jpeg";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { imageUpload } from '../Utility';

const ShopRegister = () => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate();
  const axiosCommon = useAxiosPublic();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, location, registerAs, services, shopImage, latitude, longitude } = data;

    try {
      const img = await imageUpload(shopImage); 
      const payload = {
        name,
        email: user.email,
        status: 'pending',
        location,
        services: [
          {
            name: services,
            rating: 0,
          },
        ],
        img,
        position: {
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
        },
        registerAs
      };


      const res = await axiosCommon.post('/shop', payload);

      if (res.data.insertedId) {
        toast.success('Shop registered successfully with ID: ' + res.data.insertedId);
        navigate('/');
      } else {
        toast.error('Error registering shop: No ID returned');
      }
    } catch (error) {
      console.error("Error registering shop:", error);
      toast.error("Error registering shop: " + error.message);
    }
  };

  return (
    <>
      <section className="relative w-full rounded-md bg-white">
        <img className="absolute left-0 bottom-0" src={gradienBg} alt="" />
        <div className="relative flex -m-8">
          <div className="w-full p-8 mt-16">
            <div className="p-4 py-16 flex flex-col justify-center bg-[#F1F5F9] h-full">
              <form className="md:max-w-lg mx-auto" onSubmit={handleSubmit(onSubmit)}>

                {/* Full Name */}
                <label className="block mb-4">
                  <p className="mb-2 text-gray-900 font-semibold leading-normal">Shop Name</p>
                  <input
                    className="px-4 py-3.5 w-full text-gray-400 bg-white border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                    type="text"
                    placeholder="Shop Name"
                    {...register('name', { required: true, minLength: 2 })}
                  />
                  {errors.name && (
                    <p className="text-red-600">
                      {errors.name.type === 'required'
                        ? 'This field is required'
                        : 'Name must be at least 2 characters'}
                    </p>
                  )}
                </label>

                {/* Email */}
                <label className="block mb-4">
                  <p className="mb-2 text-gray-900 font-semibold leading-normal">Email Address *</p>
                  <input
                    className="px-4 py-3.5 w-full text-gray-400 bg-white border border-gray-300 rounded-lg"
                    type="email"
                    defaultValue={user.email}
                    disabled
                    {...register('email')}
                  />
                </label>

                {/* Location */}
                <label className="block mb-4">
                  <p className="mb-2 text-gray-900 font-semibold leading-normal">Location *</p>
                  <input
                    className="px-4 py-3.5 w-full text-gray-400 bg-white border border-gray-300 rounded-lg"
                    type="text"
                    placeholder="Enter Shop Location"
                    {...register('location', { required: true })}
                  />
                  {errors.location && <p className="text-red-600">This field is required</p>}
                </label>

                {/* Position */}
                <label className="block mb-4">
                  <p className="mb-2 text-gray-900 font-semibold leading-normal">Position</p>
                  <input
                    className="px-4 py-3.5 w-full text-gray-400 bg-white border border-gray-300 rounded-lg"
                    type="text"
                    {...register('latitude')}
                    placeholder="Latitude"
                  />
                  <input
                    className="px-4 mt-2 py-3.5 w-full text-gray-400 bg-white border border-gray-300 rounded-lg"
                    type="text"
                    {...register('longitude')}
                    placeholder="Longitude"
                  />
                </label>

                {/* Services */}
                <label className="block mb-4">
                  <p className="mb-2 text-gray-900 font-semibold leading-normal">Services Provided *</p>
                  <select
                    className="px-4 py-3.5 w-full text-gray-400 bg-white border border-gray-300 rounded-lg"
                    {...register('services', { required: 'Please select at least one service' })}
                  >
                    <option value="spa">Spa</option>
                    <option value="salon">Salon</option>
                    <option value="massage">Massage</option>
                  </select>
                  {errors.services && <p className="text-red-600">{errors.services.message}</p>}
                </label>

                {/* Shop Image */}
                <label className="block mb-6">
                  <p className="mb-2 text-gray-900 font-semibold leading-normal">Upload Shop Image *</p>
                  <div className="relative">
                    <input
                      id="shopImage"
                      type="file"
                      className="sr-only"
                      {...register('shopImage', { required: true })}
                    />
                    <label
                      htmlFor="shopImage"
                      className="flex items-center justify-center px-4 py-3.5 w-full text-gray-400 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200 ease-in-out"
                    >
                      Select an Image
                    </label>
                  </div>
                  {errors.shopImage && <p className="text-red-600">This field is required</p>}
                </label>

                {/* Terms and Conditions */}
                <div className="flex items-center mb-4">
                  <input
                    className="w-4 h-4"
                    type="checkbox"
                    {...register('terms', { required: true })}
                  />
                  <label className="ml-2 text-sm text-gray-900">
                    I agree to the
                    <Link to="/terms" className="text-indigo-600"> Terms and Conditions</Link>
                  </label>
                </div>
                {errors.terms && <p className="text-red-600">You must agree to the terms</p>}

                {/* Submit Button */}
                <button
                  className="mb-8 py-4 px-9 w-full text-white bg-indigo-600 rounded-xl shadow-4xl hover:bg-indigo-700 transition ease-in-out duration-200"
                  type="submit"
                >
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopRegister;
