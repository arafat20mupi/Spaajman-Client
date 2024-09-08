import { Link, Outlet } from 'react-router-dom';
import { useContext, useState } from 'react';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../Loading/Loading';
import useShopAdmin from '../../Hooks/useShopAdmin';
import { AuthContext } from '../../Provider/AuthProvider';

const Dashboard = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isShop, isLoading] = useShopAdmin();
  const [menuOpen, setMenuOpen] = useState(false);
  const { logOut } = useContext(AuthContext);

  if (isAdminLoading || isLoading) return <Loading />;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='flex flex-col min-h-screen md:flex-row gap-5 p-4 '>
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className='block md:hidden bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300'
      >
        {menuOpen ? 'Close Menu' : 'Open Menu'}
      </button>

      {/* Sidebar Menu */}
      <div className={`bg-white w-full md:w-[20%] mt-3 shadow-sm rounded-md h-auto md:h-full flex flex-col transition-all duration-300 ${menuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'} md:max-h-full`}>
        <h1 className="text-xl md:text-2xl my-4 font-bold text-center md:text-left">Dashboard</h1>
        <ul className="flex flex-col items-center md:items-start space-y-4">
          {isAdmin ? (
            <>
              <li>
                <Link to="/dashboard/profile">
                  <button className="bg-indigo-600 text-white px-4 py-2 w-full text-left rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 flex items-center">
                    Profile
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/Customer">
                  <button className="bg-indigo-600 text-white px-4 py-2 w-full text-left rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 flex items-center">
                    All Users
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/all-shop">
                  <button className="bg-indigo-600 text-white px-4 py-2 w-full text-left rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 flex items-center">
                    All Shop
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/shop-request-admin">
                  <button className="bg-indigo-600 text-white px-4 py-2 w-full text-left rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 flex items-center">
                    Shop Application
                  </button>
                </Link>
              </li>
              <hr className='border border-2 border-gray-600 w-full' />
              <li>
                <Link to="/">
                  <button className="bg-indigo-600 text-white px-4 py-2 w-full text-left rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 flex items-center">
                    Home
                  </button>
                </Link>
              </li>
              <li>
                <button onClick={() => logOut()} className="bg-indigo-600 text-white px-4 py-2 w-full text-left rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 flex items-center">
                  Logout
                </button>
              </li>
            </>
          ) : isShop ? (
            <>
              <li>
                <Link to="/dashboard/profile">
                  <button className="bg-indigo-600 text-white px-4 py-2 w-full text-left rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 flex items-center">
                    Profile
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/post-job">
                  <button className="bg-indigo-600 text-white px-4 py-2 w-full text-left rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 flex items-center">
                    Post Job
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/post-job">
                  <button className="bg-indigo-600 text-white px-4 py-2 w-full text-left rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 flex items-center">
                    Job application
                  </button>
                </Link>
              </li>
              <hr className='border border-2 border-gray-600 w-full' />
              <li>
                <Link to="/">
                  <button className="bg-indigo-600 text-white px-4 py-2 w-full text-left rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 flex items-center">
                    Home
                  </button>
                </Link>
              </li>
              <li>
                <button onClick={() => logOut()} className="bg-indigo-600 text-white px-4 py-2 w-full text-left rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 flex items-center">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard/profile">
                  <button className="bg-indigo-600 text-white px-4 py-2 w-full text-left rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 flex items-center">
                    Profile
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/registerShop">
                  <button className="bg-indigo-600 text-white px-4 py-2 w-full text-left rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 flex items-center">
                    Request Shop
                  </button>
                </Link>
              </li>
              <hr className='border border-2 border-gray-600 w-full' />
              <li>
                <Link to="/">
                  <button className="bg-indigo-600 text-white px-4 py-2 w-full text-left rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 flex items-center">
                    Home
                  </button>
                </Link>
              </li>
              <li>
                <button onClick={() => logOut()} className="bg-indigo-600 text-white px-4 py-2 w-full text-left rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 flex items-center">
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Main Content */}
      <div className='w-full md:w-[80%] mt-4 md:mt-0'>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
