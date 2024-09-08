import useShop from "../../Hooks/useShop";
import Loading from "../Loading/Loading";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import toast from "react-hot-toast";
import NoItem from "../NoItem";

const ShopRequestAdmin = () => {
    const [allShop, loading, refetch] = useShop();
    const axiosSecure = useAxiosPrivate();

    if (loading) return <Loading />

    const handleApprove = async (id) => {
        const res = await axiosSecure.patch(`/shop/approved/${id}`);
        if (res.data.modifiedCount > 0) {
            toast.success('Your request has been approved');
            refetch();
        }
    };

    const pendingShops = allShop?.filter(data => data.status === "pending");

    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            {
                pendingShops && pendingShops.length > 0 ? (
                    pendingShops.map(shop => (
                        <div key={shop._id} className="w-full max-w-[340px] space-y-3 rounded-xl bg-white p-4 shadow-lg">
                            <div className="relative flex h-48 w-full justify-center lg:h-[260px]">
                                <img width={400} height={400} className="rounded-lg bg-black/40 object-cover" src={shop.img} alt="shop image" />
                            </div>
                            <div className="space-y-2 font-semibold">
                                <h6 className="text-sm md:text-base lg:text-lg">Location : {shop.location}</h6>
                                <p className="text-xs font-semibold text-gray-400 md:text-sm">Email : {shop.email}</p>
                                <p>Shop Name : {shop.name}</p>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 text-sm md:text-base">
                                <span className="text-gray-600">Status :</span>
                                <button onClick={() => handleApprove(shop._id)} className="rounded-lg bg-gray-400 px-4 py-2 font-semibold text-white duration-300 hover:scale-95 hover:bg-gray-600">{shop.status}</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-1 md:col-span-2 text-center p-4">
                        <NoItem />
                    </div>
                )
            }
        </div>
    );
};

export default ShopRequestAdmin;
