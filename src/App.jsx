
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';

import Footer from './Components/Footer';



const App = () => {
  return (
    <div className=''>
      <Navbar />
      <div className='min-h-[calc(100vh-559.2px)] w-[95%] mx-auto'>
        <Outlet />
      </div>
      <Footer />
    </div>


  );
};

export default App;
