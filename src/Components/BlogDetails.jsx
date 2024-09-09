import { Link, useLoaderData } from "react-router-dom";


const BlogDetails = () => {
  const blog = useLoaderData()

  return ( 
    <div className="p-5 pt-24 flex flex-col items-center  mx-auto  text-center">
      <img src={blog.image} alt={blog.title} className="w-fit h-64 object-cover rounded-md mb-4" />
      <div className="mb-4">
        <p className="text-sm text-gray-500 mb-1">{ blog.date} by {blog.author}</p>
        <h2 className="text-2xl font-semibold">{blog.title}</h2>
      </div>
      <p className="text-gray-700 mb-4">{blog.description}</p>
      <div className="flex gap-2">
        {blog?.tags?.map((tag, index) => (
          <span key={index} className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
            {tag}
          </span>
        ))}
      </div>
      <Link to={'/blog'} class="relative my-5 inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
              <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-indigo-500 opacity-[3%]"></span>
              <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-indigo-600 opacity-100 group-hover:-translate-x-8"></span>
              <span class="relative w-full text-left text-indigo-600 transition-colors duration-200 ease-in-out group-hover:text-white">Back Now</span>
              <span class="absolute inset-0 border-2 border-indigo-600 rounded-full"></span>
            </Link>
    </div>

  );
};

export default BlogDetails;
