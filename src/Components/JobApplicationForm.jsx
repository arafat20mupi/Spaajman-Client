import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const JobApplicationForm = () => {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // Log the form data to the console
    console.log({ id, ...data });

    // Reset form fields after submission
    reset();
  };

  return (
    <div className="p-16 pt-28">
      <h1 className="text-2xl font-bold mb-4">Apply for Job ID: {id}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Your Name"
          className="block w-full mb-4 p-2 border"
          {...register('name', { required: true })}
        />
        <input
          type="email"
          placeholder="Your Email"
          className="block w-full mb-4 p-2 border"
          {...register('email', { required: true })}
        />
        <textarea
          placeholder="Why are you a good fit?"
          className="block w-full mb-4 p-2 border"
          rows="5"
          {...register('message', { required: true })}
        ></textarea>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
