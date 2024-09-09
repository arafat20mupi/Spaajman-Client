
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="bg-white min-h-full flex flex-col items-center justify-center p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="flex items-center justify-center mb-6">
                <div className="relative group">
                    <img 
                        className="w-32 h-32 bg-gray-300 object-cover rounded-full border-4 border-white shadow-md" 
                        src={user?.photoURL || 'https://i.ibb.co/SXfF8yH/7.jpg'} 
                        alt="User Avatar"
                    />
                    <span className="w-4 h-4 bg-green-500 absolute rounded-full bottom-2 right-2 border-2 border-white"></span>
                    <span className="w-4 h-4 bg-green-500 absolute rounded-full bottom-2 right-2 animate-ping"></span>
                </div>
            </div>
            <div className="text-center grid gap-3 mt-5">
                <h1 className="text-2xl font-semibold text-gray-800">Name: {user?.displayName}</h1>
                <p className="text-md md:text-lg font-medium text-gray-600">Email Address: {user?.email}</p>
                {/* {profile.role && <div className="text-lg font-semibold">Role: {profile.role}</div>} */}
            </div>
        </div>
    );
};

export default Profile;
