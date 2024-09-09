
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
        <button type='submit'

          className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 "
        >
          <span
            className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-20 group-hover:-translate-y-32 ease"
          ></span>
          <span
            className="relative text-indigo-600 transition duration-300 group-hover:text-black ease"
          >
            Apply Now
          </span>
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
