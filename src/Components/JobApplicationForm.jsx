import React from 'react';
import { useParams } from 'react-router-dom';

const JobApplicationForm = () => {
  const { id } = useParams();
  
  const handleSubmit = (e) => {
    e.preventDefault();
 
  };

  return (
    <div className="p-16 pt-28">
      <h1 className="text-2xl font-bold mb-4">Apply for Job ID: {id}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" className="block w-full mb-4 p-2 border" required />
        <input type="email" placeholder="Your Email" className="block w-full mb-4 p-2 border" required />
        <textarea placeholder="Why are you a good fit?" className="block w-full mb-4 p-2 border" rows="5" required></textarea>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
