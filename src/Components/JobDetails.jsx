/* eslint-disable react/no-unknown-property */

import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const job = useLoaderData();
  console.log(job.images)

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
      <div className='grid grid-cols-3 gap-2 my-3'>
        {job.images && job.images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Job related image ${index + 1}`} className='rounded-md' />
          </div>
        ))}

      </div>
      {/* <Link to={'/job-search'} className="relative mt-4 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-indigo-500 rounded-full shadow-md group">
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-600 group-hover:translate-x-0 ease">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-indigo-500 transition-all duration-300 transform group-hover:translate-x-full ease">Back now</span>
        <span className="relative invisible">Back now</span>
      </Link> */}
      <Link to={'/job-search'} class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
        <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-indigo-500 opacity-[3%]"></span>
        <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-indigo-600 opacity-100 group-hover:-translate-x-8"></span>
        <span class="relative w-full text-left text-indigo-600 transition-colors duration-200 ease-in-out group-hover:text-white">Back Now</span>
        <span class="absolute inset-0 border-2 border-indigo-600 rounded-full"></span>
      </Link>
    </div>
  );
};

export default JobDetails;
