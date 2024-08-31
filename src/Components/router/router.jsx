 
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
        path: '/services/:shopId',  
        element: <ServicesPage />,
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/blog",
        element: <Blog/>
      },
      {
        path:"/blog/:id",
        element:  <BlogDetails/>
      },
      {
        path:"/post-job",
        element:  <UserProfile/>
      }
      ,
      {
        path:"/job-search",
        element:  <JobList/>
      },
      {
        path:"/job/:id/details",
        element:<JobDetails/>
      }
      ,
      {
        path:"/job/:id/apply",
        element: <JobApplicationForm/>
      }
    ],
  },
]);
