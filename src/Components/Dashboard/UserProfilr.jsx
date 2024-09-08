import React from 'react';

const UserProfile = () => {
  // Sample user data (you can fetch this from an API or context)
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    photoURL: 'https://via.placeholder.com/150',
    location: 'Dhaka, Bangladesh',
    joinedDate: 'January 2023'
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
        <div className="flex flex-col items-center">
          {/* User Image */}
          <img
            className="w-24 h-24 rounded-full border-2 border-gray-300 mb-4"
            src={user.photoURL}
            alt={`${user.name}'s profile`}
          />

          {/* User Information */}
          <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>

          {/* Additional Information */}
          <div className="mt-4">
            <p className="text-gray-500">Location: {user.location}</p>
            <p className="text-gray-500">Joined: {user.joinedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
