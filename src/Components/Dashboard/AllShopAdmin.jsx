import Swal from "sweetalert2";
import useShop from "../../Hooks/useShop";
import Loading from "../Loading/Loading";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";

const AllShopAdmin = () => {
    const [allShop, loading, refetch] = useShop();
    const useAxiosSecure= useAxiosPrivate();

    if (loading) return <Loading />
    const shopData = allShop.filter(shop => shop.status === 'approved');

    const handleDeleteShop = (shop) => {
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
                useAxiosSecure.delete(`/shop/${shop._id}`)
                    .then(res => {
                        if (res.data.deleteCount > 0) {
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

        <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 bg-white shadow-lg">
                {/* Table Header */}
                <thead>
                    <tr className="h-[70px] border-b bg-[#141B29] text-[#FFFFFF]">
                        <th className="px-6 py-4 text-start">Image</th>
                        <th className="px-6 py-4 text-start">Name</th>
                        <th className="px-6 py-4 text-start">Email</th>
                        <th className="px-6 py-4 text-start">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        shopData?.map(shop => <tr key={shop._id} className="h-[70px] border-b bg-[#484D58] text-[#FFFFFF]">
                            <th className="px-6 py-4 text-start">
                                <img className="h-[44px] w-[44px] rounded-full bg-slate-500 object-cover" src={shop.img} />
                            </th>
                            <th className="px-6 py-4 text-start ">{shop.name}</th>
                            <th className="px-6 py-4 text-start ">{shop.email}</th>
                            <th className="px-6 py-4 text-start">
                                <button onClick={() => handleDeleteShop(shop)} className="flex items-center rounded-full bg-red-500 px-4 py-2 font-bold text-white shadow-md transition-all duration-300 hover:bg-red-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-2 h-6 w-6">  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> </svg>
                                    Delete
                                </button>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default AllShopAdmin;