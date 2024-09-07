import { useForm } from 'react-hook-form';
import gradienBg from '../assets/g.jpeg';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import toast from 'react-hot-toast';

const Register = () => {
  const { createUser, updateprofile } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
    const { name, email, password, photo } = data;

    
    if (password.length < 6) {
      toast.error('Password should contain at least six letters!');
      return;
    }
    
    // Create user and update profile
    createUser(email, password)
      .then(() => {
        updateprofile(name, photo)
          .then(() => {
            const userInfo = { name, email,password };
            axiosPublic.post('/users', userInfo)
              .then(res => {
                if (res.data.insertedId) {
                  toast.success('Registered successfully!');
                  // Navigate to the home page or previous location
                  navigate('/');
                } else {
                  toast.error('Registration failed, email might already exist!');
                  reset();
                }
              })
              .catch(() => {
                toast.error('Error occurred while registering.');
              });
          })
          .catch(() => {
            toast.error('Error updating profile.');
          });
      })
      .catch(() => {
        toast.error('Error creating user.');
      });
  };

  return (
    <>
      <section className="relative bg-white overflow-hidden">
        <img className="absolute left-0 bottom-0" src={gradienBg} alt="" />
        <div className="relative z-10 flex flex-wrap -m-8">
          <div className="w-full md:w-1/2 p-8">
            {/* Left side content */}
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap">
                <div className="w-full">
                  <div className="md:max-w-lg mx-auto pt-16 md:pb-32">
                    <h2 className="mb-32 text-6xl md:text-7xl font-bold font-heading">
                      Create an account &amp; get started.
                    </h2>
                    <h3 className="mb-9 text-xl font-bold font-heading">
                      Why should you join us?
                    </h3>
                    <ul className="md:max-w-xs">
                      <li className="mb-5 flex flex-wrap">
                        <span className="flex-1 font-medium">
                          Amazing features to help you grow
                        </span>
                      </li>
                      <li className="mb-5 flex flex-wrap">
                        <span className="flex-1 font-medium">
                          24/7 Support from our dedicated team
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="w-full md:w-1/2 p-8 mt-16">
            <div className="p-4 py-16 flex flex-col justify-center bg-[#F1F5F9] h-full">
              <form className="md:max-w-lg mx-auto" onSubmit={handleSubmit(onSubmit)}>
                {/* Name */}
                <label className="block mb-4">
                  <p className="mb-2 text-gray-900 font-semibold">Your Name</p>
                  <input
                    className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg"
                    type="text"
                    placeholder="Your name"
                    {...register('name', { required: true, minLength: 2 })}
                  />
                  {errors.name && (
                    <p className="text-red-600">
                      {errors.name.type === 'required' ? 'This field is required' : 'Name must be at least 2 characters'}
                    </p>
                  )}
                </label>

                {/* Email */}
                <label className="block mb-4">
                  <p className="mb-2 text-gray-900 font-semibold">Email Address *</p>
                  <input
                    className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg"
                    type="email"
                    placeholder="Enter email address"
                    {...register('email', {
                      required: 'This field is required',
                      pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: 'Please enter a valid email address',
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-600">{errors.email.message}</p>
                  )}
                </label>

                {/* Password */}
                <label className="block mb-5">
                  <p className="mb-2 text-gray-900 font-semibold">Password *</p>
                  <input
                    className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg"
                    type="password"
                    placeholder="******"
                    {...register('password', {
                      required: 'This field is required',
                      minLength: { value: 6, message: 'Password must be at least 6 characters' },
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-600">{errors.password.message}</p>
                  )}
                </label>

                {/* Confirm Password */}
                <label className="block mb-5">
                  <p className="mb-2 text-gray-900 font-semibold">Confirm Password *</p>
                  <input
                    className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg"
                    type="password"
                    placeholder="******"
                    {...register('confirmPassword', {
                      required: 'Confirm Password is required',
                      validate: (value) => value === watch('password') || 'Passwords do not match',
                    })}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-600">{errors.confirmPassword.message}</p>
                  )}
                </label>

                {/* Terms */}
                <div className="flex items-center mb-4">
                  <input
                    className="w-4 h-4"
                    id="terms"
                    type="checkbox"
                    {...register('terms', { required: true })}
                  />
                  <label className="ml-2 text-sm text-gray-900 font-medium" htmlFor="terms">
                    I agree to the <Link to="/terms" className="text-indigo-600">Terms and Conditions</Link>
                  </label>
                </div>
                {errors.terms && <p className="text-red-600">You must agree to the terms</p>}

                {/* Submit */}
                <button
                  className="mb-8 py-4 px-9 w-full text-white font-semibold bg-indigo-600 rounded-xl shadow-lg hover:bg-indigo-700 transition"
                  type="submit"
                >
                  Sign Up
                </button>

                {/* Redirect */}
                <p className="text-center">
                  Already Have an Account?{' '}
                  <Link to="/login" className="text-indigo-600">Log In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
