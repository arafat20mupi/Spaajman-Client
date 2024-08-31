 
 
import React, { useState } from 'react';

 

import { useContext,  } from 'react';
import { FaHome, FaSuitcase ,FaBlogger} from 'react-icons/fa';
 
import { IoMdAdd } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user,logOut } = useContext(AuthContext)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 const handleLogOut = () => {
        logOut();
        toast.success('Successfully logout!')
    }
  return (
    <nav className="p-4 bg-white shadow-md flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <div className="text-2xl font-bold text-indigo-700">
        <h1>Spaajman</h1>
      </div>

      <div className="block md:hidden">
        <button
          onClick={toggleMenu}
          className="text-indigo-700 focus:outline-none"
          aria-label="Toggle menu"
        >
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
        </button>
      </div>

      <div
        className={`${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:translate-x-0 fixed top-16 right-0 w-4/5 bg-white md:static md:flex md:items-center md:w-auto transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mr-6 p-4 md:p-0 lg:mr-10">
          <Link to="/" >
            <li className="flex items-center text-gray-800 font-medium hover:text-indigo-600 cursor-pointer transition duration-300">
              <FaHome className="mr-2" />
              Home
            </li></Link>
          {/* <Link to= '/services/:shopId'>
                <li className="flex items-center text-gray-800 font-medium hover:text-indigo-600 cursor-pointer transition duration-300">
            <FaBlogger className="mr-2" />
        Blogs
          </li></Link> */}
 
          <Link to= '/blog'>
                <li className="flex items-center text-gray-800 font-medium hover:text-indigo-600 cursor-pointer transition duration-300">
            <FaBlogger className="mr-2" />
        Blogs
          </li></Link>
 
        </ul>

        <div className="flex flex-col md:flex-row gap-4 items-center p-4 md:p-0">
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center w-full md:w-auto text-center">
            <FaSuitcase className="mr-2" />
            Find a Job
          </button>
          {
            user ? <button onClick={handleLogOut} className="border-2 border-indigo-600 text-indigo-600 px-5 py-2 rounded-lg shadow-lg hover:bg-indigo-50 transition duration-300 flex items-center justify-center w-full md:w-auto text-center">
              LogOut
            </button> : <Link to="/register">
              <button className="border-2 border-indigo-600 text-indigo-600 px-5 py-2 rounded-lg shadow-lg hover:bg-indigo-50 transition duration-300 flex items-center justify-center w-full md:w-auto text-center">
                <IoMdAdd className="mr-2" />
                Create an Shop
              </button>
            </Link>
          }


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
