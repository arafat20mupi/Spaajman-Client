
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const job = useLoaderData();

  return (
    <div className="p-16 pt-28 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Job Title:</h2>
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
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

      <p className="text-lg font-medium"><strong>Location:</strong> {job.city}</p>
    </div>
  );
};

export default JobDetails;
