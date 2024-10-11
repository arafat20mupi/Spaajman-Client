import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { imageUpload } from "../Utility/multiImg";

const UpdateUser = () => {
    const axiosCommon = useAxiosPublic();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [submitting, setSubmitting] = useState(false); 

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axiosCommon.get('/users');
                setUserData(response.data);
                reset(response.data); 
            } catch (err) {
                setError(err);
                console.error('Error fetching user data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [axiosCommon, reset]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching user data: {error.message}</p>;

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setSelectedFiles(files);
    };

    const onSubmit = async (data) => {
        setSubmitting(true); 
        try {
            let imageUrl = '';
            if (selectedFiles.length > 0) {
                const uploadedImage = await imageUpload(selectedFiles);
                imageUrl = uploadedImage; 
            }

            const userUpdateData = {
                ...data,
                profileImage: imageUrl || userData.profileImage, 
            };

            await axiosCommon.put('/users', userUpdateData);
            toast.success("User updated successfully");
        } catch (err) {
            toast.error("Failed to update user");
            console.error(err);
        } finally {
            setSubmitting(false); 
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
                                        Update Personal Info
                                    </h2>
                                    <p className="text-xs text-coolGray-500 font-medium">
                                        Update your personal information below.
                                    </p>
                                </div>
                                <div className="w-full md:w-auto p-2">
                                    <button
                                        type="submit"
                                        className={`px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block ${submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        disabled={submitting} 
                                    >
                                        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                                        <span className="relative group-hover:text-white">
                                            {submitting ? 'Updating...' : 'Update'}
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Name Field */}
                        <div className="py-6 border-b border-coolGray-100">
                            <div className="w-full md:w-9/12">
                                <div className="flex flex-wrap -m-3">
                                    <div className="w-full md:w-1/3 p-3">
                                        <label className="text-sm text-coolGray-800 font-semibold" htmlFor="name">Your Name</label>
                                    </div>
                                    <div className="w-full md:flex-1 p-3">
                                        <input
                                            id="name"
                                            {...register("name")} 
                                            defaultValue={userData?.name || ''}
                                            className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-600 border border-coolGray-200 rounded-lg shadow-input"
                                            type="text"
                                            placeholder="Your Name"
                                        />
                                        {errors.name && (
                                            <p className="text-red-600 text-xs">
                                                {errors.name.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Living City Field */}
                        <div className="py-6 border-b border-coolGray-100">
                            <div className="w-full md:w-9/12">
                                <div className="flex flex-wrap -m-3">
                                    <div className="w-full md:w-1/3 p-3">
                                        <label className="text-sm text-coolGray-800 font-semibold" htmlFor="city">Your Living City</label>
                                    </div>
                                    <div className="w-full md:flex-1 p-3">
                                        <input
                                            id="city"
                                            {...register("city")} 
                                            className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-600 border border-coolGray-200 rounded-lg shadow-input"
                                            type="text"
                                            placeholder="Your Living City"
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
                                        <label className="text-sm text-coolGray-800 font-semibold" htmlFor="whatsapp">WhatsApp Number</label>
                                    </div>
                                    <div className="w-full md:flex-1 p-3">
                                        <input
                                            id="whatsapp"
                                            {...register("whatsapp")} 
                                            className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-600 border border-coolGray-200 rounded-lg shadow-input"
                                            type="text"
                                            placeholder="Your WhatsApp Number"
                                        />
                                        {errors.whatsapp && (
                                            <p className="text-red-600 text-xs">
                                                {errors.whatsapp.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Your Skills Field */}
                        <div className="py-6 border-b border-coolGray-100">
                            <div className="w-full md:w-9/12">
                                <div className="flex flex-wrap -m-3">
                                    <div className="w-full md:w-1/3 p-3">
                                        <label className="text-sm text-coolGray-800 font-semibold" htmlFor="skills">Your Skills</label>
                                    </div>
                                    <div className="w-full md:flex-1 p-3">
                                        <textarea
                                            id="skills"
                                            {...register("skills")}
                                            className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-600 border border-coolGray-200 rounded-lg shadow-input"
                                            placeholder="Your Skills"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Your About Field */}
                        <div className="py-6 border-b border-coolGray-100">
                            <div className="w-full md:w-9/12">
                                <div className="flex flex-wrap -m-3">
                                    <div className="w-full md:w-1/3 p-3">
                                        <label className="text-sm text-coolGray-800 font-semibold" htmlFor="about">About You</label>
                                    </div>
                                    <div className="w-full md:flex-1 p-3">
                                        <textarea
                                            id="about"
                                            {...register("about")}
                                            className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-600 border border-coolGray-200 rounded-lg shadow-input"
                                            placeholder="About You"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Profile Picture Field */}
                        <div className="py-6 border-b border-coolGray-100">
                            <div className="w-full md:w-9/12">
                                <div className="flex flex-wrap -m-3">
                                    <div className="w-full md:w-1/3 p-3">
                                        <label className="text-sm text-coolGray-800 font-semibold" htmlFor="profile">Profile Picture</label>
                                    </div>
                                    <div className="w-full md:flex-1 p-3">
                                        <input
                                            id="profile"
                                            type="file"
                                            onChange={handleFileChange}
                                            className="w-full border border-coolGray-300 rounded-lg p-2"
                                            accept="image/*"
                                            multiple // Allow multiple files
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

export default UpdateUser;
