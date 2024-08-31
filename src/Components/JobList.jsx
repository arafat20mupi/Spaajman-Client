import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const JobList = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const jobs = [
    { id: 1, title: 'Spa Manager', location: 'Dhaka', description: 'Manage daily spa operations.', tags: ['Spa'] },
    { id: 2, title: 'Salon Hair Stylist', location: 'Bogura', description: 'Provide hairstyling services.', tags: ['Salon'] },
    { id: 3, title: 'Massage Therapist', location: 'Chittagong', description: 'Provide professional massage therapy.', tags: ['Massage'] },
    { id: 4, title: 'Nail Technician', location: 'Sylhet', description: 'Perform manicures and pedicures.', tags: ['Salon'] },
    { id: 5, title: 'Receptionist', location: 'Dhaka', description: 'Manage front desk and customer service.', tags: ['Spa'] },
    { id: 6, title: 'Beauty Consultant', location: 'Rajshahi', description: 'Advise clients on beauty products.', tags: ['Salon', 'Spa'] },
    { id: 7, title: 'Hair Color Specialist', location: 'Dhaka', description: 'Specialize in hair coloring techniques.', tags: ['Salon'] },
    { id: 8, title: 'Aesthetician', location: 'Chittagong', description: 'Provide skincare treatments and facials.', tags: ['Spa'] },
 
  ];

  const handleTagChange = (tag) => {
    setSelectedTags((prevTags) => 
      prevTags.includes(tag) ? [] : [tag]
    );
  };

  const filteredJobs = selectedTags.length === 0
    ? jobs
    : jobs.filter(job => job.tags.includes(selectedTags[0]));

  return (
    <div className="p-16 pt-24">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Jobs</h1>
      
      {/* Tag Filter Buttons */}
      <div className="text-center mb-6">
        <button
          onClick={() => handleTagChange('Salon')}
          className={`py-2 px-4 rounded-lg mr-2 ${selectedTags.includes('Salon') ? 'bg-blue-600 text-white' : 'bg-blue-300 text-blue-800'}`}
        >
          Salon
        </button>
        <button
          onClick={() => handleTagChange('Spa')}
          className={`py-2 px-4 rounded-lg mr-2 ${selectedTags.includes('Spa') ? 'bg-blue-600 text-white' : 'bg-blue-300 text-blue-800'}`}
        >
          Spa
        </button>
        <button
          onClick={() => handleTagChange('Massage')}
          className={`py-2 px-4 rounded-lg mr-2 ${selectedTags.includes('Massage') ? 'bg-blue-600 text-white' : 'bg-blue-300 text-blue-800'}`}
        >
          Massage
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <div key={job.id} className="border border-gray-300 p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{job.title}</h2>
            <p className="text-gray-600 mb-1 text-sm font-medium">{job.location}</p>
            <p className="text-gray-700 mb-4">{job.description}</p>
            <div className="flex justify-between">
              <Link
                to={`/job/${job.id}/details`}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out"
              >
                Details
              </Link>
              <Link
                to={`/job/${job.id}/apply`}
                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300 ease-in-out"
              >
                Apply Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
