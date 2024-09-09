import { useContext, useState } from "react";
import useJobs from "../../Hooks/useJobs";
import { AuthContext } from "../../Provider/AuthProvider";
import NoItem from "../NoItem";
import toast from "react-hot-toast";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";

const PostedJob = () => {
    const [jobs, loading, setJobs] = useJobs();
    const { user } = useContext(AuthContext);
    const [isUpdating, setIsUpdating] = useState(false);
    const [editingJob, setEditingJob] = useState(null);
    const useAxiosSecure = useAxiosPrivate();

    if (loading) {
        return <Loading></Loading>
    }

    const postedJobs = jobs.filter(job => job.email === user?.email);

    const handleDeleteJob = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await useAxiosSecure.delete(`/jobs/${id}`);
                    setJobs(jobs.filter(job => job._id !== id));
                    toast.success("Job deleted successfully");
                    Swal.fire({
                        title: "Deleted!",
                        text: "The job has been deleted.",
                        icon: "success"
                    });
                } catch (error) {
                    console.error("Error deleting job:", error);
                    toast.error("Failed to delete job. Please try again.");
                }
            }
        });
    };


    const handleUpdateJob = (job) => {
        setIsUpdating(true);
        setEditingJob(job);
    };

    const handleSubmitUpdate = async (e) => {
        e.preventDefault();
        const { _id, ...updatedJob } = editingJob;

        if (!updatedJob.title || !updatedJob.description) {
            toast.error("Title and Description are required.");
            return;
        }

        try {
            await useAxiosSecure.put(`/jobs/${_id}`, updatedJob);
            const updatedJobs = jobs.map(job => job._id === _id ? { ...job, ...updatedJob } : job);
            setJobs(updatedJobs);
            setIsUpdating(false);
            toast.success("Job updated successfully");
        } catch (error) {
            console.error("Error updating job:", error);
            toast.error("Failed to update job. Please try again.");
        }
    };


    return (
        <div className="container mx-auto p-4">
            {isUpdating && editingJob ? (
                <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Update Job</h2>
                    <form onSubmit={handleSubmitUpdate}>
                        <input
                            type="text"
                            value={editingJob?.title || ""}
                            onChange={(e) => setEditingJob({ ...editingJob, title: e.target.value })}
                            className="block w-full mb-4 p-2 border border-gray-300 rounded"
                            placeholder="Job Title"
                        />
                        <textarea
                            value={editingJob?.description || ""}
                            onChange={(e) => setEditingJob({ ...editingJob, description: e.target.value })}
                            className="block w-full mb-4 p-2 border border-gray-300 rounded"
                            placeholder="Job Description"
                        />
                        <input
                            type="text"
                            value={editingJob?.city || ""}
                            onChange={(e) => setEditingJob({ ...editingJob, city: e.target.value })}
                            className="block w-full mb-4 p-2 border border-gray-300 rounded"
                            placeholder="City"
                        />
                        <input
                            type="text"
                            value={editingJob?.whatsapp || ""}
                            onChange={(e) => setEditingJob({ ...editingJob, whatsapp: e.target.value })}
                            className="block w-full mb-4 p-2 border border-gray-300 rounded"
                            placeholder="WhatsApp"
                        />
                        <input
                            type="text"
                            value={editingJob?.UAENumber || ""}
                            onChange={(e) => setEditingJob({ ...editingJob, UAENumber: e.target.value })}
                            className="block w-full mb-4 p-2 border border-gray-300 rounded"
                            placeholder="UAE Number"
                        />
                        <textarea
                            value={editingJob?.responsibilities || ""}
                            onChange={(e) => setEditingJob({ ...editingJob, responsibilities: e.target.value })}
                            className="block w-full mb-4 p-2 border border-gray-300 rounded"
                            placeholder="Responsibilities"
                        />
                        <textarea
                            value={editingJob?.benefits || ""}
                            onChange={(e) => setEditingJob({ ...editingJob, benefits: e.target.value })}
                            className="block w-full mb-4 p-2 border border-gray-300 rounded"
                            placeholder="Benefits"
                        />
                        <textarea
                            value={editingJob?.requirements || ""}
                            onChange={(e) => setEditingJob({ ...editingJob, requirements: e.target.value })}
                            className="block w-full mb-4 p-2 border border-gray-300 rounded"
                            placeholder="Requirements"
                        />
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                            Submit Update
                        </button>
                        <button onClick={() => setIsUpdating(false)} className="bg-gray-500 text-white px-4 py-2 rounded ml-2">
                            Cancel
                        </button>
                    </form>
                </div>
            ) : (
                <>
                    {postedJobs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {postedJobs.map(job => (
                                <div
                                    key={job._id}
                                    className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-8 p-6 border border-gray-200 transform transition hover:-translate-y-1 hover:shadow-2xl"
                                >
                                    <img
                                        className="w-full h-56 object-cover rounded-xl"
                                        src={job.images?.[0] || "https://i.ibb.co/SXfF8yH/7.jpg"}
                                        alt="Job"
                                    />
                                    <div className="p-4 space-y-4">
                                        <h3 className="text-2xl font-semibold text-purple-800">{job.title}</h3>
                                        <p className="text-gray-600">{job.description}</p>
                                        <div className="mt-4">
                                            <div className="flex justify-between">
                                                <p><strong className="text-purple-700">Email:</strong> {job.email}</p>
                                                <p><strong className="text-purple-700">City:</strong> {job.city}</p>
                                            </div>
                                            <div className="flex justify-between">
                                                <p><strong className="text-purple-700">WhatsApp:</strong> {job.whatsapp}</p>
                                                <p><strong className="text-purple-700">Country:</strong> {job.selected}</p>
                                            </div>
                                            <div className="flex justify-between">
                                                <p><strong className="text-purple-700">Location:</strong> {job.location}</p>
                                                <p><strong className="text-purple-700">Role:</strong> {job.tags?.join(', ')}</p>
                                            </div>
                                            <div className="flex justify-between">
                                                <p><strong className="text-purple-700">UAE Number:</strong> {job.UAENumber}</p>
                                            </div>
                                            <div className="mt-4">
                                                <p><strong className="text-purple-700">Responsibilities:</strong> {job.responsibilities}</p>
                                                <p><strong className="text-purple-700">Benefits:</strong> {job.benefits}</p>
                                                <p><strong className="text-purple-700">Requirements:</strong> {job.requirements}</p>
                                            </div>
                                        </div>
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => handleUpdateJob(job)}
                                               className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            >
                                                Update
                                            </button>
                                            <button
                                                onClick={() => handleDeleteJob(job._id)}
                                                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <NoItem text="No posted jobs available" />
                    )}
                </>
            )}
        </div>
    );
};

export default PostedJob;
