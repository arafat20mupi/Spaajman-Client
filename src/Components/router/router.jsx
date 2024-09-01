
import { createBrowserRouter } from 'react-router-dom';


import App from '../../App';
import Home from '../Home/Home';
import Register from "../Register"
import ServicesPage from "../ServicesPage"
import Login from "../Login"
import Blog from '../Blog';
import BlogDetails from '../BlogDetails';
import UserProfile from '../JopPOst';
import JobList from '../JobList';
import JobDetails from '../JobDetails';
import JobApplicationForm from '../JobApplicationForm';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/services/:id',
        element: <ServicesPage />,
        loader: ({ params }) => fetch(`https://server-coral-alpha-78.vercel.app/shop/${params.id}`)
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
        loader: ({ params }) => fetch(`https://server-coral-alpha-78.vercel.app/blogs/${params.id}`)
      },
      {
        path: "/post-job",
        element: <UserProfile />
      }
      ,
      {
        path: "/job-search",
        element: <JobList />
      },
      {
        path: "/job-details/:id",
        element: <JobDetails />,
        loader: ({ params }) => fetch(`https://server-coral-alpha-78.vercel.app/jobs/${params.id}`)
      }
      ,
      {
        path: "/job/:id/apply",
        element: <JobApplicationForm />
      }
    ],
  },
]);
