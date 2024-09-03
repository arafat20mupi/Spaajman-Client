
// import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';

import Dashbord from "./Components/Dashboard/Dashbord";

// import Footer from './Components/Footer';
// import Whatsapp from './Components/Whatsapp';



const App = () => {
  return (
    <div className=''>
       <Navbar />
      {/* <div className='min-h-[calc(100vh-559.2px)] w-[95%] mx-auto'>
        <Outlet />
      </div>
      <Whatsapp/>
      <Footer /> */}
      <Dashbord/>
    </div>


  );
};

export default App;
