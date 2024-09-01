import { Link, useLoaderData } from "react-router-dom";


const BlogDetails = () => {
  const blog = useLoaderData()

  return (
    <div className="p-5 pt-24 flex flex-col items-center  mx-auto  text-center">
      <img src={blog.image} alt={blog.title} className="w-fit h-64 object-cover rounded-md mb-4" />
      <div className="mb-4">
        <p className="text-sm text-gray-500 mb-1">{blog.date} by {blog.author}</p>
        <h2 className="text-2xl font-semibold">{blog.title}</h2>
      </div>
      <p className="text-gray-700 mb-4">{blog.description}</p>
      <div className="flex gap-2">
        {blog?.tags.map((tag, index) => (
          <span key={index} className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
            {tag}
          </span>
        ))}
      </div>
      <Link to={'/blog'}>
        <button className="relative mt-5 inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
          <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span className="relative">Back now</span>
        </button>
      </Link>
    </div>

  );
};

export default BlogDetails;
