
import { Link, Outlet } from 'react-router-dom';
const Dashboard = () => {

  return (
    <div className='w-full grid grid-cols-3 min-h-screen gap-3 mt-16'>
      <div className={`bg-white w-full col-span-1 mt-3  shadow-sm rounded-md h-full   flex flex-col`}>
        <ul>
          <li>
            <h1 className=" text-2xl my-2 font-bold">Dashboard</h1>
          </li>
          <li className="mb-6">
            <Link to="/dashboard/Orders">
              <button className="bg-indigo-600 text-white px-5 py-2 w-full justify-start rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 flex items-center text-center">
                Orders
              </button>
            </Link>
          </li>
          <li className="mb-6">
            <Link to="/dashboard/Customer">
              <button className="bg-indigo-600 text-white px-5 py-2 w-full justify-start rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 flex items-center text-center">
                Customer
              </button>
            </Link>
          </li>
          {/* Add more items as needed */}
          <li className='mb-6'>
            <Link to="/dashboard/post-job">
              <button className="bg-indigo-600 text-white px-5 py-2 w-full justify-start rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 flex items-center text-center">
                Post Job
              </button>
            </Link>
          </li>
          <Link to="/dashboard/registerShop">
            <button className="bg-indigo-600 text-white px-5 py-2 w-full justify-start rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 flex items-center text-center">
              Request Shop
            </button>
          </Link>
        </ul>
      </div>
      <div className="w-full col-span-2">
        <Outlet></Outlet>
      </div>
    </div>

  )
}

export default Dashboard
