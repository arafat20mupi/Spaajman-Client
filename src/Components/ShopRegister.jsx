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
  console.log(user);
  const navigate = useNavigate();
  const axiosCommon = useAxiosPublic()



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, location, registerAs, services, shopImage, latitude, longitude } = data;

    try {
      const img = await imageUpload(shopImage);
      const Data = {
        "name": name,
        "location": location,
        "services": [
          {
            "name": services,
            "rating": 0
          }
        ],
        "img": img,
        "position": [
          parseFloat(latitude),
          parseFloat(longitude)
        ],
        registerAs,
        };

      await axiosCommon.post('/requestedShop', Data, user);


      toast.success('Shop registered successfully');
      navigate('/');
    } catch (error) {
      console.error("Error registering shop:", error);
      toast.error("Error registering shop: " + error.message);
    }
  };



  return (
    <>
      <section className="relative w-full rounded-md bg-white">
        <img className="absolute left-0 bottom-0" src={gradienBg} alt="" />
        <div className="relative  flex   -m-8">
          <div className="w-full  p-8 mt-16">
            <div className="p-4 py-16 flex flex-col justify-center bg-[#F1F5F9] h-full">
              <form
                className="md:max-w-lg mx-auto"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* User Type Selection */}
                <label className="block mb-4">
                  <Link to="/register" className="mb-2    text-indigo-700 font-semibold leading-normal">
                    register as user?
                  </Link>

                  {errors.registerAs && (
                    <p className="text-red-600">This field is required</p>
                  )}
                </label>

                {/* Common Input Fields */}
                <label className="block mb-4">
                  <p className="mb-2 text-gray-900 font-semibold leading-normal">
                    Full Name
                  </p>
                  <input
                    className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                    type="text"
                    placeholder='Your Name'
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
                {/* <label className="block mb-4">
                  <p className="mb-2 text-gray-900 font-semibold leading-normal">
                    Email Address *
                  </p>
                  <input
                    className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                    type="email"
                    placeholder="Enter email address"
                    {...register('email', {
                      required: 'This field is required',
                      pattern: {
                        value:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: 'Please enter a valid email address',
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-600">{errors.email.message}</p>
                  )}
                </label> */}
                {/* <label className="block mb-5">
                  <p className="mb-2 text-gray-900 font-semibold leading-normal">
                    Password *
                  </p>
                  <input
                    className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                    type="password"
                    placeholder="******"
                    {...register('password', {
                      required: 'This field is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters',
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-600">{errors.password.message}</p>
                  )}
                </label>
                <label className="block mb-5">
                  <p className="mb-2 text-gray-900 font-semibold leading-normal">
                    Confirm Password *
                  </p>
                  <input
                    className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                    type="password"
                    placeholder="******"
                    {...register('confirmPassword', {
                      required: 'Confirm Password is required',
                      validate: (value) => {
                        const password = watch('password'); // Ensure watch is called inside validate
                        return value === password || 'Passwords do not match';
                      },
                    })}

                  />
                  {errors.confirmPassword && (
                    <p className="text-red-600">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </label> */}
                {/* Additional Fields for Shop */}

                <>
                  <label className="block mb-4">
                    <p className="mb-2 text-gray-900 font-semibold leading-normal">
                      Location *
                    </p>
                    <input
                      className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                      type="text"
                      placeholder="Enter Shop Location"
                      {...register('location')}
                    />
                    {errors.location && (
                      <p className="text-red-600">This field is required</p>
                    )}
                  </label>


                  {/* position Fi */}
                  <label className="block mb-4">
                    <p className="mb-2 text-gray-900 font-semibold leading-normal">
                      Position
                    </p>

                    <input
                      className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                      type="text"
                      {...register('latitude')}
                      placeholder="latitude" />
                    <input
                      className="px-4 mt-2 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                      type="text"
                      {...register('longitude')}
                      placeholder="Longitude" />
                    {errors.location && (
                      <p className="text-red-600">This field is required</p>
                    )}
                  </label>
                  <label className="block mb-4">
                    <p className="mb-2 text-gray-900 font-semibold leading-normal">
                      Your Shop Name
                    </p>
                    <input
                      className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                      type="text"
                      placeholder="Enter Shop Name"
                      {...register('location')}
                    />
                    {errors.location && (
                      <p className="text-red-600">This field is required</p>
                    )}
                  </label>
                  <label className="block mb-4">
                    <p className="mb-2 text-gray-900 font-semibold leading-normal">
                      Services Provided *
                    </p>
                    <select
                      className="px-4 py-3.5 w-full text-gray-400 font-medium bg-white border border-gray-300 rounded-lg outline-none focus:ring focus:ring-indigo-300"
                      {...register('services', { required: 'Please select at least one service' })}

                    >
                      <option value="spa">Spa</option>
                      <option value="salon">Salon</option>
                      <option value="massage">Massage</option>
                    </select>

                    {errors.services && (
                      <p className="mt-2 text-sm text-red-600">{errors.services.message}</p>
                    )}
                  </label>
                  <label className="block mb-6">
                    <p className="mb-2 text-gray-900 font-semibold leading-normal">
                      Upload Shop Image *
                    </p>
                    <div className="relative">
                      <input
                        id="shopImage"
                        type="file"
                        className="sr-only"
                        {...register('shopImage')}

                        required
                        multiple
                      />
                      <label
                        htmlFor="shopImage"
                        className="flex items-center justify-center px-4 py-3.5 w-full text-gray-400 font-medium bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200 ease-in-out"
                      >
                        <svg
                          className="w-5 h-5 mr-2 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 16l4-4a3 3 0 014 0l4 4m4 0l-4-4a3 3 0 00-4 0l-4 4M21 12h-2m-4 0H3"
                          />
                        </svg>
                        Select an Image
                      </label>
                    </div>
                    {errors.shopImage && (
                      <p className="mt-2 text-sm text-red-600">This field is required</p>
                    )}
                  </label>
                </>

                {/* Terms, Sign Up Button and Link to Login */}
                {/* ....... */}
                <div className="flex flex-wrap justify-between mb-4">
                  <div className="w-full">
                    <div className="flex items-center">
                      <input
                        className="w-4 h-4"
                        id="default-checkbox"
                        type="checkbox"
                        {...register('terms', { required: true })}
                      />
                      <label
                        className="ml-2 text-sm text-gray-900 font-medium"
                        htmlFor="default-checkbox"
                      >
                        <span>By signing up, I agree to the</span>
                        <Link to="/terms" className="text-indigo-600">
                          Terms and Conditions
                        </Link>
                        <span> of SpaAjman</span>
                      </label>
                    </div>
                  </div>
                </div>
                {errors.terms && (
                  <p className="text-red-600 ml-2">
                    You must agree to the terms
                  </p>
                )}
                <button
                  className="mb-8 py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                  type="submit"
                >
                  Sign Up
                </button>
                <p className="text-center">
                  Already Have an Account?{' '}
                  <Link to="/login" className="text-indigo-600">
                    Log In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopRegister;
