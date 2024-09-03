import React, { useState } from 'react'
import './Dashboard.css'
const Dashboard = () => {
  const [open, setOpen] = useState(false)
  const customers = [
    { name: 'Jane Cooper', company: 'Microsoft', phone: '(225) 555-0118', email: 'jane@microsoft.com', country: 'United States', status: 'Active' },
    { name: 'Ronald Richards', company: 'Yahoo', phone: '(225) 555-0118', email: 'ronald@yahoo.com', country: 'Israel', status: 'Inactive' },
    { name: 'Ronald Richards', company: 'Yahoo', phone: '(225) 555-0118', email: 'ronald@yahoo.com', country: 'Israel', status: 'Inactive' },
    { name: 'Ronald Richards', company: 'Yahoo', phone: '(225) 555-0118', email: 'ronald@yahoo.com', country: 'Israel', status: 'Inactive' },
    { name: 'Ronald Richards', company: 'Yahoo', phone: '(225) 555-0118', email: 'ronald@yahoo.com', country: 'Israel', status: 'Inactive' },
    { name: 'Ronald Richards', company: 'Yahoo', phone: '(225) 555-0118', email: 'ronald@yahoo.com', country: 'Israel', status: 'Inactive' },
  ];
  return (
    <div>

      {/* sidebar */}
      <div className={`bg-white sidebar fixed shadow-md mt-[63px] h-[90vh] w-64 p-4 flex flex-col ${open ? 'open' : ''}`}>
        <div className="mb-8">
          <h1 className="mt-10 text-2xl font-bold">Dashboard</h1>
        </div>
        <nav>
          <ul>
            <li className="py-3">
              <a href="#" className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <i className="icon-class mr-3"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li className="mb-6">
              <a href="#" className="flex items-center p-2 text-gray-600 bg-blue-50 text-blue-500 rounded-lg">
                <i className="icon-class mr-3"></i>
                <span>Customers</span>
              </a>
            </li>
            {/* Add more items as needed */}
          </ul>
        </nav>
      </div>
      {/* sidebar */}
      {/* Dashbord */}
      <span className={`lg:hidden cursor-pointer relative p-5 text-2xl float-right top-20 z-50 `} onClick={()=>setOpen(!open)}>
        {
          open ?
            <i className="fa-solid  fa-xmark"></i>
            :

            <i className="fa-solid fa-bars"></i>
        }
      </span>
      <div className="p-4 mt-20 lg:mt-0 z-40 absolute lg:ml-56 xl:ml-56 2xl:ml-56 top-16 bottom-0 left-0 right-0 md:p-8 flex-1 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Total Customers</h3>
            <p className="text-2xl mt-2">5,423</p>
            <p className="text-gray-500">+120 this month</p>
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

        <div className="bg-whitelg:w-auto p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">All Customers</h3>
          <div className="">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-gray-600">
                    <th className="py-2 pr-10 lg:pr-0 text-left">Customer Name</th>
                    <th className="py-2 pr-10 lg:pr-0 text-left">Company</th>
                    <th className="py-2 pr-10 lg:pr-0 text-left">Phone Number</th>
                    <th className="py-2 pr-10 lg:pr-0 text-left">Email</th>
                    <th className="py-2 pr-10 lg:pr-0 text-left">Country</th>
                    <th className="py-2 pr-10 lg:pr-0 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer, index) => (
                    <tr key={index} className="border-t text-gray-800">
                      <td className="py-2 pr-10 lg:pr-0">{customer.name}</td>
                      <td className="py-2 pr-10 lg:pr-0">{customer.company}</td>
                      <td className="py-2 pr-10 lg:pr-0">{customer.phone}</td>
                      <td className="py-2 pr-10 lg:pr-0">{customer.email}</td>
                      <td className="py-2 pr-10 lg:pr-0">{customer.country}</td>
                      <td className="py-2 pr-10 lg:pr-0">
                        <span
                          className={`px-2 py-1 rounded-full text-sm ${customer.status === 'Active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                            }`}
                        >
                          {customer.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>


          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-600">Showing 1 to 10 of 256 entries</span>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-gray-300 text-gray-600 rounded-lg">Previous</button>
              <button className="px-3 py-1 border border-gray-300 text-gray-600 rounded-lg">Next</button>
            </div>
          </div>
        </div>
      </div>
      {/* Dashbord */}
    </div>

  )
}

export default Dashboard
