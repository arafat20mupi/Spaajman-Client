import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="bg-yellow-400 min-h-full flex flex-col items-center justify-center rounded-2xl shadow-2xl border-2">
            <div className="flex items-center flex-wrap justify-around" id="_ActiveAvatar_NavigateUI">
                <div className="relative group">
                    <img className="size-[130px] bg-slate-500 object-cover rounded-full" src={user?.photoURL} />
                    <span className="size-5 bg-green-500 absolute rounded-full bottom-5 right-0 border-[3px] border-white"></span>
                    <span className="size-5 bg-green-500 absolute rounded-full bottom-5 right-0 animate-ping"></span>
                </div>

            </div>
            <div className=" text-center grid gap-2 mt-5">
                <h1 className="text-xl md:text-2xl font-semibold ">Name : {user.displayName}</h1>
                <p className="text-sm md:text-xl font-medium">Email Address : {user.email}</p>
                {/* {profile.role && <div className="text-lg font-semibold">Role : {profile.role}</div>} */}
            </div>
        </div>
    );
};

export default Profile;