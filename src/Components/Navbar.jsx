import { useState, useContext } from 'react';
import { FaHome, FaImage, FaSuitcase, FaBlogger } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogOut = () => {
    logOut();
    toast.success('Successfully logged out!');
  };

  return (
    <nav className="p-4 bg-white shadow-md flex justify-between items-center fixed top-0 left-0 w-full z-[200]">
      <div className="text-2xl font-bold text-indigo-700">
        <h1>Spaajman</h1>
      </div>

      <div className="block md:hidden">
        <button
          onClick={toggleMenu}
          className="text-indigo-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {
            isMenuOpen ?

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#4438c9" fill="none">
                <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" strokeWidth="1.5"  strokeLinejoin="round" />
              </svg>
              :
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
          }
        </button>
      </div>

      <div
        className={`${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:translate-x-0 rounded-lg fixed top-16 right-0 w-4/5 bg-white md:static md:flex md:items-center md:w-auto transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mr-6 p-4 md:p-0 lg:mr-10">
          <Link to="/" >
            <li className="flex items-center text-gray-800 font-medium hover:text-indigo-600 cursor-pointer transition duration-300">
              <FaHome className="mr-2" />
              Home
            </li>
          </Link>
          <Link to="/gallery" >
            <li className="flex items-center text-gray-800 font-medium hover:text-indigo-600 cursor-pointer transition duration-300">
              <FaImage className="mr-2" />
              Photo
            </li>
          </Link>
          <Link to='/blog'>
            <li className="flex items-center text-gray-800 font-medium hover:text-indigo-600 cursor-pointer transition duration-300">
              <FaBlogger className="mr-2" />
              Blogs
            </li>
          </Link>
        </ul>

        <div className="flex flex-col md:flex-row gap-4 items-center p-4 md:p-0">
          <Link to="/job-search">
            <button className="bg-indigo-600 text-white px-5 py-2 w-25 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center text-center">
              <FaSuitcase className="mr-2" />
              Find a Job
            </button>
          </Link>    
          {
            user ? (
              <Link to="/dashboard/profile">
                <button className="bg-indigo-600 text-white px-5 py-2  rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center text-center">
                 Dashboard
                </button>
              </Link>
            ) : ''
          }
          {user ? (
            <button onClick={handleLogOut} className="border-2 border-indigo-600 text-indigo-600 px-5 py-2 w-32 rounded-lg shadow-lg hover:bg-indigo-50 transition duration-300 flex items-center justify-center text-center">
              Log out
            </button>
          ) : (
            <Link to="/register">
              <button className="border-2 border-indigo-600 text-indigo-600 px-5 py-2 w-25 rounded-lg shadow-lg hover:bg-indigo-50 transition duration-300 flex items-center justify-center text-center">
                <IoMdAdd className="mr-2" />
                Add Shop
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
