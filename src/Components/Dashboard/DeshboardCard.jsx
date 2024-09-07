
const DeshboardCard = () => {
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
            <div className="p-8  bg-gray-50">
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
            </div>
            <div className="bg-white lg:w-auto p-6 rounded-lg shadow-md">
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
    );
};

export default DeshboardCard;