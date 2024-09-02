import { useState } from 'react';
import { Link } from 'react-router-dom';
import useJobs from '../Hooks/useJobs';
import Loading from './Loading/Loading';

const JobList = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [jobs, loading] = useJobs()

  if (loading) return <Loading />

  const handleTagChange = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? [] : [tag]
    );
  };

  const filteredJobs = selectedTags.length === 0
    ? jobs
    : jobs.filter(job => job.role.includes(selectedTags[0]));
  console.log(filteredJobs);
  return (
    <div className="p-16 pt-24">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Jobs</h1>

      <div className="text-center mb-6">
        <button
          onClick={() => handleTagChange('salon')}
          className={`py-2 px-4 rounded-lg mr-2 ${selectedTags.includes('Salon') ? 'bg-blue-600 text-white' : 'bg-blue-300 text-blue-800'}`}
        >
          Salon
        </button>
        <button
          onClick={() => handleTagChange('spa')}
          className={`py-2 px-4 rounded-lg mr-2 ${selectedTags.includes('Spa') ? 'bg-blue-600 text-white' : 'bg-blue-300 text-blue-800'}`}
        >
          Spa
        </button>
        <button
          onClick={() => handleTagChange('massage')}
          className={`py-2 px-4 rounded-lg mr-2 ${selectedTags.includes('Massage') ? 'bg-blue-600 text-white' : 'bg-blue-300 text-blue-800'}`}
        >
          Massage
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          
          <div key={job._id} className="border border-gray-300 p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{job.title}</h2>
            <p className="text-gray-600 mb-1 text-sm font-medium">{job.city}</p>
            <p className="text-gray-700 mb-4">{job.description}</p>
            <div className="flex justify-between">

              <Link
                to={`/job-details/${job._id}`}
                className="rounded-md px-3.5 py-2    bg-indigo-400 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-white"
              >
                <span
                  className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"
                ></span>
                <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
                  Details
                </span>
              </Link>

              <Link
                to={`/job/${jobs._id}/apply`}
                className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 border  bg-green-100 rounded-lg shadow-inner group"
              >
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300  bg-green-800  opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                  Apply Now
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
