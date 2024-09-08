import { FaTrashAlt, FaUsers } from "react-icons/fa";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Swal from 'sweetalert2'

const DeshboardCard = () => {
    const axiosSecure = useAxiosPrivate();
    const { data: users = [], refetch } = useQuery({
        queryKey: 'users',
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    });

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    toast.success(`${user.name} is now an admin`)
                }
            })
    }


    const handleDeleteUser = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    };


    return (
        <div>
            <div className="p-8  bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold">Total Customers</h3>
                        <p className="text-2xl mt-2">{users.length}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold">Members</h3>
                        <p className="text-2xl mt-2">1,893</p>
                        <p className="text-gray-500">+200 this month</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold">Active Now</h3>
                        <p className="text-2xl mt-2">189</p>
                        <p className="text-gray-500">+15 this month</p>
                    </div>
                </div>
            </div>
            <div className="bg-white lg:w-auto p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">All Customers</h3>
                <div className="">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-gray-600">
                                    <th className="py-2 pr-10 lg:pr-0 text-left">#</th>
                                    <th className="py-2 pr-10 lg:pr-0 text-left">Customer Name</th>
                                    <th className="py-2 pr-10 lg:pr-0 text-left">Email</th>
                                    <th className="py-2 pr-10 lg:pr-0 text-left">Role</th>
                                    <th className="py-2 pr-10 lg:pr-0 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users?.map((user, index) => (
                                    <tr key={user._id} className="border-t text-gray-800">
                                        <td className="py-2 pr-10 lg:pr-0">{index + 1}</td>
                                        <td className="py-2 pr-10 lg:pr-0">{user.name}</td>
                                        <td className="py-2 pr-10 lg:pr-0">{user.email}</td>
                                        <td>
                                            {user.role === 'admin' ? "Admin" : <button
                                                onClick={() => handleMakeAdmin(user)}
                                                className="btn bg-orange-500 btn-lg">
                                                <FaUsers className="text-white text-2xl"></FaUsers>
                                            </button>}
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => handleDeleteUser(user)}
                                                className="btn btn-ghost btn-lg">
                                                <FaTrashAlt className="text-red-500"></FaTrashAlt>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeshboardCard;