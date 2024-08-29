 
import { createBrowserRouter } from 'react-router-dom';
 

import App from '../../App';
import Home from '../Home/Home';
import Register from "../Register"
import ServicesPage from "../ServicesPage"
import Login from "../Login"
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
      }
    ],
  },
]);
