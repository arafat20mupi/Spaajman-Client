/* eslint-disable react/no-unknown-property */

import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const job = useLoaderData();

  return (
    <div className="p-16 pt-28 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Job Title : {job.title}</h1>
      <h2 className="text-xl font-semibold mb-2">Job Description: </h2>
      <p className="text-gray-700 mb-6">{job.description}</p>

      <h2 className="text-xl font-semibold mb-2">Responsibilities:</h2>
      <ul className="list-disc list-inside mb-6">
        {job.responsibilities}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Requirements:</h2>
      <ul className="list-disc list-inside mb-6">
        {job.requirements}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Benefits:</h2>
      <ul className="list-disc list-inside mb-6">
        {job.benefits}
      </ul>

      <p className="text-lg font-medium"><strong>Location:</strong> {job.location}</p>

      <Link to={'/job-search'} className="relative mt-4 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Back now</span>
        <span className="relative invisible">Back now</span>
      </Link>
    </div>
  );
};

export default JobDetails;
