import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import gradienBg from "../assets/g.jpeg";
import { useState } from 'react';

const Login = () => {
  const { register,
     handleSubmit,
      formState: { errors }
     } = useForm();


  const [labelText, setLabelText] = useState('Full Name *');
  const [placeholderText, setPlaceholderText] = useState('First & Last Name *');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === 'shop') {
      setPlaceholderText('Shops First & Last Name');
      setLabelText('Shop Name *');
    } else {
      setLabelText('Full Name *');
      setPlaceholderText('First & Last Name *');
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="relative bg-white overflow-hidden">
      <img className="absolute left-0 bottom-0" src={gradienBg} alt="" />
      <div className="relative z-10 flex flex-wrap -m-8">
        <div className="w-full md:w-1/2 p-8">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full">
                <div className="md:max-w-lg mx-auto pt-16 md:pb-32">
                  <h2 className="mb-32 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight">
                    Welcome Back & get started.
                  </h2>
                  <h3 className="mb-9 text-xl font-bold font-heading leading-normal">
                    Why should you join us?
                  </h3>
                  <ul className="md:max-w-xs">
                    <li className="mb-5 flex flex-wrap">
                      <span className="flex-1 font-medium leading-relaxed">
                        The best you can do in no time at all, amazing feature goes here
                      </span>
                    </li>
                    <li className="mb-5 flex flex-wrap">
                      <span className="flex-1 font-medium leading-relaxed">
                        24/7 Support of our dedicated, highly professional team
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8">
          <div className="p-4 py-16 flex flex-col justify-center bg-[#F1F5F9] h-full">
            <form className="md:max-w-lg mx-auto" onSubmit={handleSubmit(onSubmit)}>
              <label className="block mb-4">
                <p className="mb-2 text-gray-900 font-semibold leading-normal">
                  Login as
                </p>
                <select
                  className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                  id="signUpInput1-1"
                  placeholder="First & last name"
                  onChange={handleSelectChange}
                >
                  <option value="user">User</option>
                  <option value="shop">Shop</option>
                </select>
              </label>

              <label className="block mb-4">
                <p className="mb-2 text-gray-900 font-semibold leading-normal">
                  Email Address *
                </p>
                <input
                  className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                  id="signUpInput1-2"
                  type="text"
                  placeholder="Enter email address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                )}
              </label>

              <label className="block mb-5">
                <p className="mb-2 text-gray-900 font-semibold leading-normal">
                  Password *
                </p>
                <input
                  className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                  id="signUpInput1-3"
                  type="password"
                  placeholder="******"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
                )}
              </label>

              <div className="flex flex-wrap justify-between mb-4">
                <div className="w-full">
                  <div className="flex items-center">
                    <input
                      className="w-4 h-4"
                      id="default-checkbox"
                      type="checkbox"
                      defaultChecked={true}
                    />
                    <label
                      className="ml-2 text-sm text-gray-900 font-medium"
                      htmlFor="default-checkbox"
                    >
                      <span>By logging in, I agree to the terms and conditions</span>
                    </label>
                  </div>
                </div>
              </div>

              <button
                className="mb-8 py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                type="submit"
              >
                Login
              </button>
            </form>
            <p className="text-center">
              Don't have an account? <Link to="/register" className="text-indigo-600">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
