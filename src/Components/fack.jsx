import toast from "react-hot-toast";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { imageUpload } from '../Utility';
import useAxiosPublic from "../Hooks/useAxiosPublic";

const UserProfile = () => {
  const axiosCommon = useAxiosPublic()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };


  const onSubmit = async (data) => {
    try {
      // Uploading images and getting the URLs
      const uploadedImageUrls = await Promise.all(
        selectedFiles.map((file) => imageUpload(file))
      );

      // Merging the uploaded image URLs into the form data
      const updatedData = { ...data, images: uploadedImageUrls };
      console.log(updatedData);
      return;
      // Posting data to the server
      await axiosCommon.post('/jobs', updatedData);
      toast.success('Job Post successfully!');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="bg-[#F7F8F9] py-4 pt-24">
        <div className="container px-4 mx-auto">
          <div className="p-6 h-full border border-coolGray-100 overflow-hidden bg-white rounded-md shadow-dashboard">
            <div className="pb-6 border-b border-coolGray-100">
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-full md:w-auto p-2">
                  <h2 className="text-coolGray-900 text-lg font-semibold">
                    Personal info
                  </h2>
                  <p className="text-xs text-coolGray-500 font-medium">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
                <div className="w-full md:w-auto p-2">
                  <div className="flex flex-wrap justify-between -m-1.5">
                    <div className="w-full md:w-auto p-1.5">
                      <button
                        type="button"
                        className="flex flex-wrap justify-center w-full px-4 py-2 font-medium text-sm text-coolGray-500 hover:text-coolGray-600 border border-coolGray-200 hover:border-coolGray-300 bg-white rounded-md shadow-button"
                      >
                        <p>Cancel</p>
                      </button>
                    </div>
                    <div className="w-full md:w-auto p-1.5">
                      <button

                        className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
                      >
                        <span
                          className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"
                        ></span>
                        <span
                          className="relative group-hover:text-white"
                        >
                          Save
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* Job Title */}
            <div className="py-6 border-b border-coolGray-100">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-sm text-coolGray-800 font-semibold">
                      Job Title
                    </p>
                  </div>
                  <div className="w-full md:flex-1 p-3">
                    <input
                      {...register("title")}
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-600 border border-coolGray-200 rounded-lg shadow-input"
                      type="text"
                      placeholder="Your Job Title"
                    />
                    {errors.title && (
                      <p className="text-red-600 text-xs">
                        {errors.title.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/*Job description */}
            <div className="py-6 border-b border-coolGray-100">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-sm text-coolGray-800 font-semibold">
                      Job Description
                    </p>
                  </div>
                  <div className="w-full md:flex-1 p-3">
                    <input
                      {...register("description")}
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-600 border border-coolGray-200 rounded-lg shadow-input"
                      type="text"
                      placeholder="Your  Job Description"
                    />
                    {errors.description && (
                      <p className="text-red-600 text-xs">
                        {errors.description.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div className="py-6 border-b border-coolGray-100">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-sm text-coolGray-800 font-semibold">
                      Email address
                    </p>
                  </div>
                  <div className="w-full md:flex-1 p-3">
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Invalid email address",
                        },
                      })}
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-600 border border-coolGray-200 rounded-lg shadow-input"
                      type="text"
                      placeholder="johndoe@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-xs">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* City Field */}
            <div className="py-6 border-b border-coolGray-100">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-sm text-coolGray-800 font-semibold">
                      Your Living City
                    </p>
                  </div>
                  <div className="w-full md:flex-1 p-3">
                    <input
                      {...register("city")}
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-600 border border-coolGray-200 rounded-lg shadow-input"
                      type="text"
                      placeholder="Your living city"
                    />
                    {errors.city && (
                      <p className="text-red-600 text-xs">
                        {errors.city.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Number Field */}
            <div className="py-6 border-b border-coolGray-100">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-sm text-coolGray-800 font-semibold">
                      Your WhatsApp Number
                    </p>
                  </div>
                  <div className="w-full md:flex-1 p-3">
                    <input
                      {...register("whatsappNumber")}
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-600 border border-coolGray-200 rounded-lg shadow-input"
                      type="text"
                      placeholder="Your WhatsApp number"
                    />
                    {errors.whatsappNumber && (
                      <p className="text-red-600 text-xs">
                        {errors.whatsappNumber.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* Your  Responsibilities */}
            <div className="py-6 border-b border-coolGray-100">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-sm text-coolGray-800 font-semibold">
                      Your  Responsibilities
                    </p>
                  </div>
                  <div className="w-full md:flex-1 p-3">
                    <textarea
                      {...register("responsibilities")}
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-600 border border-coolGray-200 rounded-lg shadow-input"
                      type="text"
                      placeholder="Your Company Responsibilities"
                    />

                  </div>
                </div>
              </div>
            </div>
            {/* Your  Benefits */}
            <div className="py-6 border-b border-coolGray-100">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-sm text-coolGray-800 font-semibold">
                      Your  Benefits
                    </p>
                  </div>
                  <div className="w-full md:flex-1 p-3">
                    <textarea
                      {...register("benefits")}
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-600 border border-coolGray-200 rounded-lg shadow-input"
                      type="text"
                      placeholder="Your Company Benefits"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*  Your   Requirements */}
            <div className="py-6 border-b border-coolGray-100">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-sm text-coolGray-800 font-semibold">
                      Your   Requirements
                    </p>
                  </div>
                  <div className="w-full md:flex-1 p-3">
                    <textarea
                      {...register("requirements")}
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-600 border border-coolGray-200 rounded-lg shadow-input"
                      type="text"
                      placeholder="Your Company  Requirements"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*   Country */}
            <div className="py-6 border-b border-coolGray-100">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-sm text-coolGray-800 font-semibold">
                      Country
                    </p>
                  </div>
                  <div className="w-full md:flex-1 p-3">
                    <div className="relative">
                      <svg
                        className="absolute right-4 top-1/2 transform -translate-y-1/2"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="..." fill="#8896AB" />
                      </svg>
                      <select
                        {...register("selected")}
                        className="appearance-none w-full py-2.5 px-4 text-coolGray-900 text-base font-normal bg-white border outline-none border-coolGray-200 hover:border-indigo-600 rounded-lg shadow-input"
                      >
                        <option>UAE</option>
                        <option>Poland</option>
                        <option>France</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Photo Upload */}
            <div className="py-6 border-b border-coolGray-100">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-sm text-coolGray-800 font-semibold">Photo</p>
                    <p className="text-xs text-coolGray-500 font-medium">
                      Lorem ipsum dolor sit amet
                    </p>
                  </div>

                  <div className="w-full md:flex-1 p-3">
                    <div className="relative flex flex-col items-center justify-center p-6 h-44 text-center text-indigo-600 focus-within:border-indigo-600 border border-dashed border-coolGray-200 rounded-lg">
                      <svg
                        className="mb-1.5"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="..."
                          fill="currentColor"
                        />
                      </svg>
                      <p className="mb-1 text-sm text-coolGray-800 font-medium">
                        <span className="text-indigo-600">Click to Upload a file</span> or drag and drop
                      </p>
                      <p className="text-xs text-coolGray-500 font-medium">
                        PNG, JPG, GIF or up to 10MB
                      </p>
                      <input
                        {...register("image")}
                        multiple
                        className="absolute top-0 left-0 w-full h-full opacity-0"
                        type="file"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                  <div className="md:w-2/6 w-full p-3 grid grid-cols-3 gap-1">
                    {selectedFiles.map((file, index) => (
                      <img
                        key={index}
                        src={URL.createObjectURL(file)}
                        alt={`selected-${index}`}
                        className="w-12 h-12 object-cover rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* ROLE */}
            <div className="py-6 border-b border-coolGray-100">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-sm text-coolGray-800 font-semibold">
                      Role
                    </p>
                  </div>
                  <div className="w-full md:flex-1 p-3">
                    <select
                      {...register("role")}
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-600 border border-coolGray-200 rounded-lg shadow-input"
                    >
                      <option value="">Select a role</option>
                      <option value="salon">Salon</option>
                      <option value="spa">Spa</option>
                      <option value="massage">Massage</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* UAE NUMBER */}
            <div className="py-6 border-b border-coolGray-100">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-sm text-coolGray-800 font-semibold">
                      {" "}
                      Your UAE Number{" "}
                    </p>
                  </div>
                  <div className="w-full md:flex-1 p-3">
                    <input
                      {...register("UAENumber")}
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-600 border border-coolGray-200 rounded-lg shadow-input"
                      type="text"
                      placeholder=" your UAE Number"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default UserProfile;
