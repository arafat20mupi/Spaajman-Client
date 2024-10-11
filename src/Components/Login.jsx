import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import gradienBg from "../assets/g.jpeg";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { AiOutlineMail, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Import icons

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    signIn(email, password)
      .then(() => {
        toast.success('Login Successful');
        navigate('/');
      })
      .catch(() => {
        toast.error('Login failed');
      });
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
                  Email Address *
                </p>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <AiOutlineMail className="w-5 h-5 text-gray-500 mx-2" />
                  <input
                    className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none"
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
                </div>
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                )}
              </label>

              <label className="block mb-5">
                <p className="mb-2 text-gray-900 font-semibold leading-normal">
                  Password *
                </p>
                <div className="relative">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <input
                      className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none"
                      id="signUpInput1-3"
                      type={showPassword ? "text" : "password"}
                      placeholder="******"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters long",
                        },
                      })}
                    />
                    <button
                      type="button"
                      className="text-gray-500 focus:outline-none"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <AiOutlineEyeInvisible className="w-5 h-5 mx-2" /> : <AiOutlineEye className="w-5 h-5 mx-2" />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
                  )}
                </div>
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
